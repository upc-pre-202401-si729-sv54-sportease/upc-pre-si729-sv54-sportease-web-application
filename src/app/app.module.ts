import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SettingAdministratorComponent } from './profiles/components/setting-administrator/setting-administrator.component';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatButton} from "@angular/material/button";
import {MatInput} from "@angular/material/input";

@NgModule({
  declarations: [
    AppComponent,
    SettingAdministratorComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatCard,
        MatCardHeader,
        MatCardTitle,
        MatCardContent,
        MatFormField,
        MatLabel,
        MatButton,
        MatInput
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
