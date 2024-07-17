import { Component, Input } from '@angular/core';
import { ShoppingService } from '../../../Services/shopping.service';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [],
  template: `
    <div class="flex justify-between items-center border-2 border-black my-2 h-20">
      <div class="m-4">
      <p>{{item.productName}} x{{item.Quantity}}</p>
      <p>{{item.price}}</p>
      </div>
      <div class="h-full">
        <button (click)="ShoppingService.removeFromCart(item)"
        class="border-0 h-full rounded-none p-4 hover:bg-red-500 hover:text-white">Remove</button>
      </div>
    </div>
  `,
  styles: ``
})
export class CartItemComponent {
  @Input() item: any;
  constructor(public ShoppingService: ShoppingService) {}
}
