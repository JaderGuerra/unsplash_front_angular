import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewFile } from 'src/app/models/file.models';

@Component({
  selector: 'image-preview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-preview.component.html',
  styleUrls: ['./image-preview.component.css']
})
export class ImagePreviewComponent implements OnInit, OnDestroy {

  @Output() close = new EventEmitter();
  @Input() image!: NewFile;

  closePreview(event: KeyboardEvent) {
    if(event.key === 'Escape') this.close.emit()
  }

  ngOnDestroy(): void {
    document.removeEventListener('keyup', this.closePreview.bind(this))
  }
  ngOnInit(): void {
    document.addEventListener('keyup', this.closePreview.bind(this))
  }
}
