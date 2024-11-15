import {Injectable} from '@angular/core';
import * as config from '../../../config.json';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
  }

  // This is just a basic example, in a real app you'd use JWT or session management
  isAuthenticated(): boolean {
    // Here, you can check if the user is logged in by verifying a token or session
    return localStorage.getItem('token') === config.token;  // Assuming you store the token in localStorage
  }

  getUserRole(): string {
    // In a real-world app, you might decode the JWT token to extract the user's role
    // For simplicity, let's assume it's stored in localStorage
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    return user.role || '';  // Assuming role is saved in user data
  }

  // Log out the user (remove token and user data from storage)
  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

}
