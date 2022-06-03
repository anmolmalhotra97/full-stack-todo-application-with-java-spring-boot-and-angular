import { Component, OnInit } from '@angular/core';
import { HarcodedAuthenticationService } from 'src/app/service//hardcodedAuthenticationService/harcoded-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  constructor(public hardCodedAuthenticationService: HarcodedAuthenticationService) { }

  ngOnInit(): void {
   }

}
