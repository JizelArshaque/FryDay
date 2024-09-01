import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChangePasswordAdminPageRoutingModule } from './change-password-admin-routing.module';

import { ChangePasswordAdminPage } from './change-password-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChangePasswordAdminPageRoutingModule
  ],
  declarations: [ChangePasswordAdminPage]
})
export class ChangePasswordAdminPageModule {}
