import { Component, OnInit } from '@angular/core';
import {BookService} from "../../services/book.service";
import {AuthorService} from "../../services/author.service";
import {Book} from "../../models/book.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-manage-books',
  templateUrl: './manage-books.component.html',
  styleUrls: ['./manage-books.component.css'],
})
export class ManageBooksComponent implements OnInit {
  books: any[] = [];
  authors: any[] = [];

  constructor(
    private bookService: BookService,
    private authorService: AuthorService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadBooks();
    this.loadAuthors();
  }

  loadBooks(): void {
    this.bookService.getAllBooks().subscribe((data) => {
      this.books = data;
    });
  }

  loadAuthors(): void {
    this.authorService.getAllAuthors().subscribe((data) => {
      this.authors = data;
    });
  }

  deleteBook(bookId: string): void {
    this.bookService.deleteBook(bookId).then(() => {
      this.loadBooks();
    });
  }

  // Triggered when the user selects a book to edit
  updateBook(bookId: string): void {
    this.router.navigate([`/update-book`, bookId]);
  }
}
