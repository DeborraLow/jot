import { AddEntryComponent } from './../add-entry/add-entry.component';
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
  entry: any = {};
  showForm: boolean;
  display = 'display-none';
  display2 = '';
  showPublish: boolean;




  constructor(
    private entryService: EntriesService,
  ) { }

  ngOnInit() {
    this.showForm = false;

    console.log('HERE = ', this.entry);
    this.entryService.getEntries();
     
    console.log(this.entries);
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


  editEntry(form) {
    console.log('FORM =', form, form.id);

    this.display = 'display-none';
    this.display2 = '';

    this.showForm = !this.showForm;


    this.entryService.edit(form)
      .subscribe(() => {
        console.log(form);
      });
  }

  save() {

  }

  showPublisher() {
    if (this.showPublish) {
      this.showPublish = false;
    } else {
      this.showPublish = true;
    }
  }

  // toggleActive() {
  //   this.isActive = !this.isActive;
  // }

}
