import { Component, ElementRef, input, ViewChild } from '@angular/core';
import { DbService } from '../../services/db.service';

@Component({
  selector: 'app-admin-add-photo',
  standalone: true,
  imports: [],
  template: `
    <p>
      <input type="text" placeholder="idProduct" #idProductInput>
      <input type="file" accept="image/*" (change)="onFileSelected($event)">
      <!-- <button (change)="onFileSelected($event)">Upload</button> -->
    </p>
  `,
  styleUrl: './admin-add-photo.component.css'
})
export class AdminAddPhotoComponent {
  @ViewChild('idProductInput') idProductInput!: ElementRef;

  constructor(private DbService: DbService) {}

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
