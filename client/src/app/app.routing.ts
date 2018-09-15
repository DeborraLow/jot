import { Component } from '@angular/core';
import { Routes } from '@angular/router';

import { EntryComponent } from './_Components/entry/entry.component';
import { EmojiComponent } from './_Components/Emojis/emoji/emoji.component';

/* Layouts */
import { HomeComponent } from './_Layouts/home/home.component';
import { ExplorerComponent } from './_Layouts/explorer/explorer.component';
import { ProfileComponent } from './_Layouts/profile/profile.component';
import { TimelineComponent } from './_Layouts/timeline/timeline.component';

import { AuthGuardService } from './_Services/auth-guard.service';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'explorer', component: ExplorerComponent,canActivate: [AuthGuardService] },
    { path: 'me', component: ProfileComponent, canActivate: [AuthGuardService] },
    { path: 'timeline', component: TimelineComponent, canActivate: [AuthGuardService] },
    { path: 'entry/:id', component: EntryComponent,canActivate: [AuthGuardService] },
    // { path: '**', redirectTo: '' }
];
