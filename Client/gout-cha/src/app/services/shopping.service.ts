import { Injectable } from '@angular/core';
import { ShoppingItem } from '../Models/shopping-item';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  cart: ShoppingItem[] = [];
  total: number = 0.0;

  constructor() { 
    this.loadCart();
  }

  addToCart(product: ShoppingItem) {
    const item = this.cart.find(i => i.productId === product.productId);
    if (item) {
      item.quantity += product.quantity;
    } else {
      this.cart.push(product);
    }
    this.saveCart();
  }

  removeFromCart(arg0: any) {
    this.cart = this.cart.filter(i => i.productId !== arg0.productId);
    this.saveCart();
  }

  saveCart() {
    this.total = this.cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    // localStorage.setItem('cart', JSON.stringify(this.cart));
    // save to cookie
    // console.log(this.cart);
    document.cookie = `cart=${JSON.stringify(this.cart)};`;
  }

  loadCart() {
    // this.cart = JSON.parse(localStorage.getItem('cart') || '[]');
    // load from cookie
    this.cart = JSON.parse(document.cookie.split('=')[1] || '[]');
    // console.log(this.cart);

    this.saveCart();
  }

  checkout() {
    this.cart = [];
    this.saveCart();

    alert('Checkout successful');
  }
}
