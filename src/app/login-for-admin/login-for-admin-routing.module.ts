import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginForAdminPage } from './login-for-admin.page';

const routes: Routes = [
  {
    path: '',
    component: LoginForAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginForAdminPageRoutingModule {}
