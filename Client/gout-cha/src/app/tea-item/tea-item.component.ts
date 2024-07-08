import { Component } from '@angular/core';

@Component({
  selector: 'app-tea-item',
  standalone: true,
  imports: [],
  template: `
    <div>
      <div class="relative justify-center cursor-pointer group">
        <img [src]="image" alt="{{ name }}" class="w-full h-full">
        
        <div class="absolute inset-0 justify-center items-center flex">
          <div class="h-4/5 w-4/5 bg-red-200 p-1 text-justify opacity-0 group-hover:opacity-80 transition-all">  
            <h3 class="text-center text-cha sm:text-cha md:text-cha/3 lg:text-cha/4 ">{{ name }}</h3>
            <p class="text-desc sm:text-desc/2 md:text-desc/3 lg:text-desc/4">{{ description }}</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrl: './tea-item.component.css'
})

export class TeaItemComponent {
  name: string = '普洱生茶';
  image: string = '/assets/images/生茶.jpg';
  description: string = 'De plus en plus emblématiques des amateurs de thé, les thés Pu\'er sont encore source de nombreux mystères.';
}
