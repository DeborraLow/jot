import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private Message:BehaviorSubject<object> = new BehaviorSubject({});
  Message$ = this.Message.asObservable();

  add(message: string, type:string = 'default') {
    this.Message.next({message:message, type:type});
  }

}
