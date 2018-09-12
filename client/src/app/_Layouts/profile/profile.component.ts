import { Component, OnInit } from '@angular/core';
import { EntriesService } from '../../_Services/entries.service';
import { Entry } from '../../_Models/Entry';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  entries: Entry[];

  constructor(private entryService: EntriesService) {

  }

  ngOnInit() {
    this.entryService.getMyEntries().subscribe((entries: any) => {
      this.entries = entries;
    });
  }

  deletedEntry(entry) {
    this.entries = this.entries.filter((i: any) => i._id !== entry._id);
  }
  
  initNewEntry(e) {
    this.entries = [e, ...this.entries];
    console.log(e);
  }

}
