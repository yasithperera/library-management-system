import {Injectable} from '@angular/core';
import {Book, BookDTO} from "../models/book.model";
import {Observable, from, catchError, map} from "rxjs";
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private booksCollection;

  constructor(private firestore: AngularFirestore) {
    this.booksCollection = this.firestore.collection<Book>('books'); // Firebase collection reference
  }

  // Method to add a book to Firestore
  addBook(bookData: BookDTO): Promise<void> {
    const bookId = this.firestore.createId(); // Generate a new ID for the book
    return this.booksCollection.doc(bookId).set(bookData);
  }

  // Method to get all books
  getAllBooks(): Observable<Book[]> {
    return this.booksCollection.valueChanges({idField: 'id'});
  }

  // Method to search books by title
  searchBooksByTitle(title: string): Observable<Book[]> {
    const query = this.booksCollection.ref.where('title', '==', title).get();
    return from(
      query.then((querySnapshot) => {
        const books: Book[] = [];
        querySnapshot.forEach((doc) => {
          books.push({id: doc.id, ...doc.data() as Book});
        });
        return books;
      })
    );
  }

  // Method to search books by partial title
  // searchBooksByPartialTitle(partialTitle: string): Observable<Book[]> {
  //   const endValue = partialTitle + '\uf8ff'; // Define the range end
  //   const query = this.booksCollection.ref
  //     .orderBy('title') // Order by title for range querying
  //     .startAt(partialTitle) // Start at the partial title
  //     .endAt(endValue) // End at the range
  //     .get();
  //
  //   return from(
  //     query.then((querySnapshot) => {
  //       const books: Book[] = [];
  //       querySnapshot.forEach((doc) => {
  //         books.push({ id: doc.id, ...doc.data() as Book });
  //       });
  //       return books;
  //     })
  //   );
  // }

  searchBooksByPartialTitle(partialTitle: string): Observable<Book[]> {
    const endValue = partialTitle + '\uf8ff'; // Add a high Unicode character to define the range
    return this.firestore
      .collection<Book>('books', ref =>
        ref.where('title', '>=', partialTitle).where('title', '<=', endValue)
      )
      .valueChanges();
  }

  // Method to search books by author
  searchBooksByAuthor(authorId: string): Observable<Book[]> {
    const query = this.booksCollection.ref.where('authorId', '==', authorId).get();
    return from(
      query.then((querySnapshot) => {
        const books: Book[] = [];
        querySnapshot.forEach((doc) => {
          books.push({id: doc.id, ...doc.data() as Book});
        });
        return books;
      })
    );
  }

  // Method to search books by ISBN
  searchBooksByIsbn(isbn: string): Observable<Book[]> {
    const query = this.booksCollection.ref.where('isbn', '==', isbn).get();
    return from(
      query.then((querySnapshot) => {
        const books: Book[] = [];
        querySnapshot.forEach((doc) => {
          books.push({id: doc.id, ...doc.data() as Book});
        });
        return books;
      })
    );
  }

  // Update a book by ID
  updateBook(book: Book): Observable<void> {
    return from(
      this.firestore.collection('books').doc(book.id).update({
        title: book.title,
        authorId: book.authorId,
        genre: book.genre,
        isbn: book.isbn,
        description: book.description,
        coverImageUrl: book.coverImageUrl,
        tags: book.tags
      })
    ).pipe(
      catchError(error => {
        console.error('Error updating book: ', error);
        throw error;  // or handle it based on your needs
      })
    );
  }


  // Delete a book by ID
  deleteBook(bookId: string): Promise<void> {
    return this.booksCollection.doc(bookId).delete();
  }

  // Fetch a book by its ID
  getBookById(id: string): Observable<Book> {
    return this.firestore.collection('books').doc(id).get().pipe(
      map(docSnapshot => {
        const data = docSnapshot.data();
        if (data && this.isBook(data)) {
          return {
            id: docSnapshot.id,
            title: data.title,
            authorId: data.authorId,
            genre: data.genre,
            isbn: data.isbn,
            description: data.description,
            coverImageUrl: data.coverImageUrl,
            tags: data.tags
          };
        } else {
          throw new Error('Invalid book data or book not found');
        }
      })
    );
  }

// Type guard to check if the data is a valid Book
  private isBook(data: any): data is Book {
    return data && typeof data.title === 'string' && typeof data.authorId === 'string';
  }


}
