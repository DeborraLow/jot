import { Component, OnInit , Output, EventEmitter} from '@angular/core';

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

  @Output() newEntry = new EventEmitter();  

  ngOnInit() { }

  submit() {

    this.entriesService.post({}).subscribe((entry) => {
      this.newEntry.emit(entry);
    });

    this.successMessage = 'New Entry Created.';
    this.displayMessage = 'message';

  }

}
