import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "../environments/environment";
import {BookListComponent} from './book-list/book-list.component';
import {BookDetailComponent} from './book-detail/book-detail.component';
import {AddBookComponent} from './admin/add-book/add-book.component';
import {AuthorListComponent} from './author-list/author-list.component';
import {AddAuthorComponent} from './admin/add-author/add-author.component';
import {FormsModule} from "@angular/forms";
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ManageAuthorsComponent } from './admin/manage-authors/manage-authors.component';
import { ManageBooksComponent } from './admin/manage-books/manage-books.component';
import { UpdateAuthorComponent } from './admin/update-author/update-author.component';
import { UpdateBookComponent } from './admin/update-book/update-book.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookDetailComponent,
    AddBookComponent,
    AuthorListComponent,
    AddAuthorComponent,
    HomeComponent,
    HeaderComponent,
    ContactUsComponent,
    AboutComponent,
    LoginComponent,
    DashboardComponent,
    ManageAuthorsComponent,
    ManageBooksComponent,
    UpdateAuthorComponent,
    UpdateBookComponent,
    UnauthorizedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
