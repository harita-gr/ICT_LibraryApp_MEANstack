import { Component, OnInit } from '@angular/core';
import { Author} from 'src/app/interfaces/author';
import {AuthorsService} from 'src/app/services/authors.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-author',
  templateUrl: './update-author.component.html',
  styleUrls: ['./update-author.component.css']
})
export class UpdateAuthorComponent implements OnInit {

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
    let id = localStorage.getItem("editAuthorId");
    this._author.getAuthor(id).subscribe((data)=>{
      this.author=JSON.parse(JSON.stringify(data));
  })
  }
  
  editAuthor()
  { 
    let id = localStorage.getItem("editAuthorId")   
    this._author.editAuthor(this.author,id);   
    alert("Success");
    this._router.navigate(['authors']);
  }


}
