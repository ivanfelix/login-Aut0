import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {

  constructor(
    public auth: AuthService
  ) {
    this.auth.handleAuthentication();
  }

  login(){
    this.auth.login();
  }
  logout(){
    this.auth.logout();
  }
}
