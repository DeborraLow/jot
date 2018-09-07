import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import {map, catchError} from 'rxjs/operators';
import {Observable,  of, throwError} from 'rxjs';
import {MessageService}from '../_Services/message.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  LoggedIn = false;
  
  constructor( private http:HttpClient, private messageService:MessageService) {}
 
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.log(`${operation} failed: ${error.error.message}`);
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`${message}`, 'error');
  }

  isLoggedIn() {
      return this.http.get(`${environment.api_url}/api/isloggedin`).pipe(
        catchError(this.handleError('Login Check'))
      );
  }

  login(login) {
   return this.http.post(`${environment.api_url}/api/login`, login).pipe(
    catchError(this.handleError('Login'))
    );
  }
  
  signup(signup) {
    return this.http.post(`${environment.api_url}/api/signup`, signup).pipe(
      catchError(this.handleError('Signup'))
     );
  }

  forgot(forgot) {
    return this.http.post(`${environment.api_url}/api/forgot`, forgot).pipe(
      catchError(this.handleError('Forgot Account'))
     );
  }

  logout() {
    return this.http.get(`${environment.api_url}/api/logout`).pipe(
      catchError(this.handleError('Logout'))
    ).subscribe();
  }

 
}
