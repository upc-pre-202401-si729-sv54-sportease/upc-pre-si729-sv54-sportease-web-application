import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {FormsModule} from "@angular/forms";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatAnchor, MatButton} from "@angular/material/button";
import {MatToolbar} from "@angular/material/toolbar";
import {PaymentManagementComponent} from "./sportease/pages/payment-management/payment-management.component";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable
} from "@angular/material/table";
import {MatIcon} from "@angular/material/icon";
import {MatSort, MatSortHeader} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {HttpClientModule} from "@angular/common/http";
import { PaymentManagementStudentsComponent } from './sportease/pages/payment-management-students/payment-management-students.component';

@NgModule({
  declarations: [
    AppComponent,
    PaymentManagementComponent,
    PaymentManagementStudentsComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MatButton,
    MatToolbar,
    MatAnchor,
    MatTable,
    MatColumnDef,
    MatHeaderCellDef,
    MatHeaderCell,
    MatHeaderRowDef,
    MatHeaderRow,
    MatRowDef,
    MatRow,
    MatCellDef,
    MatCell,
    MatSort,
    MatSortHeader,
    MatPaginator,
    MatIcon,
    FormsModule,
    MatFormField,
    MatInput
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
