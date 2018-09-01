import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { routes } from './app.routing';


import { AppComponent } from './app.component';

import { EntryComponent } from './_Components/entry/entry.component';
import { AddEntryComponent } from './_Components/add-entry/add-entry.component';
import { EntryListComponent } from './_Components/entry-list/entry-list.component';

import { EntriesService } from './_Services/entries.service';


@NgModule({
  declarations: [
    AppComponent,
    EntryComponent,
    AddEntryComponent,
    EntryListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes),

  ],
  providers: [EntriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
