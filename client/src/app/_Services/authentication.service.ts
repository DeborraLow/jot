import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { catchError } from 'rxjs/operators';
import { MessageService } from '../_Services/message.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  LoggedIn = false;

  constructor(private http: HttpClient, private messageService: MessageService) { }

  isLoggedIn() {
    return this.http.get(`${environment.api_url}/api/isloggedin`).pipe(
      catchError(this.messageService.handleError('Login Check'))
    ).subscribe(session=> {
      console.log(session);
    });
  }

  login(login) {
    return this.http.post(`${environment.api_url}/api/login`,
      login,
      { withCredentials: true }).pipe(
        catchError(this.messageService.handleError('Login'))
      );
  }

  signup(signup) {
    return this.http.post(`${environment.api_url}/api/signup`, signup).pipe(
      catchError(this.messageService.handleError('Signup'))
    );
  }

  forgot(forgot) {
    return this.http.post(`${environment.api_url}/api/forgot`, forgot).pipe(
      catchError(this.messageService.handleError('Forgot Account'))
    );
  }

  setupAccount( id, setup ) {
    return this.http.post(`${environment.api_url}/api/signup/${id}`, setup).pipe(
      catchError(this.messageService.handleError('Forgot Account'))
    );
  }

  logout() {
    return this.http.get(`${environment.api_url}/api/logout`).pipe(
      catchError(this.messageService.handleError('Logout'))
    ).subscribe();
  }


}
