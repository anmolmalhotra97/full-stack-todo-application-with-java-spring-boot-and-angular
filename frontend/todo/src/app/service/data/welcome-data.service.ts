import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core';

export class HelloWorldBean {
  constructor(public message: string) {

  }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private httpClient: HttpClient
  ) { }

  executeHelloWorldBeanService() {
    return this.httpClient.get<HelloWorldBean>('http://localhost:8080/hello-world-bean')
  }

  executeHelloWorldServiceWithPathVariable(name: string) {
    let basicAuthHeaderString = this.createBasicAuthenticationHttpHeaders();

    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })

    return this.httpClient.get<HelloWorldBean>(`http://localhost:8080/hello-world-bean/${name}`, { headers })
  }

  createBasicAuthenticationHttpHeaders() {
    let username: string = 'in28Minutes';
    let password: string = 'dummy';

    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    return basicAuthHeaderString;
  }
}
