import { Component, OnInit } from '@angular/core';
import {MessageService} from '../../../_Services/message.service';
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  showMessage:boolean;
  message:string;
  messageType:string;

  constructor(private messageService: MessageService) { }


  ngOnInit() {
    this.message = '';
    this.showMessage = false;
    
    this.messageService.Message$.subscribe((message:any)=> {
        if(message !== ''){
          this.displayMessage();
          this.message = message.message;
          this.messageType = message.type;
        }
    });
  }

  displayMessage() {
    this.showMessage = true;
    setTimeout(()=> {
        this.message = '';
        this.showMessage = false;
    },1500);
  }

}
