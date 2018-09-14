import { Emoji } from './../../../_Models/Emoji';
import { EmojiService } from './../../../_Services/emoji.service';
import { Component, OnInit, Input, Output, EventEmitter, SimpleChange, SimpleChanges, OnChanges } from '@angular/core';
import {MessageService} from '../../../_Services/message.service';
@Component({
  selector: 'app-emoji',
  templateUrl: './emoji.component.html',
  styleUrls: ['./emoji.component.css'],
  providers: [EmojiService]

})
export class EmojiComponent implements OnInit, OnChanges {

  @Input() emoji: Emoji[];
  @Input() isEditing:boolean;
  @Output() emojiEmitter: EventEmitter<Emoji[]> = new EventEmitter();

  constructor(
    private emojiService: EmojiService,
    private message:MessageService
  ) { }

  emojis: Emoji[] = [];
  entryEmojis: Emoji[] = [];
  IsEditing = false;

  ngOnInit() {
    this.isEditing = false;
    this.emojiService.getEmojis().subscribe((emojis) => {
      this.emojis = emojis;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['emoji']) { 
      this.entryEmojis = changes.emoji.currentValue;
    }

    if(changes['isEditing']) {
      this.IsEditing = changes.isEditing.currentValue;
    }
  }

  remove(emoji) {
    this.entryEmojis = this.entryEmojis.filter((i:any) => i._id !== emoji._id);
    this.emojiEmitter.emit(this.entryEmojis);
  }

  addEmoji(emoji) {

    if(this.entryEmojis.length < 5) {

      const exists = this.entryEmojis.find((i:any) => i._id === emoji._id);

      if(exists) {
        this.message.add('Emoji has already been selected. Select another one. ','error');
        setTimeout(()=>{
          this.message.clear();
        },3000)
      } else {
        this.entryEmojis.push(emoji);
        this.emojiEmitter.emit(this.entryEmojis);
      }

    } else {
      this.message.add('Emoji limit reached, please remove a emoji to proceed. ','error');
      setTimeout(()=>{
        this.message.clear();
      },3000)
    }
  }

}
