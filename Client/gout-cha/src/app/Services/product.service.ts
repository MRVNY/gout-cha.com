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

  addProduct(product: any): Observable<any> {
    return this.DbService.postQuery('admin/addProduct', product);
  }

  updateProduct(product: any): Observable<any>{
    return this.DbService.putQuery('admin/updateProduct', product);
  }

  deleteProduct(idProduct: string) : Observable<any> {
    return this.DbService.deleteQuery(`admin/deleteProduct?id=${idProduct}`);
  }
}
