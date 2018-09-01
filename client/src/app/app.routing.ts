import { Routes } from '@angular/router';

import { EntryComponent } from './_Components/entry/entry.component';
import { AddEntryComponent } from './_Components/add-entry/add-entry.component';
import { EntryListComponent } from './_Components/entry-list/entry-list.component';


export const routes: Routes = [
    { path: 'entry/:id', component: EntryComponent },
    { path: 'entry-add', component: AddEntryComponent },
    { path: 'entry-list', component: EntryListComponent },
    // { path: '**', redirectTo: '' }

];
