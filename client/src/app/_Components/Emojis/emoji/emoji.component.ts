import { Emoji } from './../../../_Models/Emoji';
import { EmojiService } from './../../../_Services/emoji.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emoji',
  templateUrl: './emoji.component.html',
  styleUrls: ['./emoji.component.css'],
  providers: [EmojiService]

})
export class EmojiComponent implements OnInit {

  constructor(
    private emojiService: EmojiService,
  ) { }

  emojis: any = [];
  emoji: any = {};

  ngOnInit() {
    this.emojiService.getEmojis()
      .subscribe((emojis) => {
        this.emojis = emojis;
      });
    console.log(this.emojis);
  }

}
