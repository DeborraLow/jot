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
  emojis: any = [];
  emoji: any = {};

  constructor(
    private emojiService: EmojiService,
  ) { }

  ngOnInit() {
    this.emojiService.getEmojis()
      .subscribe((emojis) => {
        this.emojis = emojis;
      });
    console.log(this.emojis);
  }

}
