import { Entry } from './../../_Models/Entries';
import { EntriesService } from './../../_Services/entries.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css'],
  providers: [EntriesService]

})
export class EntryComponent implements OnInit {
  entries: any = [];
  constructor(private entry: EntriesService) { }

  ngOnInit() {
    console.log(this.entry);
    this.entry.getEntries().subscribe((entries) => {
      this.entries = entries;
    });
    console.log(this.entries);
  }

}
