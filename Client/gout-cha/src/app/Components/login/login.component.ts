import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  template: `
    <div class="flex flex-col justify-center items-center h-screen">
      <h1 class="text-5xl m-5">Login</h1>
      <form [formGroup]="form" (submit)="onSubmit()" 
        class="flex flex-col space-y-3">
        <input type="text" formControlName="username" placeholder="Username">
        <input type="password" formControlName="password" placeholder="Password">
        <button type="submit">Login</button>
      </form>
      <a routerLink="/register" class="text-uiyellow my-2" >Register</a>
    </div>
  `,
  styles: ``
})
export class LoginComponent {

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  onSubmit() {
    console.log(this.form.value);
  }

}
