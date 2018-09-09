import { Emoji } from './../../../_Models/Emoji';
import { EmojiService } from './../../../_Services/emoji.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-emoji',
  templateUrl: './emoji.component.html',
  styleUrls: ['./emoji.component.css'],
  providers: [EmojiService]

})
export class EmojiComponent implements OnInit {
  @Input() emoji: Emoji;


  constructor(
    private emojiService: EmojiService,
  ) { }

  emojis: any = [];
  entryEmojis: any = [];


  ngOnInit() {
    this.emojiService.getEmojis()
      .subscribe((emojis) => {
        this.emojis = emojis;
      });
    console.log(this.emojis);
  }

  addEmoji() {
    console.log('EMOJIS: ', this.emojis);
    console.log('EMOJI ADDED: ', this.emoji);
  }





}
