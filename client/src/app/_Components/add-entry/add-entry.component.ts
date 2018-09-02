import { Component, OnInit } from '@angular/core';

import { EntriesService } from './../../_Services/entries.service';
import { Entry } from './../../_Models/Entry';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-entry',
  templateUrl: './add-entry.component.html',
  styleUrls: ['./add-entry.component.css'],
  providers: [EntriesService]

})
export class AddEntryComponent implements OnInit {
  showForm: boolean;
  successMessage: string;
  displayMessage = 'display-none';


  constructor(
    private entriesService: EntriesService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() { }

  submit() {
    const date = Date.now;
    const newEntry = {
      title: 'New Entry'
      // summary: '',
    };
    this.entriesService.post(newEntry)
      .subscribe(() => {
        console.log(newEntry);
      });
    this.successMessage = 'New Entry Created.';
    this.displayMessage = 'message';

  }


}

// ngOnInit() {
//   this.showForm = false;

// }

// showFormFn() {
//   if (this.showForm) {
//     this.showForm = false;
//   } else {
//     this.showForm = true;
//   }
// }


// addEntry(newEntry) {

//   this.entriesService.post(newEntry)
//     .subscribe(() => {
//       this.router.navigate(['']);
//     });
// }
