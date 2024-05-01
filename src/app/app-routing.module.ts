import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeAdministratorsComponent} from "./profiles/components/home-administrators/home-administrators.component";
import {HomeStudentsComponent} from "./profiles/components/home-students/home-students.component";

const routes: Routes = [
  { path: 'home-administrators', component: HomeAdministratorsComponent },
  { path: 'home-students', component: HomeStudentsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
