import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HarcodedAuthenticationService {

  constructor() { }

  authenticate(username: string, password: string): boolean {
    console.log('before\t' + this.isUserLoggedIn())
    if (username === "in28minutes" && password === "dummy") {
      sessionStorage.setItem('authenticatedUser', username);
      console.log('after\t' + this.isUserLoggedIn())
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser')
    //if user is null returns not logged in
    return !(user === null)

  }
}
