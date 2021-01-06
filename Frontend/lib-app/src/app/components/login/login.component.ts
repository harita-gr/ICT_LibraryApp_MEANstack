import { Component, OnInit, Output } from '@angular/core';
import {AuthService} from 'src/app/services/auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _auth:AuthService,
              private _router:Router
    ) { }

  ngOnInit(): void {
  }
  //User object
  User={
    email:'',
    password:''
  };
// To set nav ID accordingly
  // @Output() loginOccured = new EventEmitter<number>();

  validateUserLogin(){
     this._auth.validateUserLogin(this.User)
     .subscribe(
      res => {
        localStorage.setItem('token', res.token);
        // this.loginOccured.emit(1);
        localStorage.setItem("userType",'user');
        this._router.navigate(['/userHome']);
      },
      err => {
        console.log(err);
        this._router.navigate(['/userLogin']);
        alert('Invalid Credentials! Please try again!')

      }
     )
    // alert('Successfully Validated! Logging in..')
  }
}



