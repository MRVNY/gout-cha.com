import { Component } from '@angular/core';
import { OrderComponent } from "./order/order.component";
import { CommonModule } from '@angular/common';
import { ShoppingService } from '@services/shopping.service';
import { UserService } from '@services/user.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [OrderComponent, CommonModule],
  template: `
    <div class="flex flex-col justify-between space-y-5 items-center m-5">
      <h1 class="text-5xl m-5">Hi {{this.UserService.currentUser?.Username}}!</h1>

      <div class="border-black border-2 w-3/4 flex flex-col items-center">
        <h1 class="text-3xl m-5">Your Orders</h1>
        <app-order class="w-3/4"/>
        <!-- <div *ngIf="this.UserService.role==='user'" class="flex flex-col space-y-3">
          <app-order/>
        </div>
        <div *ngIf="this.UserService.role==='admin'" class="flex flex-col space-y-3">
          <!-- <app-order *ngFor="let order of this.ShoppingService.orders" [order]="order"/> -->
        <!-- </div> -->
      </div>

      <button (click)="this.UserService.logout()" class="p-1">Logout</button>
    </div>
  `,
  styles: ``
})
export class UserComponent {
  constructor(public ShoppingService: ShoppingService, public UserService: UserService) {}

  // OnClick(name:string, description:string) {
  //   alert(name + " " + description);
  // }
}
