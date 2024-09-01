import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password-admin',
  templateUrl: './change-password-admin.page.html',
  styleUrls: ['./change-password-admin.page.scss'],
})
export class ChangePasswordAdminPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  passwords = {
    current: '',
    new: ''
  };

  goBack() {
    this.router.navigate(['/manage-menu']);
  }

  logout() {
    // Logic for logout
  }

  onChangePassword() {
    // Logic to handle password change
    console.log(this.passwords);
  }
}
