import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  

  constructor(private http:HttpClient) { }
 
  getBooksList(){
    return this.http.get<any>("http://localhost:3000/books");   
  }

  addBook(book:any){
    return this.http.post("http://localhost:3000/addBook",book)
    .subscribe(data =>{console.log(data)});
  }
  getBook(id:any){
    return  this.http.get("http://localhost:3000/viewBook/"+id);
  }

  deleteBook(id: any) {
    return this.http.delete("http://localhost:3000/removeBook/"+id)
  }

  editBook(book: any,id:any) {
    console.log('book details update')
    return this.http.post("http://localhost:3000/updateBook/"+id,book)
    .subscribe(data =>{console.log(data)})
  }

}
