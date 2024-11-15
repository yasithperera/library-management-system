import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthorService} from "../../services/author.service";
import {Author} from "../../models/author.model";

@Component({
  selector: 'app-update-author',
  templateUrl: './update-author.component.html',
  styleUrls: ['./update-author.component.css']
})
export class UpdateAuthorComponent implements OnInit {
  authorData: Author = {
    id: '',
    name: '',
    bio: ''
  };

  constructor(
    private route: ActivatedRoute,
    private authorService: AuthorService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    // Get the author object from route params or service
    const authorId = this.route.snapshot.paramMap.get('id');
    if (authorId) {
      this.authorService.getAuthorById(authorId).subscribe((author) => {
        this.authorData = author;
        this.authorData.id = authorId;
      });
    }
  }

  onSubmit(): void {
    if (this.authorData.id) {
      this.authorService.updateAuthor(this.authorData).subscribe(
        () => {
          // Redirect to the author list or success page
          alert('Updated successfully!');
          this.router.navigate(['/authors']);  // Adjust the redirect path as needed
        },
        (error) => {
          alert('Updating failed!');
          console.error('Error updating author: ', error);
        }
      );
    }
  }
}
