import { Emoji } from './../../../_Models/Emoji';
import { EmojiService } from './../../../_Services/emoji.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-entry-emojis',
  templateUrl: './entry-emojis.component.html',
  styleUrls: ['./entry-emojis.component.css']
})
export class EntryEmojisComponent implements OnInit {
  @Input() emoji: Emoji;

  constructor() { }

  ngOnInit() {
  }

}
