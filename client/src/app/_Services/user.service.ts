import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Entry } from '../_Models/Entry';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getMyID() {
    return this.http.get(`${environment.api_url}/api/user/me`,
    { withCredentials: true });
  }

}
