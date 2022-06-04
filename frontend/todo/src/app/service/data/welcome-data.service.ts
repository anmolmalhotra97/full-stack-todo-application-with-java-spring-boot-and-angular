import { HttpClient } from '@angular/common/http'
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
    return this.httpClient.get<HelloWorldBean>(`http://localhost:8080/hello-world-bean/${name}`)
  }
}
