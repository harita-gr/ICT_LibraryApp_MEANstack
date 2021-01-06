import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Author } from '../interfaces/author';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
  
  constructor(private http:HttpClient) { }

  getAuthorsList(){
    return this.http.get<any>("http://localhost:3000/authors");   
  }

  addAuthor(author:any){
    return this.http.post("http://localhost:3000/addAauthors",author)
    .subscribe(data =>{console.log(data)});
  }

  getAuthor(id:any){
    return  this.http.get("http://localhost:3000/viewAuthor/"+id);
  }

  deleteAuthor(id: any) {
    return this.http.delete("http://localhost:3000/removeAuthor/"+id)
  }

  editAuthor(author: any,id:any) {
    console.log('author details update')
    return this.http.post("http://localhost:3000/updateAuthor/"+id,author)
    .subscribe(data =>{console.log(data)})
  }
}
