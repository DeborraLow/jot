import { Entry } from './../../_Models/Entry';
import { EntriesService } from './../../_Services/entries.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css'],
  providers: [EntriesService]

})
export class EntryComponent implements OnInit {
  entry: any;

  constructor(
    private entriesService: EntriesService,
    private router: Router,
    private route: ActivatedRoute,

  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getEntryDetails(params['id']);
    });
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


}
