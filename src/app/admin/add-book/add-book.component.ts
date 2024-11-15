import {Component, OnInit} from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import {BookDTO} from "../../models/book.model";
import {AuthorService} from "../../services/author.service";
import {BookService} from "../../services/book.service";
import {Author} from "../../models/author.model";

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  bookData: BookDTO = {
    title: '',
    authorId: '',
    genre: '',
    isbn: '',
    description: '',
    coverImageUrl: '',
    tags: [] as string[]
  };

  authors: Author[] = []; // Array to hold the authors
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

  constructor(private authorService: AuthorService, private bookService: BookService, private firestore: AngularFirestore) {
  }

  ngOnInit(): void {
    // Fetch authors using the AuthorService
    this.authorService.getAllAuthors().subscribe(authors => {
      this.authors = authors; // Populate authors array
    });
  }

  onSubmit() {
    // Directly call the addBook method from BookService to add the book
    this.bookService.addBook(this.bookData).then(() => {
      alert('Book added successfully!');
      // Optionally handle success (e.g., clear form, show message, etc.)
    }).catch((error) => {
      alert('Error adding book!!');
    });
  }

  // Handle checkbox change (add/remove tag from tags array)
  onTagChange(tag: string, event: any): void {
    if (event.target.checked) {
      this.bookData.tags.push(tag);  // Add tag if checked
    } else {
      const index = this.bookData.tags.indexOf(tag);
      if (index > -1) {
        this.bookData.tags.splice(index, 1);  // Remove tag if unchecked
      }
    }
  }
}
