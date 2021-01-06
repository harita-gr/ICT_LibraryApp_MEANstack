import { Component, OnInit } from '@angular/core';
import { Book} from 'src/app/interfaces/book';
import {BooksService} from 'src/app/services/books.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {

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
    let id = localStorage.getItem("editBookId");
    this._book.getBook(id).subscribe((data)=>{
      this.book=JSON.parse(JSON.stringify(data));
  })
  }
 

  editBook()
  { 
    let id = localStorage.getItem("editBookId")   
    this._book.editBook(this.book,id);   
    alert("Success");
    this._router.navigate(['books']);
  }
}
