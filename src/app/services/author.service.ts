import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
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
}
