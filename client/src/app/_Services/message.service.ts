import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private Message:BehaviorSubject<object> = new BehaviorSubject({});
  Message$ = this.Message.asObservable();

  add(message: string, type:string = 'default') {
    this.Message.next({message:message, type:type});
  }

  clear() {
    this.Message.next({message:'', type:'none'});
  }
  
  handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.log(`${operation} failed: ${error.error.message}`);
      return of(result as T);
    };
  }

  log(message: string) {
    this.add(`${message}`, 'error');
  }

}
