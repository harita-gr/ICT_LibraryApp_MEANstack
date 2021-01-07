import { Component, OnInit } from '@angular/core';
import { Book} from 'src/app/interfaces/book';
import {BooksService} from 'src/app/services/books.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  userType:string;
  books:Book[];
  constructor(private _book:BooksService,
    private _router:Router
   ) {

    let userType=localStorage.getItem("userType");
    this.userType=userType;
    }

  ngOnInit(): void {
      this._book.getBooksList().subscribe((data)=>{
        this.books=JSON.parse(JSON.stringify(data));
    })
  }

  viewBook(book:any){
    localStorage.setItem("viewBookId", book._id.toString());
    this._router.navigate(['viewBook']);
  }

  editBook(book:any)
  {
    localStorage.setItem("editBookId", book._id.toString());
    this._router.navigate(['updateBook']);
  }
  deleteBook(book:any)
  {
    this._book.deleteBook(book._id)
      .subscribe((data) => {
        this.books = this.books.filter(p => p !== book);
      })  

  }

  endAlert(){
    alert("That's it folks!!");
    this._router.navigate(['books']);
  }
}

  


