import { Component, OnInit } from '@angular/core';
import { Book} from 'src/app/interfaces/book';
import {BooksService} from 'src/app/services/books.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-book-i',
  templateUrl: './book-i.component.html',
  styleUrls: ['./book-i.component.css']
})
export class BookIComponent implements OnInit {

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
    let id = localStorage.getItem("viewBookId");
    this._book.getBook(id).subscribe((data)=>{
      this.book=JSON.parse(JSON.stringify(data));
  })
  }

  goBack(){
    this._router.navigate(['books']);
  }

}
