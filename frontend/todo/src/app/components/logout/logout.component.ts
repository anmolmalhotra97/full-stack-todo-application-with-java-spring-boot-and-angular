import { Component, OnInit } from '@angular/core';
import { HarcodedAuthenticationService } from 'src/app/service//hardcodedAuthenticationService/harcoded-authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private hardCodedAuthenticationService: HarcodedAuthenticationService) { }

  ngOnInit(): void {
    this.hardCodedAuthenticationService.logout()
  }

}
