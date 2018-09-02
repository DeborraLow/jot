import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EntriesService {

  constructor(private http: Http) { }

  getEntries() {
    return this.http.get(`${environment.BASE_URL}/api/entries`)
      .pipe(map((res) => res.json()));
  }

  get(id) {
    return this.http.get(`${environment.BASE_URL}/api/entries/${id}`)
      .pipe(map((res) => res.json()));
  }

  post(form) {
    return this.http.post(`${environment.BASE_URL}/api/entries`, form)
      .pipe(map((res) => res.json()));
  }

  edit(entry) {
    return this.http.put(`${environment.BASE_URL}/api/entries/${entry.id}`, entry)
      .pipe(map((res) => res.json()));
  }

  remove(id) {
    return this.http.delete(`${environment.BASE_URL}/api/entries/${id}`)
      .pipe(map((res) => res.json()));
  }
}

