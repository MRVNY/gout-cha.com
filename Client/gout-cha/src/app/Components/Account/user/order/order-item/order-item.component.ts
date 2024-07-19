import { Component, Input } from '@angular/core';
import { Order } from '@models/order';
import { ShoppingService } from '@services/shopping.service';

@Component({
  selector: 'app-order-item',
  standalone: true,
  imports: [],
  template: `
    <div class="flex justify-between items-center border-2 border-black my-2 h-20">
      <div class="m-4">
      <p>{{item.Name}} x{{item.Quantity}}</p>
      <p>{{item.Price}}€</p>
      </div>
      <div class="h-full">
        <!-- <button (click)="ShoppingService.removeFromCart(item)"
        class="border-0 h-full rounded-none p-4 hover:bg-red-500 hover:text-white">Remove</button>
      </div> -->
    </div>
  `,
  styles: ``
})
export class OrderItemComponent {
  @Input() item: any;
  constructor(public ShoppingService: ShoppingService) { }
}
