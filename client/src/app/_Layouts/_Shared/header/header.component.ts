import { Component, OnInit, Input } from '@angular/core';
import {AuthenticationService} from '../../../_Services/authentication.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn:boolean;
  constructor(private authService:AuthenticationService) {
    this.isLoggedIn = this.authService.LoggedIn;
  }

  @Input() light:boolean;
  showLogin : boolean;
  showSignup : boolean;
  showForgot : boolean;
  showModal : boolean;

  ngOnInit() {

  }

  signUpComplete(trigger:boolean) {
    if(trigger) {
      this.closeModal();
      this.toggleLogin();
    }
  }
  
  logout() {
      this.isLoggedIn = false;
      this.authService.logout();
  }
  closeModal() {
    this.showModal = false;
    this.showLogin = false;
    this.showSignup = false;
    this.showForgot = false;
  }

  toggleLogin() {
      this.showModal = true;
      this.showLogin = true;
  }

  toggleSignup() {
    this.showModal = true;
    this.showSignup = true;
  }

  toggleForgot(toggler) {
    this.showModal = true;
    this.showLogin = false;
    this.showForgot = toggler;
  }
}
