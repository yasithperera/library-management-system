import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AddAuthorComponent} from "./admin/add-author/add-author.component";
import {AddBookComponent} from "./admin/add-book/add-book.component";
import {HomeComponent} from "./home/home.component";
import {BookListComponent} from "./book-list/book-list.component";
import {ContactUsComponent} from "./contact-us/contact-us.component";
import {AboutComponent} from "./about/about.component";
import {LoginComponent} from "./login/login.component";
import {ManageAuthorsComponent} from "./admin/manage-authors/manage-authors.component";
import {ManageBooksComponent} from "./admin/manage-books/manage-books.component";
import {DashboardComponent} from "./admin/dashboard/dashboard.component";
import {UpdateAuthorComponent} from "./admin/update-author/update-author.component";
import {UpdateBookComponent} from "./admin/update-book/update-book.component";
import {AuthGuard} from "./auth.guard";
import {UnauthorizedComponent} from "./unauthorized/unauthorized.component";

const routes: Routes = [
  {path: '', component: HomeComponent}, // Default path
  {path: 'add-author', component: AddAuthorComponent, canActivate: [AuthGuard]}, // Add Author page
  {path: 'add-book', component: AddBookComponent, canActivate: [AuthGuard]}, // Add Book page
  {path: 'search-book-list', component: BookListComponent},
  {path: 'unauthorized', component: UnauthorizedComponent},
  {path: 'contact-us', component: ContactUsComponent},
  {path: 'about', component: AboutComponent},// Add Book page
  {path: 'login', component: LoginComponent},// Admin Login
  {path: 'authors', component: ManageAuthorsComponent, canActivate: [AuthGuard]},// Manage Authors
  {path: 'books', component: ManageBooksComponent, canActivate: [AuthGuard]},// Manage Books
  {path: 'admin-dashboard', component: DashboardComponent, canActivate: [AuthGuard]},// Admin Dashboard
  {path: 'update-author/:id', component: UpdateAuthorComponent, canActivate: [AuthGuard]},
  {path: 'update-book/:id', component: UpdateBookComponent, canActivate: [AuthGuard]}

  // You can add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
