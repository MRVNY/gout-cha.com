import { Component } from '@angular/core';
import { ShoppingService } from '@services/shopping.service';
import { CommonModule } from '@angular/common';
import { CartItemComponent } from "./cart-item/cart-item.component";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, CartItemComponent],
  template: `
  <div class="flex justify-center">
    <div class="flex flex-col justify-start items-center w-1/2">
      <h1 class="text-5xl m-5">Cart</h1>

      <app-cart-item
        *ngFor="let item of ShoppingService.cart"
        [item]="item" class="w-full"/>

      <div class="self-end text-end mt-8">
        <p>Total: {{ShoppingService.total}}$</p>
        <button (click)="ShoppingService.checkout()" class="p-1">Checkout</button>
      </div>
    </div>
  </div>
  `,
  styles: ``
})
export class CartComponent {
  constructor(public ShoppingService: ShoppingService) {}

  // OnClick(name:string, description:string) {
  //   alert(name + " " + description);
  // }
}
