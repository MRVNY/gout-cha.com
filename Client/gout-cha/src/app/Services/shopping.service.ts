import { Injectable } from '@angular/core';
import { ShoppingItem } from '@models/shopping-item';
import { DbService } from './db.service';
import { UserService } from './user.service';
import { Order } from '@models/order';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  cart: ShoppingItem[] = [];
  total: number = 0.0;

  constructor(private DbService: DbService, private UserService: UserService, private CookieService: CookieService) { 
    this.loadCart();
  }

  addToCart(product: ShoppingItem) {
    const item = this.cart.find(i => i.IdProduct === product.IdProduct);
    if (item) {
      item.Quantity += product.Quantity;
    } else {
      this.cart.push(product);
    }
    this.saveCart();
  }

  removeFromCart(arg0: any) {
    this.cart = this.cart.filter(i => i.IdProduct !== arg0.IdProduct);
    this.saveCart();
  }

  saveCart() {
    this.total = this.cart.reduce((acc, item) => acc + item.price * item.Quantity, 0);
    // localStorage.setItem('cart', JSON.stringify(this.cart));
    // save to cookie
    this.CookieService.set('cart', JSON.stringify(this.cart));
    // document.cookie = `cart=${JSON.stringify(this.cart)};`;
  }

  loadCart() {
    try{
      // this.cart = JSON.parse(document.cookie.split('=')[1] || '[]');
      const tmp = this.CookieService.get('cart');
      if (tmp !== undefined && tmp !== "undefined" && tmp !== '') {
        this.cart = JSON.parse(tmp);
      }
    } catch {
      this.cart = [];
    }
    this.saveCart();
  }

  checkout() {

    if (this.cart.length === 0) {
      alert('Cart is empty');
      return;
    }

    if (this.UserService.currentUser === undefined || this.UserService.currentUser.IdUser === 0) {
      alert('Please login first');
      return;
    }
    
    const order: Order = {
      IdOrder: 0,
      IdUser: this.UserService.currentUser?.IdUser ?? 0,
      TotalPrice: this.total,
      Status: 'Processing',
      Date: new Date(),
      Products: this.cart
    };

    this.DbService.postQuery('order/addOrder', order).subscribe({
      next: (data) => {
        console.log(data);

        this.cart = [];
        this.saveCart();

        alert('Checkout successful');
      },
      error: (error) => {
        console.error('There was an error!', error);
      }
    });
  }
}
