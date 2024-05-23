import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StudentGroupComponent} from "./list-students-for-student/pages/student-group/student-group.component";

const routes: Routes = [
  { path: 'student-group', component: StudentGroupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
