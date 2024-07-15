import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
      <nav class="font-extralight bg-blue-100">
          <ul class="flex justify-between items-center text-lg px-5 py-3">
              <li><a routerLink="/home">
                <img src='assets/images/LogoSansText.png' alt="Logo" class="h-10">
              </a></li>

              <li *ngIf="role === 'User'">
                <a routerLink="/home" class="mx-10">Home</a>
                <a routerLink="/home" class="mx-10">Gallery</a>
                <a routerLink="/admin" class="mx-10">AddPhotos</a>
              </li>

              <li *ngIf="role === 'Admin'">
                <a routerLink="/home" class="mx-10">Dashboard</a>
                <a routerLink="/home" class="mx-10">About</a>
              </li>

              <li><a>Login</a></li>

          </ul>
      </nav>
  `,
})
export class NavBarComponent implements OnInit{
  // @ViewChild('pages') pages: ElementRef;
  context: string = 'NavBar';
  role: string = 'User';

  constructor() {}

  ngOnInit() {}


  setRole(role: string) {
    this.role = role;
  } 

  setContext(context: string) {
    this.context = context;
  }
}
