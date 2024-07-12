import { Component, OnInit } from '@angular/core';
import { TeaItemComponent } from "../tea-item/tea-item.component";
import { DbService } from '../../services/db.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-tea-gallery',
    standalone: true,
    template: `
    <div class="">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0">
        <!-- //ngFor -->
        <!-- // create a tea-item component, pass a json object-->
        <app-tea-item  
          *ngFor="let tea of teas" 
          [tea]="tea"
          (click)="OnClick(tea.Name,tea.Description)"/>
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
    imports: [TeaItemComponent, CommonModule]
})
export class TeaGalleryComponent implements OnInit{
  teas: any;  
  constructor(private DbService: DbService) {}
  
  ngOnInit() {
    let observable = this.DbService.getAllTea();
    observable.subscribe({
      next: (data) => {
        this.teas = data.result;
      },
      error: (error) => {
        console.error('There was an error!', error);
      }
    });
  }

  OnClick(name:string, description:string) {
    alert(name + " " + description);
  }

}
