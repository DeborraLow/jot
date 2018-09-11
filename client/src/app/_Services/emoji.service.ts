import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmojiService {

  constructor(private http: Http) { }

  getEmojis() {
    return this.http.get(`${environment.api_url}/api/emojis`)
      .pipe(map((res) => res.json()));
  }



}


