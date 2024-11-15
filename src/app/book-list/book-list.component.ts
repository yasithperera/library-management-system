import {Component, OnInit} from '@angular/core';
import {BookService} from '../services/book.service';
import {AuthorService} from '../services/author.service';
import {Book} from '../models/book.model';
import {Author} from '../models/author.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent implements OnInit {
  searchType: 'all' | 'title' | 'author' | 'isbn' = 'all';
  searchQuery: string = '';
  selectedAuthorId: string = '';
  books: Book[] = [];
  authors: Author[] = [];

  constructor(private bookService: BookService, private authorService: AuthorService) {
  }

  ngOnInit() {
    this.loadAllAuthors();
    this.loadAllBooks();
  }

  // Load all books initially
  loadAllBooks() {
    this.bookService.getAllBooks().subscribe((data) => {
      this.books = data;
    });
  }

  // Load authors for the dropdown
  loadAllAuthors() {
    this.authorService.getAllAuthors().subscribe((data) => {
      this.authors = data;
    });
  }

  // Get author name by ID
  getAuthorName(authorId: string): string {
    const author = this.authors.find((a) => a.id === authorId);
    return author ? author.name : 'Unknown Author';
  }

  // Handle search type change
  onSearchTypeChange() {
    this.books = []; // Clear books list when search type changes
    if (this.searchType === 'all') {
      this.loadAllBooks();
    }
  }

  // Perform search
  onSearch() {
    if (this.searchType === 'title') {
      this.bookService.searchBooksByPartialTitle(this.searchQuery).subscribe((data) => {
        this.books = data;
      });
    } else if (this.searchType === 'author') {
      this.bookService.searchBooksByAuthor(this.selectedAuthorId).subscribe((data) => {
        this.books = data;
      });
    } else if (this.searchType === 'isbn') {
      this.bookService.searchBooksByIsbn(this.searchQuery).subscribe((data) => {
        this.books = data;
      });
    } else {
      this.loadAllBooks();
    }
  }
}
