import { Routes } from '@angular/router';

import { EntryComponent } from './_Components/entry/entry.component';
import { AddEntryComponent } from './_Components/add-entry/add-entry.component';
import { EntryListComponent } from './_Components/entry-list/entry-list.component';

/* Layouts */
import { HomeComponent } from './_Layouts/home/home.component';
import { AuthorizationComponent } from './_Layouts/authorization/authorization.component';
import { ExplorerComponent } from './_Layouts/explorer/explorer.component';
import { ProfileComponent } from './_Layouts/profile/profile.component';
import { TimelineComponent } from './_Layouts/timeline/timeline.component';

/* Authorization Components */

import { LoginComponent } from './_Components/Authorization/login/login.component';
import { SignupComponent } from './_Components/Authorization/signup/signup.component';
import { LogoutComponent } from './_Components/Authorization/logout/logout.component';
import { ForgotComponent } from './_Components/Authorization/forgot/forgot.component';

import {AuthGuardService} from './_Services/auth-guard.service';

export const routes: Routes = [
    { path: '', component: ProfileComponent },
    { path: 'explorer', component: ExplorerComponent },
    { path: 'me', component: ProfileComponent,  canActivate: [AuthGuardService] },
    { path: 'timeline', component: TimelineComponent },
    { path: 'entry/:id', component: EntryComponent },
    { path: 'entry-add', component: AddEntryComponent },
    { path: 'entry-list', component: EntryListComponent },
    // { path: ':username', component: ProfileComponent },

    // { path: '**', redirectTo: '' }

];
