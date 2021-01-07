import { Component, OnInit } from '@angular/core';
import { Author} from 'src/app/interfaces/author';
import {AuthorsService} from 'src/app/services/authors.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  userType:string;
  authors:Author[];
  constructor(private _author:AuthorsService,
    private _router:Router
   ) {
    let userType=localStorage.getItem("userType");
    this.userType=userType;
    }

  ngOnInit(): void {
      this._author.getAuthorsList().subscribe((data)=>{
        this.authors=JSON.parse(JSON.stringify(data));
    })
  }

  viewAuthor(author:any){
    localStorage.setItem("viewAuthorId", author._id.toString());
    this._router.navigate(['viewAuthor']);
  }

  editAuthor(author:any)
  {
    localStorage.setItem("editAuthorId", author._id.toString());
    this._router.navigate(['updateAuthor']);

  }
  deleteAuthor(author:any)
  {
    this._author.deleteAuthor(author._id)
      .subscribe((data) => {
        this.authors = this.authors.filter(p => p !== author);
      })
  

  }

  endAlert(){
    alert("That's it folks!!");
    this._router.navigate(['authors']);
  }
}