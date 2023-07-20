import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/services/api.service';
import { NewFile } from 'src/app/models/file.models';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-galery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.css'],
})
export class GaleryComponent implements OnInit, OnDestroy {
  public images: NewFile[] = [];
  private imageSubscription!: Subscription;

  constructor(private _apiService: ApiService) {}

  ngOnDestroy(): void {
    this.imageSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.imageSubscription = this._apiService
      .getAllImages()
      .subscribe((response) => (this.images = response));
  }

  loaded(event: Event) {
    (event.target as HTMLImageElement).style.opacity = '1';
  }
}
