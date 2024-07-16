import { Component, OnInit } from '@angular/core';
import { TeaItemComponent } from "../tea-item/tea-item.component";
import { DbService } from '../../Services/db.service';
import { UserService } from '../../Services/user.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-tea-gallery',
    standalone: true,
    template: `
      <h1 class="text-8xl text-center m-10">Tea Gallery</h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0">
        <app-tea-item  
          *ngFor="let tea of teas" 
          [tea]="tea"/>

        <app-tea-item *ngIf="this.UserService.role==='admin'"
          [tea]="undefined"/>
      </div>
  `,
    imports: [TeaItemComponent, CommonModule]
})
export class TeaGalleryComponent implements OnInit{
  teas: any;
  constructor(private DbService: DbService, public UserService: UserService) {}
  
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

  // OnClick(name:string, description:string) {
  //   alert(name + " " + description);
  // }

}
