import { Injectable } from '@angular/core';
import { NewFile } from '../models/file.models';
import {
  HttpClient,
  HttpEventType,
  HttpHeaders,
  HttpResponse,
} from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  percentDone!: number;
  uploadSuccess!: boolean;
  private _url: string = '';

  constructor(private _http: HttpClient) {}

  uploadFile(file: NewFile) {
    let headers = new HttpHeaders();
    headers = headers
      .set('Content-Type', 'multipart/form-data');

    const fd = new FormData();
    fd.append('image_path', file.image_path!);
    fd.append('label', file.label);
    return this._http.post('http://192.168.1.57:8000/api/uploadfile', fd);
  }

  getAllImages(): Observable<NewFile[]> {
    return this._http.get<NewFile[]>('http://192.168.1.57:8000/api/getImages');
  }
}
