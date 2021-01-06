import { Component, OnInit } from '@angular/core';
import { Author} from 'src/app/interfaces/author';
import {AuthorsService} from 'src/app/services/authors.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
export class AddAuthorComponent implements OnInit {

  
  author:Author ={
    book:'',
    image:'',
    name:'',
    genre:''
  };
  constructor(private _author:AuthorsService,
    private _router:Router
   ) { }

  ngOnInit(): void {
  }

  addAuthor(){
    console.log("Adding to DB.."); 
    this._author.addAuthor(this.author);
    console.log("SUCCESS!"); 
    this._router.navigate(['authors']);
  }

}
