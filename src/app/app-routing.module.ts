import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddAuthorComponent} from "./admin/add-author/add-author.component";
import {AddBookComponent} from "./admin/add-book/add-book.component";
import {HomeComponent} from "./home/home.component";
import {BookListComponent} from "./book-list/book-list.component";
import {ContactUsComponent} from "./contact-us/contact-us.component";
import {AboutComponent} from "./about/about.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  { path: '', component: HomeComponent }, // Default path
  { path: 'add-author', component: AddAuthorComponent }, // Add Author page
  { path: 'add-book', component: AddBookComponent }, // Add Book page
  { path: 'search-book-list', component: BookListComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'about', component: AboutComponent },// Add Book page
  { path: 'login', component: LoginComponent },// Admin Login
  // You can add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
