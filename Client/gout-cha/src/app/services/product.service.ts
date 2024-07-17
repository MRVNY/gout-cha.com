import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DbService } from './db.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private DbService: DbService) { }

  getAllTea(): Observable<any> {
    return this.DbService.getQuery('product/getAllTea');
  }

  addPhoto(idProduct: string, base64String: string) {
    const data = { idProduct, image: base64String };
    this.DbService.postQuery('admin/addPhoto', data).subscribe((data) => {
      console.log(data);
    });
  }

  addProduct(product: any) {
    this.DbService.postQuery('admin/addProduct', product).subscribe((data) => {
      console.log(data);
    });
  }

  updateProduct(product: any) {
    this.DbService.putQuery('admin/updateProduct', product).subscribe((data) => {
      console.log(data);
    });
  }

  deleteProduct(idProduct: string) {
    this.DbService.deleteQuery(`admin/deleteProduct/${idProduct}`).subscribe((data) => {
      console.log(data);
    });
  }
}
