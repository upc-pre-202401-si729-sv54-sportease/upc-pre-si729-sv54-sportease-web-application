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
import {MatButton} from "@angular/material/button";
import {MatCalendar, MatDatepickerModule} from "@angular/material/datepicker";
import {MAT_DATE_LOCALE, MatNativeDateModule, MatOption} from "@angular/material/core";
import { CategoryManagementComponent } from './category/pages/category-management/category-management.component';
import {MatAnchor, MatFabButton, MatIconButton} from "@angular/material/button";
import {MatListItem, MatNavList} from "@angular/material/list";
import {AdministratorService} from "./public/services/administrator/administrator.service";
import { StudentsManagementComponent } from './students-for-category/pages/students-management/students-management.component';
import {MatDialogModule} from "@angular/material/dialog";
import { AddCategoryDialogComponent } from './category/components/add-category-dialog/add-category-dialog.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatInput} from "@angular/material/input";
import { AddStudentDialogComponent } from './students-for-category/components/add-student-dialog/add-student-dialog.component';
import { DeleteStudentDialogComponent } from './students-for-category/components/delete-student-dialog/delete-student-dialog.component';
import { LoginComponent } from './authentication/components/login/login.component';
import { RegisterComponent } from './authentication/components/register/register.component';
import { SettingsAdministratorComponent } from './settings/settings-administrator/settings-administrator.component';
import { StudentGroupComponent } from './students-for-category/components/student-group/student-group.component';
import {MatSelect} from "@angular/material/select";
import {StudentService} from "./public/services/student/student.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeAdministratorsComponent,
    HomeStudentsComponent,
    SidenavComponent,
    CategoryManagementComponent,
    StudentsManagementComponent,
    AddCategoryDialogComponent,
    AddStudentDialogComponent,
    DeleteStudentDialogComponent,
    StudentGroupComponent,
    SettingsAdministratorComponent
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
    MatDatepickerModule,
    MatNativeDateModule,
    MatInput,
    MatCalendar,
    MatSelect,
    MatOption,

  ],
  providers: [
    provideAnimationsAsync(),
    AdministratorService,
    StudentService,
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
