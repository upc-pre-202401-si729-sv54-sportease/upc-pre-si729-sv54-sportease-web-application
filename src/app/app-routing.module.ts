import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingAdministratorComponent } from "./profiles/components/setting-administrator/setting-administrator.component";

const routes: Routes = [
  { path: 'settings', component: SettingAdministratorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
