import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEventType, HttpResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map, catchError } from 'rxjs/operators';
import { Observable, of, throwError, Subject } from 'rxjs';
import { MessageService } from '../_Services/message.service';

@Injectable({
  providedIn: 'root'
})
export class UploaderService {

  constructor(private http: HttpClient, private messageService: MessageService) { }

  public upload(files: Set<File>): {[key:string]:Observable<number>} {
    // this will be the our resulting map
    const status = {};

    files.forEach(file => {
      // create a new multipart-form for every file
      const formData: FormData = new FormData();
      formData.append('file', file, file.name);

      // create a http-post request and pass the form
      // tell it to report the upload progress
      const req = new HttpRequest('POST', `${environment.api_url}/api/upload`, formData, {
        reportProgress: true
      });

      // create a new progress-subject for every file
      const progress = new Subject<number>();
      const path = new Subject<string>();
      let filePath:string;

      // send the http-request and subscribe for progress-updates
      this.http.request(req).subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {

          // calculate the progress percentage
          const percentDone = Math.round(100 * event.loaded / event.total);

          // pass the percentage into the progress-stream
          progress.next(percentDone);

        } else if (event instanceof HttpResponse) {

          // Close the progress-stream if we get an answer form the API
          // The upload is complete
          const body:any = event.body;

          filePath = body.path;
          path.next(filePath);

          path.complete();
          progress.complete();
        }
      });
      // Save every progress-observable in a map of all observables
      status[file.name] = {
        progress: progress.asObservable(),
        path: path.asObservable()
      };
    });

    // return the map of progress.observables
    return status;
  }
  public uploadEntry(files: Set<File>): {[key:string]:Observable<number>} {
    // this will be the our resulting map
    const status = {};

    files.forEach(file => {
      // create a new multipart-form for every file
      const formData: FormData = new FormData();
      formData.append('file', file, file.name);

      // create a http-post request and pass the form
      // tell it to report the upload progress
      const req = new HttpRequest('POST', `${environment.api_url}/api/upload/entry`, formData, {
        reportProgress: true
      });

      // create a new progress-subject for every file
      const progress = new Subject<number>();
      const path = new Subject<string>();
      let filePath:string;

      // send the http-request and subscribe for progress-updates
      this.http.request(req).subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {

          // calculate the progress percentage
          const percentDone = Math.round(100 * event.loaded / event.total);

          // pass the percentage into the progress-stream
          progress.next(percentDone);

        } else if (event instanceof HttpResponse) {

          // Close the progress-stream if we get an answer form the API
          // The upload is complete
          const body:any = event.body;

          filePath = body.path;
          path.next(filePath);

          path.complete();
          progress.complete();
        }
      });
      // Save every progress-observable in a map of all observables
      status[file.name] = {
        progress: progress.asObservable(),
        path: path.asObservable()
      };
    });

    // return the map of progress.observables
    return status;
  }
}
