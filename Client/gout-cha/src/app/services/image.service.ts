import { Injectable } from '@angular/core';
import { DbService } from './db.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private DbService: DbService) { }

  addPhoto(idProduct: string, base64String: string): Observable<any> {
    const data = { idProduct, image: base64String };
    return this.DbService.postQuery('admin/addPhoto', data);
  }

  deletePhoto(idProduct: string) : Observable<any> {
    return this.DbService.deleteQuery(`admin/deletePhoto?id=${idProduct}`);
  }

  updatePhoto(idProduct: string, base64String: string) {
    this.deletePhoto(idProduct);
    this.addPhoto(idProduct, base64String);
  }

  fileToByte(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => {
        const base64String = reader.result?.toString().split(',')[1];
        resolve(base64String as string);
      };
      reader.onerror = (error) => {
        reject(error);
      };
      reader.readAsDataURL(file);
    });
  }

  fileToUrl(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => {
        resolve(reader.result as string);
      };
      reader.onerror = (error) => {
        reject(error);
      };
      reader.readAsDataURL(file);
    });
  }

  byteToUrl(base64String: string): string {
    let imageUrl = '';
    if (base64String !== undefined) {
      const imageBytes = new Uint8Array(atob(base64String).split('').map(char => char.charCodeAt(0)));
      const blob = new Blob([imageBytes], { type: 'image/jpg' });
      imageUrl = URL.createObjectURL(blob);
    }
    return imageUrl
  }
}
