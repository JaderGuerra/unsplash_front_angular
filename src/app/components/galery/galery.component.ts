import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/services/api.service';
import { NewFile } from 'src/app/models/file.models';
import { Subscription } from 'rxjs';
import { ImagePreviewComponent } from '../image-preview/image-preview.component';

@Component({
  selector: 'app-galery',
  standalone: true,
  imports: [CommonModule, ImagePreviewComponent],
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.css'],
})
export class GaleryComponent implements OnInit, OnDestroy {
  public showPreview = false;
  public images: NewFile[] = [];
  public selectedImage!: NewFile;
  private imageSubscription!: Subscription;

  constructor(private _apiService: ApiService) {}

  ngOnDestroy(): void {
    this.imageSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.showAllImages();
  }

  loaded(event: Event) {
    (event.target as HTMLImageElement).style.opacity = '1';
  }

  selectImage(image: NewFile) {
    this.selectedImage = image;
    this.showPreview = true;
  }

  showAllImages() {
    this.imageSubscription = this._apiService
      .getAllImages()
      .subscribe((response) => (this.images = response));
  }

  deletedFile(id: string, event: MouseEvent) {
    event.stopPropagation()
    this._apiService.deleteFile(id).subscribe((response) => {
      this.imageSubscription = this._apiService
        .getAllImages()
        .subscribe((response) => (this.images = response));
    });
  }
}
