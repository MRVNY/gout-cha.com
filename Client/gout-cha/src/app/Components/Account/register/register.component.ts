import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '@services/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <div class="flex flex-col justify-center items-center h-screen">
      <h1 class="text-5xl m-5">Register</h1>
      <form [formGroup]="form" (submit)="OnSubmit()" 
        class="flex flex-col space-y-3">
        <input type="text" formControlName="username" placeholder="Username">
        <input type="email" formControlName="email" placeholder="Email">
        <input type="password" formControlName="password" placeholder="Password">
        <button type="submit">Register</button>
  `,
  styles: ``
})
export class RegisterComponent {

  constructor(private UserService: UserService, private router: Router) { }

    form: FormGroup = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
      email: new FormControl('')
    });
      
  
    OnSubmit() {
      this.UserService.register(this.form.value.username, this.form.value.password, this.form.value.email).subscribe({
        next: (data) => {
          console.log(data);
          //go to home page
          this.router.navigate(['/login']);
        },
        error: (error) => {
          alert('Invalid username or password');
          console.log(error);
        }
      });
    }
}
