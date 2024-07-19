import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { UserService } from '@services/user.service';



@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
      <nav class="fixed top-0 w-full backdrop-blur-md z-50" style="background-color: rgba(114, 131, 154, 0.8);">
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

              <div class="flex space-x-5">
              <li><a routerLink="/cart">Cart</a></li>
              <li *ngIf="UserService.currentUser===undefined"><a routerLink="/login">Login</a></li>
              <li *ngIf="UserService.currentUser!==undefined"><a routerLink="/user">{{this.UserService.currentUser.Username}}</a></li>
              </div>

          </ul>
      </nav>
      <div class="h-20"></div>
  `,
})
export class NavBarComponent implements OnInit{
  role: string = 'User';

  constructor(public UserService: UserService) {}

  ngOnInit() {
    console.log(this.UserService.currentUser);
  }


  setRole() {
    if (this.UserService.role === 'user') {
      this.UserService.role = 'admin';
    }
    else {
      this.UserService.role = 'user';
    }
  } 
}
