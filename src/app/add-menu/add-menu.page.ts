import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { addMenu } from 'src/Class/AddMenu';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.page.html',
  styleUrls: ['./add-menu.page.scss'],
})
export class AddMenuPage implements OnInit {
  addMenu = new addMenu();
  imagePreview: string | ArrayBuffer | null = null;

  constructor(private router: Router) {}

  ngOnInit() {}

  onImageChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result;
        // Bind Base64 string to addMenu.Image
        this.addMenu.Image = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  removeImage() {
    // Clear image preview
    this.imagePreview = null;
    // Clear file input
    const fileInput = document.getElementById('imageUpload') as HTMLInputElement;
    if (fileInput) {
      fileInput.value = '';
    }
    // Clear image from addMenu.Image
    this.addMenu.Image = '';
  }

  onSubmit() {
    // Convert isLive to 1 or 0
    this.addMenu.isLive = this.addMenu.isLive ? 1 : 0;
    console.log('Order submitted:', this.addMenu);
  }

  goBack() {
    this.router.navigate(['/manage-menu']);
  }

  logout() {
    alert('Logged out');
  }
}