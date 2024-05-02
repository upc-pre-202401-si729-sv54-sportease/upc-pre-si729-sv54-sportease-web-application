import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HomeAdministratorsComponent } from './profiles/components/home-administrators/home-administrators.component';
import { HomeStudentsComponent } from './profiles/components/home-students/home-students.component';
import { SidenavComponent } from './public/components/sidenav/sidenav.component';
import {MatToolbar, MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenav, MatSidenavContainer, MatSidenavModule} from "@angular/material/sidenav";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {HttpClientModule} from "@angular/common/http";
import {MatCardModule, MatCardTitleGroup} from "@angular/material/card";
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle, MatCardSubtitle} from "@angular/material/card";
import { CategoryManagementComponent } from './category/pages/category-management/category-management.component';
import {MatAnchor, MatButton, MatFabButton, MatIconButton} from "@angular/material/button";
import {MatListItem, MatNavList} from "@angular/material/list";
import {AdministratorService} from "./category/services/administrator/administrator.service";
import { StudentsManagementComponent } from './students-for-category/pages/students-management/students-management.component';
import {MatDialogModule} from "@angular/material/dialog";
import { AddCategoryDialogComponent } from './category/components/add-category-dialog/add-category-dialog.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatInput} from "@angular/material/input";
import { AddStudentDialogComponent } from './students-for-category/components/add-student-dialog/add-student-dialog.component';
import { DeleteStudentDialogComponent } from './students-for-category/components/delete-student-dialog/delete-student-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeAdministratorsComponent,
    HomeStudentsComponent,
    SidenavComponent,
    CategoryManagementComponent,
    StudentsManagementComponent,
    AddCategoryDialogComponent,
    AddStudentDialogComponent,
    DeleteStudentDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatToolbar,
    MatNavList,
    MatListItem,
    MatSidenav,
    MatAnchor,
    MatSidenavModule,
    MatSidenavContainer,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIcon,
    HttpClientModule,
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardTitle,
    MatCardSubtitle,
    MatCardTitleGroup,
    MatCardModule,
    MatButton,
    MatFabButton,
    MatIconButton,
    MatDialogModule,
    ReactiveFormsModule,
    MatInput
  ],
  providers: [
    provideAnimationsAsync(),
    AdministratorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
