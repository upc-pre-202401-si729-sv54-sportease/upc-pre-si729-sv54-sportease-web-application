import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeAdministratorsComponent} from "./profiles/components/home-administrators/home-administrators.component";
import {HomeStudentsComponent} from "./profiles/components/home-students/home-students.component";
import {CategoryManagementComponent} from "./category/pages/category-management/category-management.component";
import {StudentsManagementComponent} from "./students-for-category/pages/students-management/students-management.component";
import {LoginComponent} from "./authentication/components/login/login.component";
import {RegisterComponent} from "./authentication/components/register/register.component";


const routes: Routes = [
  { path: 'home-administrators', component: HomeAdministratorsComponent },
  { path: 'home-students', component: HomeStudentsComponent },
  { path: 'category-management', component: CategoryManagementComponent},
  { path: 'students-management/:yearCategory', component: StudentsManagementComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent}
  { path: '', redirectTo: '/login', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
