import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from "./services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    // Check if the user is authenticated
    if (this.authService.isAuthenticated()) {
      // Check if the user has the 'admin' role (or any other check for authorized access)
      if (this.authService.getUserRole() === 'admin') {
        return true;  // Allow access
      } else {
        this.router.navigate(['/unauthorized']);  // Redirect to an unauthorized page
        return false;  // Prevent access
      }
    }

    // If the user is not authenticated, redirect to the login page
    this.router.navigate(['/login']);
    return false;  // Prevent access
  }
}
