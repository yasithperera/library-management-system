import {Injectable} from '@angular/core';
import {catchError, from, Observable, throwError} from 'rxjs';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Author, AuthorDTO} from "../models/author.model";

@Injectable({
  providedIn: 'root',
})
export class AuthorService {
  constructor(private firestore: AngularFirestore) {
  }

  // Method to add author to Firestore
  addAuthor(authorData: AuthorDTO) {
    return this.firestore.collection('authors').add(authorData);
  }

  // Method to get all authors from Firestore
  getAllAuthors(): Observable<any[]> {
    return this.firestore.collection('authors').valueChanges({ idField: 'id' }); // The `idField` will include the document ID in the result
  }

  // Delete an author by ID
  deleteAuthor(authorId: string): Promise<void> {
    return this.firestore.collection('authors').doc(authorId).delete();
  }

  getAuthorById(id: string): Observable<Author> {
    return this.firestore.collection('authors').doc(id).valueChanges() as Observable<Author>;
  }

  updateAuthor(author: Author): Observable<void> {
    // Check if author data and ID exist
    if (!author || !author.id) {
      return throwError('Invalid author data or missing author ID');
    }

    return from(
      this.firestore.collection('authors').doc(author.id).update({
        name: author.name,
        bio: author.bio
      })
    ).pipe(
      catchError(error => {
        console.error('Error updating author:', error);
        return throwError('Failed to update author');
      })
    );
  }

}
