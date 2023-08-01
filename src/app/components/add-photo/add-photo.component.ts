import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-add-photo',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-photo.component.html',
  styleUrls: ['./add-photo.component.css'],
})
export class AddPhotoComponent {
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  form!: FormGroup;
  isOpen: boolean = false;
  image!: string;
  selectedFile: File | null = null;

  constructor(private _fb: FormBuilder, private _api: ApiService) {}

  ngOnInit() {
    this.form = this.createForm();
  }

  createForm(): FormGroup {
    return this._fb.group({
      label: ['', [Validators.required, Validators.minLength(3)]],
      image_path: [''],
      url: [''],
    });
  }

  uploadImage() {
    const file = {
      label: this.form.value.label,
      image_path: this.selectedFile ?? '',
      url: this.form.value.url,
    };

    this._api.uploadFile(file).subscribe((response) => this.clearForm());
  }

  captureFile(event: Event): void {
    const fileInput = event.target as HTMLInputElement;

    if (fileInput.files && fileInput.files.length > 0) {
      this.selectedFile = fileInput.files[0];
      const objectURL = URL.createObjectURL(fileInput.files[0]);
      this.image = objectURL;
      this.form.controls['url'].disable();
      this.form.controls['url'].reset()
    }
  }

  captureUrl() {
    if (!this.form.value.image_path) {
      this.image = this.form.value.url;
    }
  }

  removeSelectedImage() {
    this.selectedFile = null
    this.form.controls['url'].enable()
    this.form.controls['image_path'].reset()
    this.image = ''
  }

  openModal() {
    this.isOpen = !this.isOpen;
  }

  closeModal() {
    this.isOpen = false;
    this.clearForm();
  }

  clearForm() {
    this.form.reset();
    this.image = '';
    this.form.controls['url'].enable();
  }
}
