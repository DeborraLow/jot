import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FollowerService {

  constructor(private http: HttpClient) { }
  get() {
    return this.http.get(`${environment.api_url}/api/followers`,
    { withCredentials: true }
    );
  }
  search(query) {
    return this.http.get(`${environment.api_url}/api/follower/${query}`,
      { withCredentials: true }
    );
  }
  add(username) {
    return this.http.post(`${environment.api_url}/api/follower`, {username:username},
      { withCredentials: true }
    );
  }
  followBack(username) {
    return this.http.put(`${environment.api_url}/api/follower`, {username:username},
    { withCredentials: true }
  );
  }
  remove(username) {
    return this.http.delete(`${environment.api_url}/api/follower/${username}`,
      { withCredentials: true }
    );
  }
}
