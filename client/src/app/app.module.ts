import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { routes } from './app.routing';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { EntryComponent } from './_Components/entry/entry.component';
import { AddEntryComponent } from './_Components/add-entry/add-entry.component';
import { EntryListComponent } from './_Components/entry-list/entry-list.component';

import { AuthorizationComponent } from './_Layouts/authorization/authorization.component';
import { ProfileComponent } from './_Layouts/profile/profile.component';
import { TimelineComponent } from './_Layouts/timeline/timeline.component';
import { ExplorerComponent } from './_Layouts/explorer/explorer.component';
import { HomeComponent } from './_Layouts/home/home.component';

import { EntriesService } from './_Services/entries.service';
import { LoginComponent } from './_Components/Authorization/login/login.component';
import { SignupComponent } from './_Components/Authorization/signup/signup.component';
import { LogoutComponent } from './_Components/Authorization/logout/logout.component';
import { ForgotComponent } from './_Components/Authorization/forgot/forgot.component';



@NgModule({
  declarations: [
    AppComponent,
    EntryComponent,
    AddEntryComponent,
    EntryListComponent,
    LoginComponent,
    SignupComponent,
    LogoutComponent,
    ForgotComponent,
    AuthorizationComponent,
    ProfileComponent,
    TimelineComponent,
    ExplorerComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes),
    FormsModule

  ],
  providers: [EntriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
