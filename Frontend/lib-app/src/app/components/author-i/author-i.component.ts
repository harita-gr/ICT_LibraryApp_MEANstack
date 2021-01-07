import { Component, OnInit } from '@angular/core';
import { Author} from 'src/app/interfaces/author';
import {AuthorsService} from 'src/app/services/authors.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-author-i',
  templateUrl: './author-i.component.html',
  styleUrls: ['./author-i.component.css']
})
export class AuthorIComponent implements OnInit {

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
    let id = localStorage.getItem("viewAuthorId");
    this._author.getAuthor(id).subscribe((data)=>{
      this.author=JSON.parse(JSON.stringify(data));
  })
    
  }

  goBack(){
    this._router.navigate(['authors']);
  }


}
