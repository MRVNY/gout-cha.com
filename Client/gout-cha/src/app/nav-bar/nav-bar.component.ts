import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [],
  template: `
    <nav class="font-extralight bg-blue-100">
        <ul class="flex justify-between items-center text-lg p-5">
          <li><a href="/">
            <img src='assets/images/LogoSansText.png' alt="Logo" class="h-10">
          </a></li>
          <li><a href="/recipes">Recipes</a></li>
          <li><a href="/shopping-list">Shopping List</a></li>
        </ul>
      </nav>
  `,
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

}
