import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {AdminHomeComponent} from './components/admin-home/admin-home.component';
import {AdminloginComponent} from './components/adminlogin/adminlogin.component';
import {UserHomeComponent} from './components/user-home/user-home.component';
import {BookComponent} from './components/book/book.component';
import {AuthorComponent} from './components/author/author.component'
import {AuthGuard} from 'src/app/auth.guard';
import { AddBookComponent } from './components/add-book/add-book.component';
import { AddAuthorComponent } from './components/add-author/add-author.component';
import {AuthorIComponent} from './components/author-i/author-i.component';
import {BookIComponent} from './components/book-i/book-i.component';
import {UpdateAuthorComponent} from './components/update-author/update-author.component';
import {UpdateBookComponent} from './components/update-book/update-book.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'index',component:HomeComponent},
  {path:'userLogin',component:LoginComponent},
  {path:'userRegister',component:RegisterComponent},
  {path:'adminlogin',component:AdminloginComponent},
  {path:'adminHome',component:AdminHomeComponent,canActivate:[AuthGuard]},
  {path:'userHome',component:UserHomeComponent},
  {path:'books',component:BookComponent},
  {path:'authors',component:AuthorComponent},
  {path:'addBook',component:AddBookComponent},
  {path:'addAuthor',component:AddAuthorComponent},
  {path:'viewAuthor',component:AuthorIComponent},
  {path:'viewBook',component:BookIComponent},
  {path:'updateAuthor',component:UpdateAuthorComponent},
  {path:'updateBook',component:UpdateBookComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
