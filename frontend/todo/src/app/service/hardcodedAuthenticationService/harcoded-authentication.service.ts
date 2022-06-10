import { Injectable } from '@angular/core';
import { AUTHENTICATED_USER } from './basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HarcodedAuthenticationService {

  constructor() { }

  authenticate(username: string, password: string): boolean {
    // console.log('before\t' + this.isUserLoggedIn())
    if (username === "in28minutes" && password === "dummy") {
      sessionStorage.setItem('authenticatedUser', username);
      // console.log('after\t' + this.isUserLoggedIn())
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(AUTHENTICATED_USER)
    //if user is null returns not logged in
    return !(user === null)
  }

  logout() {
    sessionStorage.removeItem(AUTHENTICATED_USER)
  }

}
