import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatIcon} from "@angular/material/icon";
import {HttpClientModule} from "@angular/common/http";
import {MatCardModule, MatCardTitleGroup} from "@angular/material/card";
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle, MatCardSubtitle} from "@angular/material/card";
import { StudentGroupComponent } from './list-students-for-student/pages/student-group/student-group.component';
import {StudentService} from "./list-students-for-student/services/student.service";

@NgModule({
  declarations: [
    AppComponent,
    StudentGroupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIcon,
    HttpClientModule,
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardTitle,
    MatCardSubtitle,
    MatCardTitleGroup,
    MatCardModule
  ],
  providers: [
    provideAnimationsAsync(),
    StudentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
