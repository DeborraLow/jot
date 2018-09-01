import { Component, OnInit } from '@angular/core';

import { EntriesService } from './../../_Services/entries.service';
import { Entry } from './../../_Models/Entry';

@Component({
  selector: 'app-add-entry',
  templateUrl: './add-entry.component.html',
  styleUrls: ['./add-entry.component.css'],
  providers: [EntriesService]

})
export class AddEntryComponent implements OnInit {
  showForm: boolean;

  constructor(private entry: EntriesService) { }

  ngOnInit() {
    this.showForm = false;

  }

  showFormFn() {
    if (this.showForm) {
      this.showForm = false;
    } else {
      this.showForm = true;
    }
  }


  // AddEntry() {

  // }

  // submit() {
  //   console.log('submit');
  // }

}
