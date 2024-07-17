import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  template: `
    <div class="flex flex-col justify-center items-center h-screen">
      <h1 class="text-5xl m-5">User</h1>
      <h1 class="text-5xl m-5">Your Orders</h1>
      <div class="flex flex-col space-y-3">
        <div class="flex flex-row space-x-3">
          <p>Order ID: 1</p>
          <p>Items: 2</p>
          <p>Total: 20$</p>
        </div>
        <div class="flex flex-row space-x-3">
          <p>Order ID: 2</p>
          <p>Items: 3</p>
          <p>Total: 30$</p>
        </div>
        <div class="flex flex-row space-x-3">
          <p>Order ID: 3</p>
          <p>Items: 1</p>
          <p>Total: 10$</p>
        </div>
      </div>
    </div>
  `,
  styles: ``
})
export class UserComponent {

}
