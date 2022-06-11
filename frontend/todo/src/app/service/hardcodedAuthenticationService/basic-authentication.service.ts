import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { API_URL } from 'src/app/app.constants';

export const TOKEN = 'token';
export const AUTHENTICATED_USER = 'authenticatedUser';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private httpClient: HttpClient) { }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(AUTHENTICATED_USER)
    //if user is null returns not logged in
    return !(user === null)
  }

  getAuthenticatedUser() {
    return sessionStorage.getItem(AUTHENTICATED_USER)
  }

  getAuthenticatedToken() {
    if (this.getAuthenticatedUser())
      return sessionStorage.getItem(TOKEN)
    else
      return null;
  }

  logout() {
    sessionStorage.removeItem(AUTHENTICATED_USER)
    sessionStorage.removeItem(TOKEN)
  }

  executeAuthenticationService(username: string, password: string) {
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })

    return this.httpClient.get<AuthenticationBean>(`${API_URL}/basicauth`, { headers }).pipe(
      map(
        (response: AuthenticationBean) => {
          sessionStorage.setItem(AUTHENTICATED_USER, username);
          sessionStorage.setItem(TOKEN, basicAuthHeaderString);
          return response;
        }
      )
    )
  }

  executeJWTAuthenticationService(username: string, password: string) {
    return this.httpClient.post<any>(`${API_URL}/authenticate`, { username, password }).pipe(
      map(
        (response: any) => {
          sessionStorage.setItem(AUTHENTICATED_USER, username);
          sessionStorage.setItem(TOKEN, `Bearer ${response.token}`);
          return response;
        }
      )
    )
  }
}

export class AuthenticationBean {
  constructor(public message: string) {

  }
}