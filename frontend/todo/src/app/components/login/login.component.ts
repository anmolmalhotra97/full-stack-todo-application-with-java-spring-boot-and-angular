import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from 'src/app/service/hardcodedAuthenticationService/basic-authentication.service';
import { HarcodedAuthenticationService } from 'src/app/service/hardcodedAuthenticationService/harcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //component properties
  username: string = ''
  password: string = ''
  errorMessage = "INVALID CREDENTIALS"
  invalidLogin = false

  //Router
  //Angular.giveMeRouter ----> OLD
  //Dependency Injection ----> NEW
  constructor(
    private router: Router,
    private hardCodedAuthenticationService: HarcodedAuthenticationService,
    private basicAuthenticationService: BasicAuthenticationService) { }

  ngOnInit(): void {
  }

  // //component event
  // handleLogin() {
  //   // if (this.username === "in28minutes" && this.password === "dummy") {
  //   if (this.hardCodedAuthenticationService.authenticate(this.username, this.password)) {
  //     //Redirect to Welcome Page and pass the field username to component associated to route
  //     this.router.navigate(['welcome', this.username])
  //     this.invalidLogin = false;
  //   } else {
  //     this.invalidLogin = true;
  //   }
  // }

  // //component event
  // handleBasicAuthLogin() {
  //   this.basicAuthenticationService.executeAuthenticationService(this.username, this.password).subscribe(
  //     response => {
  //       console.log(response);
  //       //Redirect to Welcome Page and pass the field username to component associated to route
  //       this.router.navigate(['welcome', this.username])
  //       this.invalidLogin = false;
  //     },
  //     error => {
  //       console.log(error);
  //       this.invalidLogin = true;
  //     }
  //   )
  // }

  //component event
  handleJWTAuthLogin() {
    this.basicAuthenticationService.executeJWTAuthenticationService(this.username, this.password).subscribe(
      response => {
        // console.log(response);
        //Redirect to Welcome Page and pass the field username to component associated to route
        this.router.navigate(['welcome', this.username])
        this.invalidLogin = false;
      },
      error => {
        console.log(error);
        this.invalidLogin = true;
      }
    )
  }

}
