import {Component} from '@angular/core';
import {AuthorService} from "../../services/author.service";
import {Author, AuthorDTO} from "../../models/author.model";

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
export class AddAuthorComponent {
  authorData: AuthorDTO = {
    name: '',
    bio: ''
  };

  constructor(private authorService: AuthorService) {
  }

  onSubmit() {
    if (this.authorData.name && this.authorData.bio) {
      this.authorService.addAuthor(this.authorData).then(() => {
        alert('Author added successfully!');
        this.resetForm();
      }).catch((error) => {
        console.error('Error adding author: ', error);
        alert('Error adding author. Please try again.');
      });
    } else {
      alert('Please fill all fields.');
    }
  }

  resetForm() {
    this.authorData.name = '';
    this.authorData.bio = '';
  }
}
