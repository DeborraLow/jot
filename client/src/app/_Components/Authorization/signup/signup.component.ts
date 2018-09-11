import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { AuthenticationService } from '../../../_Services/authentication.service';
import { MessageService } from '../../../_Services/message.service';
import { Router } from '@angular/router';
import { User, UserSettings} from '../../../_Models/User';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authService: AuthenticationService, private messageService: MessageService, private route: Router) { }

  hasSignedUp:boolean;

  @Output() signUpComplete:EventEmitter<boolean> = new EventEmitter(false);

  signup: any = {
    id:'',
    username: '',
    password: '',
    confirm_password: '',
    email: '',
    first_name:'',
    last_name:'',
    avatar:'',
  };

  Signup() {
    if (this.signup.username === '' || this.signup.password === '' || this.signup.confirm_password === '' || this.signup.email === '') {
      this.messageService.add('All fields are required to signup.', 'error');
    } else if(this.signup.password !==  this.signup.confirm_password) {
      this.messageService.add('Password do not match.', 'error');
    } else {
      this.authService.signup(this.signup).subscribe((res:any) => {
        if(res) {
          this.signup.id = res._id;
          this.hasSignedUp = true;
        }
      });
    }
  }

  completeSignup() {

    if (this.signup.avatar === '') {

      this.messageService.add('Please upload your avatar to continue.', 'error');

    } else if(this.signup.first_name === '' || this.signup.last_name === '') {
      this.messageService.add('Please upload your avatar to continue.', 'error');
    } else {

      const {avatar, first_name, last_name} = this.signup;

      this.authService.setupAccount(this.signup.id, {avatar,first_name, last_name}).subscribe((res:any) => {
        this.messageService.add('Congratulations, your JOT account has been created.', 'default');
        setTimeout(() =>  this.signUpComplete.emit(true) , 2000);
      });

    }

  }

  uploadPath(path) {
    this.signup.avatar = path;
  }
  
  ngOnInit() {
    this.hasSignedUp = false;
  }

}
