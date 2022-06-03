import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';

//welcome
const routes: Routes = [
  //default path
  { path: '', component: LoginComponent },
  
  { path: 'login', component: LoginComponent },
  { path: 'welcome', component: WelcomeComponent },

  //IMPORTANT : THIS NEEDS TO BE AT THE LAST else NO ROUTE would work
  //Anything apart from the routes Defined
  { path: "**", component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
