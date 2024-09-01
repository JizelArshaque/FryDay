import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-menu',
  templateUrl: './manage-menu.page.html',
  styleUrls: ['./manage-menu.page.scss'],
})
export class ManageMenuPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  items = [
    { id: 1, image: '../../assets/menu-sample.jpg',order: 1, enabled: true },
    { id: 2, image: '../../assets/menu-sample.jpg',order: 1,enabled: false },
    { id: 3, image: '../../assets/menu-sample.jpg', order: 1,enabled: true },
  ];

  toggleEnable(item: any) {
    item.enabled = !item.enabled;
  }

  editItem(item: any) {
    console.log('Edit Item:', item);
    // Add your edit logic here
  }

  deleteItem(item: any) {
    console.log('Delete Item:', item);
    // Add your delete logic here
  }
  addNew(){
    this.router.navigate(['/add-menu']); 
  }

  changePassword(){
    this.router.navigate(['/change-password-admin']); 
  }
}
