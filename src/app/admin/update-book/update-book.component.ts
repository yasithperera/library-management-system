import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BookService} from "../../services/book.service";
import {AuthorService} from "../../services/author.service";
import {Book} from "../../models/book.model";
import {Author} from "../../models/author.model";

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {
  bookData: Book = {
    id: '',
    title: '',
    authorId: '',
    genre: '',
    isbn: '',
    description: '',
    coverImageUrl: '',
    tags: []
  };
  authors: Author[] = [];
  availableTags: string[] = ['Fiction', 'Non-Fiction', 'Science', 'Technology', 'History', 'Novel', 'Religion', 'Biography', 'Self Development']; // Example tags
  genres: string[] = [
    'Fiction',
    'Non-Fiction',
    'Mystery',
    'Thriller',
    'Science Fiction',
    'Fantasy',
    'Romance',
    'Historical',
    'Biography',
    'Self-Help',
    'Health & Wellness',
    'Adventure',
    'Children\'s',
    'Young Adult',
    'Poetry',
    'Horror',
    'Philosophy',
    'Politics',
    'Art & Design',
    'Travel',
    'Food & Drink',
    'Sports',
    'Business',
    'Technology',
    'Science',
    'Religion & Spirituality',
    'Personal Development'
  ];


  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private authorService: AuthorService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    const bookId = this.route.snapshot.paramMap.get('id');
    if (bookId) {
      this.bookService.getBookById(bookId).subscribe((book) => {
        this.bookData = book;
      });
    }

    // Fetch authors for the selection dropdown
    this.authorService.getAllAuthors().subscribe((authors) => {
      this.authors = authors;
    });
  }

  onTagChange(tag: string, event: any): void {
    if (event.target.checked) {
      this.bookData.tags.push(tag);
    } else {
      const index = this.bookData.tags.indexOf(tag);
      if (index >= 0) {
        this.bookData.tags.splice(index, 1);
      }
    }
  }

  onSubmit(): void {
    // Call the updateBook method from BookService to update the book
    this.bookService.updateBook(this.bookData).subscribe(
      () => {
        // Redirect to the book list or success page
        alert('Updated successfully!');
        this.router.navigate(['/books']);  // Adjust the redirect path as needed
      },
      (error) => {
        alert('Updating failed!');
        console.error('Error updating book: ', error);
      }
    );
  }
}
