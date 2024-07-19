import { Component, ElementRef, input, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '@services/product.service';
import { CommonModule } from '@angular/common';
import { ImageService } from '@services/image.service';

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
        value="{{ product.IdProduct }}">
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

  constructor(private DbService: ProductService, private ImageService: ImageService) {}
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


  async onFileSelected($event: Event) {
    if ($event.target instanceof HTMLInputElement) {
      const files = ($event.target as HTMLInputElement).files;
      if (files) {
        const byteString = await this.ImageService.fileToByte(files[0]);
        // const id = this.products.find((product: any) => product.Name === this.idProductInput.nativeElement.
        this.ImageService.addPhoto(this.idProductInput.nativeElement.value, byteString);
      }
    }
  }
}
