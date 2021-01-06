import { Component, OnInit } from '@angular/core';
import { Book} from 'src/app/interfaces/book';
import {BooksService} from 'src/app/services/books.service';
import { Router } from '@angular/router'
import { tick } from '@angular/core/testing';
import { title } from 'process';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  book:Book= {
    title:'',
    author:'',
    genre:'',
    image:''
  }
  constructor(private _book:BooksService,
    private _router:Router
   ) { }


  ngOnInit(): void {
  }

  addBook(){
    console.log("Adding to DB.."); 
    this._book.addBook(this.book);
    console.log("SUCCESS!"); 
    this._router.navigate(['books']);
  }
}
