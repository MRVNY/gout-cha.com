import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <div class="flex flex-col justify-center items-center h-screen">
      <h1 class="text-5xl m-5">Register</h1>
      <form [formGroup]="form" (submit)="onSubmit()" 
        class="flex flex-col space-y-3">
        <input type="text" formControlName="username" placeholder="Username">
        <input type="email" formControlName="email" placeholder="Email">
        <input type="password" formControlName="password" placeholder="Password">
        <button type="submit">Register</button>
  `,
  styles: ``
})
export class RegisterComponent {
  
    form: FormGroup = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
      email: new FormControl('')
    });
      
  
    onSubmit() {
      console.log(this.form.value);
    }
}
