import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Entry } from '../_Models/Entry';


@Injectable({
  providedIn: 'root'
})
export class EntriesService {

  constructor(private http: HttpClient) { }

  entries: Entry[] = [];

  getEntries() {
    return this.http.get(`${environment.api_url}/api/entries`);
  }

  get(id) {
    return this.http.get(`${environment.api_url}/api/entries/${id}`);
  }

  getMyEntries() {
    return this.http.get(`${environment.api_url}/api/profile`,
      { withCredentials: true }
    );

  }

  getPublicEntries() {
    return this.http.get(`${environment.api_url}/api/public`,
      { withCredentials: true }
    );

  }

  post(form) {
    return this.http.post(`${environment.api_url}/api/entries`,
      form,
      { withCredentials: true });
  }

  edit(entry) {
    return this.http.put(`${environment.api_url}/api/entry/${entry.id}`, entry);
  }

  // editListEntries(entry) {
  //   return this.http.put(`${environment.api_url}/api/entries/${entry.id}`, entry)
  //     .pipe(map((res) => res.json()));
  // }

  remove(id) {
    return this.http.delete(`${environment.api_url}/api/entries/${id}`);
  }


  entryLikes(id) {
    return this.http.put(`${environment.api_url}/api/likes/${id}`, {},
      { withCredentials: true });
  }


}
