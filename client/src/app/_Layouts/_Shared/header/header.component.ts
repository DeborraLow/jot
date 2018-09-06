import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  showLogin : boolean;
  showSignup : boolean;
  showForgot : boolean;
  showModal : boolean;

  ngOnInit() {

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
