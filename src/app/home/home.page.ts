import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor() {}

  menuItems = [
    { image: '../../assets/menu-sample.jpg' },
    { image: '../../assets/menu-sample.jpg' },
    { image: '../../assets/menu-sample.jpg' },
    { image: '../../assets/menu-sample.jpg' },
  ];

  ngOnInit() {
    // Any initialization logic can go here
  }

  

  orderItem(it: any) {}

  whatsapp(){
    console.log('hi');
    
  }
  call(){
    console.log('hi');
    
  }
}