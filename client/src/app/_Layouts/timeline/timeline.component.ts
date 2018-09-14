import { Component, OnInit } from '@angular/core';
import { EntriesService } from '../../_Services/entries.service';
import { Entry } from '../../_Models/Entry';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  entries: Entry[];


  constructor(private entryService: EntriesService) { }

  ngOnInit() {
    this.entryService.getEntries('timeline').subscribe((entries: any) => {
      this.entries = entries;
    });
  }

  initNewEntry(e) {
    this.entries = [e, ...this.entries];
    console.log(e);
  }

}
