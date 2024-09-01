import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginForAdminPageRoutingModule } from './login-for-admin-routing.module';

import { LoginForAdminPage } from './login-for-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginForAdminPageRoutingModule
  ],
  declarations: [LoginForAdminPage]
})
export class LoginForAdminPageModule {}
