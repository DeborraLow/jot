import { Entry } from './../../_Models/Entry';
import { EntriesService } from './../../_Services/entries.service';
import { Component, OnInit, Input, ElementRef, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from './../../_Services/user.service';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css'],
  providers: [EntriesService, UserService]

})
export class EntryComponent implements OnInit, AfterViewInit {
  @Input() emojis: any = [];
  @Input() entry: Entry;
  @Output() deletedEntry: EventEmitter<string> = new EventEmitter();

  constructor(
    private entriesService: EntriesService,

    private router: Router,
    private route: ActivatedRoute,
    private el: ElementRef,
    private user: UserService
  ) { }

  public EditorOptions: Object = {
    toolbarInline: true,
    heightMin: 300,
    placeholderText: 'Edit Your Content Here!',
    charCounterCount: true,
    toolbarButtons: ['bold', 'italic', 'underline', 'strikeThrough', 'color', 'emoticons',
      '-', 'paragraphFormat', 'align', 'formatOL', 'formatUL', 'indent', 'outdent',
      '-', 'insertImage', 'insertLink', 'insertFile', 'insertVideo', 'undo', 'redo']
  };


  isEditing: boolean;
  showMore: boolean;
  entryHeight: number;
  youSure: boolean;
  likeClicked: boolean;
likes:number;
  ngAfterViewInit() {
    const entryHeight = this.el.nativeElement.firstChild.childNodes[3].getElementsByTagName('div').item(0);
    this.entryHeight = entryHeight.offsetHeight;
  }

  ngOnInit() {
    this.emojis = this.entry.emojis;
    this.isEditing = false;
    this.showMore = false;
    this.youSure = false;
    this.likeClicked = false;
    this.likes = this.entry.engagement.like.total;
    this.user.getMyID().subscribe((id:any) => {

      const check = this.entry.engagement.like.user.find(i => i === id.id);

      if (!check) {
        this.likeClicked = false;
      } else {
        this.likeClicked = true;
      }
    });

  }
  uploadPath(path) {
    this.entry.image = path;
  }
  setPrivacy(privacy: string) {
    switch (privacy) {
      case 'private':
        this.entry.isPublic = false;
        break;
      default:
        this.entry.isPublic = true;
    }
  }

  editEntry() {
    this.isEditing = true;
    this.youSure = false;
  }

  areYouSure() {
    (this.youSure) ? this.youSure = false : this.youSure = true;
  }

  updateEntry() {
    this.entriesService.edit(this.entry).subscribe();
    this.isEditing = false;
    this.showMore = false;
  }

  showMoreToggler() {
    (this.showMore) ? this.showMore = false : this.showMore = true;
  }

  deleteEntry() {
    this.entriesService.remove(this.entry.id)
      .subscribe((entry) => {
        this.deletedEntry.emit(this.entry.id);
      });
    this.isEditing = false;
    this.showMore = false;
  }

  emojiEmtter(emojis) {
    this.entry.emojis = emojis;
  }

  likeEntry() {
    this.entriesService.entryLikes(this.entry.id).subscribe();

    this.user.getMyID().subscribe((id:any) => {

      if (this.likeClicked) {
        this.likes = this.likes - 1;
        this.entry.engagement.like.user = this.entry.engagement.like.user.filter(i=>i.id !== id.id);
        this.likeClicked = false;
      } else {
        this.likes = this.likes + 1;
        this.entry.engagement.like.user = [...this.entry.engagement.like.user, id.id];
        this.likeClicked = true;
      }
    });
  }


}
 