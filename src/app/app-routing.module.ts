import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login-for-admin',
    loadChildren: () => import('./login-for-admin/login-for-admin.module').then( m => m.LoginForAdminPageModule)
  },
  {
    path: 'manage-menu',
    loadChildren: () => import('./manage-menu/manage-menu.module').then( m => m.ManageMenuPageModule)
  },
  {
    path: 'add-menu',
    loadChildren: () => import('./add-menu/add-menu.module').then( m => m.AddMenuPageModule)
  },
  {
    path: 'change-password-admin',
    loadChildren: () => import('./change-password-admin/change-password-admin.module').then( m => m.ChangePasswordAdminPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
