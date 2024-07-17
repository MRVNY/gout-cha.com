import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../../../Services/user.service';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { ShoppingService } from '../../../../Services/shopping.service';
import { RouterLink } from '@angular/router';
import { ColorPickerModule } from 'ngx-color-picker';

@Component({
  selector: 'app-tea-item',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, ColorPickerModule],
  template: `
    <!-- USER -->
    <div *ngIf="this.UserService.role === 'user'" class="relative justify-center group text-white">
      <img [src]="image" alt="{{ tea.Name }}" class="w-full h-full aspect-square">

      <div class="absolute inset-0 justify-center items-center flex">

        <div class="h-4/5 w-4/5 p-3 flex flex-col text-justify justify-between
          opacity-0 group-hover:opacity-80 transition-all" style="background-color: {{tea.Color}}">
          <div class="text-center text-cha sm:text-cha/2 md:text-cha/3 lg:text-cha/4">{{ tea.Name }}</div>
          <div class="text-desc sm:text-desc/2 md:text-desc/3 lg:text-desc/4">{{ tea.Description }}</div>
          <div class="text-desc sm:text-desc/2 md:text-desc/3 lg:text-desc/4">Price: {{ tea.Price }}</div>
          <div class="flex justify-center">
            <button class="w-1/3 mx-3 my-1" (click)="OnBuy()">Buy</button>
            <button class="w-1/3 mx-3 my-1" routerLink="/pu-er">Info</button>
          </div>
        </div>

      </div>
    </div>

    <!-- ADMIN -->
    <div *ngIf="this.UserService.role === 'admin'" class="relative justify-center">
      <img [src]="image" alt="{{ tea.Name }}" class="w-full h-full aspect-square">

      <div class="absolute inset-0 justify-center items-center flex">
        <div class="h-4/5 w-4/5 p-1 opacity-80" style="background-color: {{tea.Color}} ;">
          <button class="absolute h-10 w-10 top-5 right-5"
          (click)="DeleteProduct()" *ngIf="tea.IdProduct!==0">X</button>

          <form [formGroup]="form" (submit)="OnSubmit()"
            class="space-y-1 flex flex-col text-justify justify-between h-full">

            <input type="text" formControlName="name" placeholder="{{tea.Name}}"
              class="text-center text-cha sm:text-cha/2 md:text-cha/3 lg:text-cha/4">

            <textarea formControlName="description" placeholder="{{tea.Description}}"
              class="text-desc sm:text-desc/2 md:text-desc/3 lg:text-desc/4"></textarea>

            <div class="flex items-center content-center text-center p-0 text-desc sm:text-desc/2 md:text-desc/3 lg:text-desc/4">
              <label for="price" class="w-1/2 m-0">Price:</label>
              <input type="number" formControlName="price" placeholder="{{tea.Price}}" class="w-1/2 m-0">
            </div>

            <input type="file" accept="image/*" formControlName="image" (change)="OnChoose($event)">

            <div class="flex items-center content-center text-center p-0 text-desc sm:text-desc/2 md:text-desc/3 lg:text-desc/4">
            <span [style.color]="tea.Color"
                  [cpPosition]="'auto'"
                  [cpPositionOffset]="'50%'"
                  [cpPositionRelativeToArrow]="true"
                  [(colorPicker)]="tea.Color"
                  class="bg-black p-1 border-white border-2"><a class="text-white">COLOR</a></span>
            </div>

            <button *ngIf="tea.IdProduct!==0" type="submit" class="w-1/3 mx-3 my-1 self-center">Submit</button>
            <button *ngIf="tea.IdProduct===0" type="submit" class="w-1/3 mx-3 my-1 self-center">Add</button>
          </form>
        </div>
      </div>
    </div>

    <!-- <input type="text" [(ngModel)]="name" placeholder="Enter name"> -->
  `,
})

export class TeaItemComponent implements OnInit{
  @Input() tea: any;
  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl(''),
    image: new FormControl('')
  });

  image: string = '';

  constructor(public UserService: UserService, private ShoppingService: ShoppingService) {}

  ngOnInit() {
    if(this.tea===undefined){
      this.tea = {
        IdProduct: 0,
        Name: 'New Tea',
        Description: 'Description',
        Price: 0,
        Images: [],
        Color : '#000000'
      };
    }
    else this.image = this.getImageUrl();
  }

  getImageUrl(): string {
    const base64String = this.tea.Images[0];
    let imageUrl = '';
    if(base64String != null) {
      const imageBytes = new Uint8Array(atob(base64String).split('').map(char => char.charCodeAt(0)));
      const blob = new Blob([imageBytes], {type: 'image/jpg'});
      imageUrl = URL.createObjectURL(blob);
    }
    return imageUrl
  }

  OnChoose($event: Event) {
    if ($event.target instanceof HTMLInputElement) {
      const files = ($event.target as HTMLInputElement).files;
      if (files) {
        Array.from(files)?.forEach(file => {
          //to byte[]
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => {
            this.image = reader.result as string;
          };
        })
      }
    }
  }

  // onFileSelected($event: Event) {
  //   if ($event.target instanceof HTMLInputElement) {
  //     const files = ($event.target as HTMLInputElement).files;
  //     if (files) {
  //       Array.from(files)?.forEach(file => {
  //         //to byte[]
  //         const reader = new FileReader();
  //         reader.readAsDataURL(file); // Read the file as Data URL (Base64)
  //         reader.onload = () => {
  //           const base64String = reader.result?.toString().split(',')[1];
  //           // console.log(this.idProductInput.nativeElement.value);
  //           // this.DbService.addPhoto(this.idProductInput.nativeElement.value, base64String as string);
  //         };
  //       });
  //     }
  //   }
  // }

  OnSubmit() {
    console.log(this.form.value);
  }

  OnBuy() {
    console.log('Bought ' + this.tea.Name);
    this.ShoppingService.addToCart({
      IdProduct: this.tea.IdProduct,
      productName: this.tea.Name,
      Quantity: 1,
      price: this.tea.Price
    });
    // console.log(this.tea);

    alert(this.tea.Name + ' added to cart');
  }

  DeleteProduct() {
    
  }
}
