import { Component, OnInit } from '@angular/core';
import { EntriesService } from './../../_Services/entries.service';
import { Entry } from './../../_Models/Entry';


@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css'],
  providers: [EntriesService]

})
export class EntryListComponent implements OnInit {
  entries: any = [];
  constructor(private entry: EntriesService) { }

  ngOnInit() {
    console.log(this.entry);
    this.entry.getEntries()
      .subscribe((entries) => {
        this.entries = entries;
      });
    console.log(this.entries);
  }

}
