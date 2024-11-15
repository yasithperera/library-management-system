import {Component} from '@angular/core';
import {Router} from '@angular/router';
import * as config from '../../../config.json'; // Import the admin credentials

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  isAdmin: boolean = false;

  constructor(private router: Router) {
  }

  onSubmit() {
    // Check if the provided credentials match the admin credentials
    if (this.username === config.adminUsername && this.password === config.adminPassword) {
      this.isAdmin = true;
      const user = {username: this.username, role: 'admin'};
      localStorage.setItem('token', config.token);
      localStorage.setItem('user', JSON.stringify(user));
      // Redirect to admin page or show admin features
      this.router.navigate(['/admin-dashboard']);
    } else {
      alert('Invalid credentials');
      this.isAdmin = false;
    }
  }
}
