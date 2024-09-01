import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChangePasswordAdminPage } from './change-password-admin.page';

const routes: Routes = [
  {
    path: '',
    component: ChangePasswordAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChangePasswordAdminPageRoutingModule {}
