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
          <ul class="flex items-center text-lg px-5 py-3 text-white">
              <li class="self-start w-1/4 flex">
                <a routerLink="/home">
                <img src='assets/images/LogoSansText.png' alt="Logo" class="h-10">
              </a></li>

              <li class="w-1/2 flex justify-evenly">
                <a routerLink="/home">HOME</a>
                <a routerLink="/pu-er">PU'ER</a>
                <a *ngIf="UserService.currentUser!==undefined && UserService.currentUser.Role==='admin'"
                (click)="setRole()">{{UserService.role==='user' ? 'ADMIN VIEW' : 'USER VIEW'}}</a>
              </li>

              <div class="flex flex-row space-x-5 w-1/4 justify-end">
              <li class="flex justify-center">
                <a routerLink="/cart" class="material-icons">shopping_cart</a>
              </li>
              <li  class="flex justify-center" *ngIf="UserService.currentUser===undefined">
                <a routerLink="/login" class="material-icons">login</a>
              </li>
              <li  class="flex justify-center" *ngIf="UserService.currentUser!==undefined">
                <a routerLink="/user" class="material-icons">account_circle</a>
              </li>
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
