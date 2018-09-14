import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import { AuthenticationService } from '../../../_Services/authentication.service';
import { MessageService } from '../../../_Services/message.service';
import { catchError} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  @Output() showForgot: EventEmitter<boolean> = new EventEmitter<boolean>(false);
  @Output() message: EventEmitter<string> = new EventEmitter<string>();

  constructor(private authService: AuthenticationService, private messageService: MessageService, private route:Router) { }

  login:any = {
    username:'',
    password:''
  };

  ngOnInit() {
  }

  Login() {
      if(this.login.username === '' || this.login.password ==='') {
        this.messageService.add('Username and Password is required.','error');
        setTimeout(()=>{
          this.messageService.clear();
        },3000)
      } else {
          this.authService.login(this.login).subscribe(login=> {
              if(login) {
                this.authService.LoggedIn = true;
                this.messageService.add('Logged in!','default');
                setTimeout(()=>{
                  this.messageService.clear();
                },3000)
                setTimeout(()=>this.route.navigate(['/me']), 2000);
              }
          });
      }
  }
  
  toggleForgot() {
      this.showForgot.emit(true);
  }

}
