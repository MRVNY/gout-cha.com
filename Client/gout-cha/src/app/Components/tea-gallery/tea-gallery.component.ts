import { Component } from '@angular/core';
import { TeaItemComponent } from "../tea-item/tea-item.component";

@Component({
    selector: 'app-tea-gallery',
    standalone: true,
    template: `
    <div class="">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0">
        <app-tea-item/>
        <app-tea-item/>
        <app-tea-item/>
        <app-tea-item/>
        <app-tea-item/>
        <app-tea-item/>
      </div>
    </div>
    <!-- <div class="tea-grid">
      <div class="tea-item" *ngFor="let tea of teas">
        <img [src]="tea.imageUrl" alt="{{ tea.name }}" class="tea-image">
        <h3 class="tea-name">{{ tea.name }}</h3>
        <p class="tea-description">{{ tea.description }}</p>
      </div>
    </div> -->
  `,
    styleUrl: './tea-gallery.component.css',
    imports: [TeaItemComponent]
})
export class TeaGalleryComponent {
  teas = [
    
  ];
}
