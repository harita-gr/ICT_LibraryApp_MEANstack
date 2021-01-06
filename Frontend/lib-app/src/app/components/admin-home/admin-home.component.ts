import { Component, OnInit } from '@angular/core';
import {AuthService} from 'src/app/services/auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  constructor(private _auth:AuthService,
    private _router:Router
) {
 }

ngOnInit(): void {
}




  

}
