import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEventType } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map, catchError } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';
import { MessageService } from '../_Services/message.service';

@Injectable({
  providedIn: 'root'
})
export class UploaderService {

  constructor(private http: HttpClient, private messageService: MessageService) { }

  upload(file) {
    const req = new HttpRequest('POST', `${environment.api_url}/api/upload`, file, {
      //requestProgress: true
    });
    this.http.request(req)
      .subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          console.log(event.total, event.loaded);
        }
      });
  }

}
