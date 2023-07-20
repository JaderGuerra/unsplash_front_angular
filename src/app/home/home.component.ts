import { Component } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { GaleryComponent } from '../components/galery/galery.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, GaleryComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {}
