import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HelloWorldBean, WelcomeDataService } from 'src/app/service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

export class WelcomeComponent implements OnInit {

  welcomeMessageFromService: string;

  //Activated Route
  constructor(
    private route: ActivatedRoute,
    private welcomeDataService: WelcomeDataService
  ) { }

  ngOnInit(): void {
  }

  getWelcomeMessage() {
    this.welcomeDataService.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response)
    );
  }

  handleSuccessfulResponse(response: HelloWorldBean): void {
    this.welcomeMessageFromService = response.message;
  }
}
