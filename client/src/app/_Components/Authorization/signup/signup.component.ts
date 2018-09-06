import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../_Services/authentication.service';
import { MessageService } from '../../../_Services/message.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authService: AuthenticationService, private messageService: MessageService, private route:Router) { }

  signup:any={
    username:'',
    password:'',
    confirm_password:'',
    email:''
  };

  Signup() {
    if(this.signup.username === '' || this.signup.password ==='' || this.signup.confirm_password ==='' || this.signup.email === '') {
      this.messageService.add('All fields are required to signup.','error');
    } else {
        this.authService.signup(this.signup).subscribe(res => {
          this.messageService.add('Congratulations, your JOT account has been created. ','default');
          setTimeout(()=>this.route.navigate(['/me']), 2000);
        });
    }
  }

  ngOnInit() {
  }

}
