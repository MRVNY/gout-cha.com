import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderService } from '@services/order.service';
import { Order } from '@models/order';
import { UserService } from '@services/user.service';
import { OrderItemComponent } from './order-item/order-item.component';
import { CartItemComponent } from "../../../cart/cart-item/cart-item.component";
import { ProductService } from '@services/product.service';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CommonModule, OrderItemComponent, CartItemComponent],
  template: `
    <div *ngFor="let order of orders"
      class="border-2 m-5 p-5 w-full border-black">
      <p>Order ID: {{order.IdOrder}}</p>
      <p>Date: {{order.Date}}</p>
      <p>Status: {{order.Status}}</p>
      <app-order-item *ngFor="let item of order.Products" [item]="item"/>
      <p>Total Price: {{order.TotalPrice}}€</p>
    </div>
  `,
  styles: ``
})
export class OrderComponent implements OnInit {
  orders: Order[] = [];

  constructor(private OrderService: OrderService, private UserService: UserService, private ProductService: ProductService) { }

  ngOnInit() {
    const userId = this.UserService.currentUser?.IdUser;
    if (userId !== undefined) {
      this.OrderService.getOrdersByIdUser(userId).subscribe({
        next: async (data: any) => {
          console.log(data);
          for (let order of data.result) {
            for (let product of order.Products) {
              const productData = await this.ProductService.getProductById(product.IdProduct);
              console.log(productData);
              product.Name = productData.result[0].Name;
              product.Price = productData.result[0].Price;
            }
          }
          this.orders = data.result
        },
        error: (error) => {
          console.error('There was an error!', error);
        }
      });
    }
  }

}
