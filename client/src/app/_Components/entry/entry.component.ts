import { Entry } from './../../_Models/Entry';
import { EntriesService } from './../../_Services/entries.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css'],
  providers: [EntriesService]

})
export class EntryComponent implements OnInit {
  @Input() emojis: any = [];


  entry: any = {
    _id: '',
    title: '',
    summary: '',
    entry_text: '',
    emojis: []
  };
  showForm: boolean;
  display = 'display-none';
  display2 = '';
  showPublish: boolean;

  constructor(
    private entriesService: EntriesService,
    private router: Router,
    private route: ActivatedRoute,

  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getEntryDetails(params['id']);
    });


    this.showForm = false; // Hides edit form OnInit

  }

  getEntryDetails(id) {
    this.entriesService.get(id)
      .subscribe((entry) => {
        this.entry = entry;
      });
  }

  deleteEntry() {
    if (window.confirm('Are you sure?')) {
      this.entriesService.remove(this.entry._id)
        .subscribe(() => {
          this.router.navigate(['']);
        });
    }
  }

  showEditForm() {
    this.display = '';
    this.display2 = 'display-none';

    if (this.showForm) {
      this.showForm = false;
    } else {
      this.showForm = true;
    }
  }

  editEntry(entryForm) {
    console.log('FORM ', entryForm);
    this.display = 'display-none';
    this.display2 = '';

    this.showForm = !this.showForm;

    this.entriesService.edit(entryForm)
      .subscribe(() => {
        console.log(entryForm);
      });
  }

  showPublisher() {
    if (this.showPublish) {
      this.showPublish = false;
    } else {
      this.showPublish = true;
    }
  }

  // TEST --SEE JSON ENTRY
  get diagnostic() {
    return JSON.stringify(this.entry);
  }


}
