import { Component } from '@angular/core';

@Component({
  selector: 'app-add-photo',
  standalone: true,
  templateUrl: './add-photo.component.html',
  styleUrls: ['./add-photo.component.css'],
})
export class AddPhotoComponent {
  isOpen: boolean = false;

  openModal() {
    this.isOpen = !this.isOpen;
  }

  closeModal() {
    this.isOpen = false;
  }
}
