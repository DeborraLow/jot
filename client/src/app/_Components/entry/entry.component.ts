import { Entry } from './../../_Models/Entry';
import { EntriesService } from './../../_Services/entries.service';
import { Component, OnInit, Input, ElementRef, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css'],
  providers: [EntriesService]

})
export class EntryComponent implements OnInit, AfterViewInit {
  @Input() emojis: any = [];
  @Input() entry: Entry;


  // entry: any = {
  //   _id: '',
  //   title: '',
  //   summary: '',
  //   entry_text: '',
  //   emojis: []
  // };
  // showForm: boolean;
  // display = 'display-none';
  // display2 = '';
  // showPublish: boolean;

  constructor(
    private entriesService: EntriesService,
    private router: Router,
    private route: ActivatedRoute,
    private el: ElementRef
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

  ngAfterViewInit() {
    const entryHeight = this.el.nativeElement.firstChild.childNodes[3].getElementsByTagName('div').item(0);
    this.entryHeight = entryHeight.offsetHeight;
  }

  ngOnInit() {

    this.isEditing = false;
    this.showMore = false;
  }

  setPrivacy(privacy: string) {
    switch (privacy) {
      case 'private':
        this.entry.isPublic = false;
        break;
      default:
        this.entry.isPublic = true;
    }
    console.log(this.entry);
  }

  editEntry() {
    this.isEditing = true;
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
    if (window.confirm('Are you sure?')) {
      this.entriesService.remove(this.entry.id)
        .subscribe(() => {
          this.router.navigate(['']);
        });
    }
  }


}
