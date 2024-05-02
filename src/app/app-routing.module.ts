import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeAdministratorsComponent} from "./profiles/components/home-administrators/home-administrators.component";
import {HomeStudentsComponent} from "./profiles/components/home-students/home-students.component";
import {CategoryManagementComponent} from "./category/pages/category-management/category-management.component";

const routes: Routes = [
  { path: 'home-administrators', component: HomeAdministratorsComponent },
  { path: 'home-students', component: HomeStudentsComponent },
  { path: 'category-management', component: CategoryManagementComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
