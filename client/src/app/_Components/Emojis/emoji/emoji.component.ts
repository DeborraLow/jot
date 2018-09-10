import { Emoji } from './../../../_Models/Emoji';
import { EmojiService } from './../../../_Services/emoji.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-emoji',
  templateUrl: './emoji.component.html',
  styleUrls: ['./emoji.component.css'],
  providers: [EmojiService]

})
export class EmojiComponent implements OnInit {

  @Input() emoji: Emoji[];
  @Output() emojiEmitter: EventEmitter<Emoji[]> = new EventEmitter();

  constructor(
    private emojiService: EmojiService,
  ) { }

  emojis: Emoji[] = [];
  entryEmojis: Emoji[] = [];

  ngOnInit() {

    this.emojiService.getEmojis()
      .subscribe((emojis) => {
        this.emojis = emojis;
      });

    console.log(this.emojis);
  }
  remove(emoji) {
    this.entryEmojis = this.entryEmojis.filter(i => i.id !== emoji.id);
  }
  addEmoji(emoji) {
    this.entryEmojis.push(emoji)
    this.emojiEmitter.emit(this.entryEmojis);
  }





}
