import { Component, ElementRef, input, OnInit, ViewChild } from '@angular/core';
import { DbService } from '../../../Services/db.service';
import { CommonModule } from '@angular/common';
import { TeaGalleryComponent } from '../../tea-gallery/tea-gallery.component';

@Component({
  selector: 'app-admin-add-photo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      <!-- <input type="text" placeholder="idProduct" #idProductInput> -->

      <!-- dropdown -->
      <select>
        <option 
        #idProductInput
        *ngFor="let product of products" 
        value="{{ product.Id }}">
        {{ product.Name }}
      </option>
   
      </select>
      
      
      <input type="file" accept="image/*" (change)="onFileSelected($event)">
      <!-- <button (change)="onFileSelected($event)">Upload</button> -->
    </p>
  `,
})
export class AdminAddPhotoComponent implements OnInit{
  @ViewChild('idProductInput') idProductInput!: ElementRef;
  products: any;

  constructor(private DbService: DbService) {}
  ngOnInit(): void {
    let observable = this.DbService.getAllTea();
    observable.subscribe({
      next: (data) => {
        this.products = data.result;
      },
      error: (error) => {
        console.error('There was an error!', error);
      }
    });
  }


  onFileSelected($event: Event) {
    if ($event.target instanceof HTMLInputElement) {
      const files = ($event.target as HTMLInputElement).files;
      if (files) {
        Array.from(files)?.forEach(file => {
          //to byte[]
          const reader = new FileReader();
          reader.readAsDataURL(file); // Read the file as Data URL (Base64)
          reader.onload = () => {
            const base64String = reader.result?.toString().split(',')[1];
            // console.log(this.idProductInput.nativeElement.value);
            this.DbService.addPhoto(this.idProductInput.nativeElement.value, base64String as string);
        };
        });
      }
    }
  }
}
