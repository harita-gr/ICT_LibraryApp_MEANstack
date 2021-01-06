import { Component, Input, OnInit, OnChanges } from '@angular/core';
import {AuthService} from 'src/app/services/auth.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userType=localStorage.getItem("userType");
 

  constructor(public _auth:AuthService,
              private _router:Router         
    ) { }

  ngOnInit(): void {
    
  }

  logoutUser()
{
localStorage.removeItem('token')
this._router.navigate([''])
}
loggedUser()
{
  this._router.navigate(['/books'])
}
  }

