import { Component } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { SearchImagesComponent } from '../search-images/search-images.component';
import { AddPhotoComponent } from '../add-photo/add-photo.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LogoComponent, SearchImagesComponent, AddPhotoComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {}
