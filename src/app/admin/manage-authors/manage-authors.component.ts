import {Component, OnInit} from '@angular/core';
import {AuthorService} from "../../services/author.service";
import {Author} from "../../models/author.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-manage-authors',
  templateUrl: './manage-authors.component.html',
  styleUrls: ['./manage-authors.component.css']
})
export class ManageAuthorsComponent implements OnInit {
  authors: Author[] = [];
  authorName = '';

  constructor(private authorService: AuthorService, private router: Router) {
  }

  ngOnInit(): void {
    this.loadAuthors();
  }

  loadAuthors() {
    this.authorService.getAllAuthors().subscribe((data) => (this.authors = data));
  }

  deleteAuthor(authorId: string) {
    this.authorService.deleteAuthor(authorId).then(() => this.loadAuthors());
  }

  editAuthor(authorId: string): void {
    this.router.navigate([`/update-author`, authorId]);
  }
}
