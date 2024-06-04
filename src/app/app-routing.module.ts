import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PaymentManagementComponent} from "./sportease/pages/payment-management/payment-management.component";
import {
  PaymentManagementStudentsComponent
} from "./sportease/pages/payment-management-students/payment-management-students.component";

const routes: Routes = [
  { path: 'payments/management', component: PaymentManagementComponent },
  { path: 'payments/students', component: PaymentManagementStudentsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
