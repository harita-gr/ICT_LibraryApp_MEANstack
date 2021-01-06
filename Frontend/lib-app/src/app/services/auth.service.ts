import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from 'src/app/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  validateUser(user:any){
    return this.http.post<any>("http://localhost:3000/adminLogin",user);
    
  }

  registerUser(user:User){
    return this.http.post<any>("http://localhost:3000/register",user);
  }

  validateUserLogin(user:any){
    return this.http.post<any>("http://localhost:3000/login",user);
  }

  constructor(private http:HttpClient) { }

  loggedIn(){
    return !!localStorage.getItem('token');
  }

  getToken(){
   return localStorage.getItem('token');
  }
}
