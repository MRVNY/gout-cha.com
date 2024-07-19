import { Injectable } from '@angular/core';
import { DbService } from './db.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private DbService: DbService) { }

  getOrdersByIdUser(idUser: number) {
    return this.DbService.getQuery('order/getOrdersByIdUser?id=' + idUser);
  }
}
