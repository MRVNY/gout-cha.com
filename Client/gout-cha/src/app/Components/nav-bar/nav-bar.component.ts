import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { UserService } from '../../Services/user.service';



@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
      <nav class="fixed top-0 w-full bg-navbar bg-opacity-95">
          <ul class="flex justify-between items-center text-lg px-5 py-3 text-white">
              <li><a routerLink="/home">
                <img src='assets/images/LogoSansText.png' alt="Logo" class="h-10">
              </a></li>

              <li *ngIf="role === 'User'">
                <a routerLink="/home" class="mx-10">HOME</a>
                <a routerLink="/home" class="mx-10">GALLERY</a>
                <a class="mx-10"
                (click)="setRole()">{{UserService.role==='user' ? 'ADMIN' : 'USER'}}</a>
              </li>

              <li *ngIf="role === 'Admin'">
                <a routerLink="/home" class="mx-10">Dashboard</a>
                <a routerLink="/home" class="mx-10">About</a>
              </li>

              <div class="flex space-x-5">
              <li><a routerLink="/cart">Cart</a></li>
              <li><a routerLink="/login">Login</a></li>
              </div>

          </ul>
      </nav>
      <div class="h-20"></div>
  `,
})
export class NavBarComponent implements OnInit{
  // @ViewChild('pages') pages: ElementRef;
  context: string = 'NavBar';
  role: string = 'User';

  constructor(public UserService: UserService) {}

  ngOnInit() {}


  setRole() {
    if (this.UserService.role === 'user') {
      this.UserService.role = 'admin';
    }
    else {
      this.UserService.role = 'user';
    }
  } 

  setContext(context: string) {
    this.context = context;
  }
}
