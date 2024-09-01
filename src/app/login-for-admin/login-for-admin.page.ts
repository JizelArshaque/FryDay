import { Component, OnInit } from '@angular/core';
import { Login } from 'src/Class/Login';

@Component({
  selector: 'app-login-for-admin',
  templateUrl: './login-for-admin.page.html',
  styleUrls: ['./login-for-admin.page.scss'],
})
export class LoginForAdminPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  login = new Login();

  onSubmit() {
    // Handle login logic here
    console.log('Login Data:', this.login);
  }
}
