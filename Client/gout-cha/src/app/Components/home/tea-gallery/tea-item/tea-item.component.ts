import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../../../Services/user.service';
import { ReactiveFormsModule, FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { ShoppingService } from '../../../../Services/shopping.service';
import { RouterLink } from '@angular/router';
import { ColorPickerModule } from 'ngx-color-picker';
import { Tea } from '../../../../Models/tea';
import { ProductService } from '../../../../Services/product.service';
import { ImageService } from '../../../../Services/image.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { TeaGalleryComponent } from '../tea-gallery.component';

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
          opacity-0 group-hover:opacity-80 transition-all" style="background-color: {{color}}">
          <div class="text-center cha">{{ tea.ChineseName }}</div>
          <div class="text-center desc">{{ tea.Name }}</div>
          <div class="desc" [innerHTML]="tea.Description"></div>
          <div class="desc">{{ tea.Price }}€/{{tea.Weight}}g</div>
          <div class="flex justify-center">
            <button class="w-1/3 mx-3 my-1" (click)="OnBuy()">Buy</button>
            <button class="w-1/3 mx-3 my-1" routerLink="/pu-er">Info</button>
          </div>
        </div>

      </div>
    </div>

    <!-- ADMIN -->
    <div *ngIf="this.UserService.role === 'admin'" class="relative justify-center">
      <img [src]="image" alt="Photo" class="w-full h-full aspect-square">

      <div class="absolute inset-0 justify-center items-center flex">
        <div class="h-4/5 w-4/5 p-1 opacity-80" style="background-color: {{color}} ;">
          <button class="absolute h-10 w-10 top-5 right-5"
          (click)="DeleteProduct()" *ngIf="tea!==undefined">X</button>

          <form [formGroup]="form" (submit)="OnSubmit()"
            class="space-y-1 flex flex-col text-justify justify-between h-full">
            <!-- CHINESE -->
            <input type="text" formControlName="chinese" placeholder="中文名字"
              class="text-center desc">
            <!-- NAME -->
            <input type="text" formControlName="name" placeholder="Name"
              class="text-center desc">
            <!-- DESCRIPTION -->
            <textarea formControlName="description" placeholder="Description"
              class="desc"></textarea>
            <!-- LINK -->
            <input type="text" formControlName="link" placeholder="Link to info"
              class="desc">
            <div class="flex items-center content-center text-center h-5 p-0 desc">
              <!-- PRICE / WEIGHT -->
              <div class="flex p-0 desc w-2/3 text-center">
                <input type="number" formControlName="price" placeholder="0" class="w-full m-0">
                <label class="w-full m-0">€ / </label>
                <input type="number" formControlName="weight" placeholder="0" class="w-full m-0">
                <label class="w-full m-0">g</label>
              </div>
              <!-- COLOR -->
              <div class="flex items-center content-center text-center p-0 desc h-full">
                <span [style.color]="this.color"
                  [cpPosition]="'auto'"
                  [cpPositionOffset]="'50%'"
                  [cpPositionRelativeToArrow]="true"
                  [(colorPicker)]="this.color"
                  class="bg-black border-white border-2 px-1"><a class="text-white">COLOR</a></span>
              </div>
            </div>
            <!-- IMAGE -->
            <input type="file" accept="image/*" (change)="OnChoose($event)">

            <button *ngIf="this.tea!==undefined" type="submit" class="w-1/3 mx-3 my-1 self-center">Submit</button>
            <button *ngIf="this.tea===undefined" type="submit" class="w-1/3 mx-3 my-1 self-center">Add</button>
          </form>
        </div>
      </div>
    </div>

    <!-- <input type="text" [(ngModel)]="name" placeholder="Enter name"> -->
  `,
})

export class TeaItemComponent implements OnInit{
  @Input() tea: any;
  form!: FormGroup;

  image: string = '';
  color: string = '#808080';

  constructor(
    public UserService: UserService, 
    private ShoppingService: ShoppingService, 
    private ProductService: ProductService,
    private ImageService: ImageService,
    private location: Location,
    private router: Router,
    private TeaGalleryComponent: TeaGalleryComponent
  ) {}

  ngOnInit() {
    if(this.tea !== undefined) {
      this.image = this.tea.Images[0];
      this.color = this.tea.Color;
      // this.tea.Description = this.tea.Description.replace(/<br>/g, '\n');
  
      this.form = new FormGroup({
        chinese: new FormControl(this.tea.ChineseName, Validators.required),
        name: new FormControl(this.tea.Name, Validators.required),
        description: new FormControl(this.tea.Description, Validators.required),
        link: new FormControl(this.tea.Link, Validators.required),
        price: new FormControl(this.tea.Price, Validators.required),
        weight: new FormControl(this.tea.Weight, Validators.required),
      });
    }
    else {
      this.form = new FormGroup({
        chinese: new FormControl('', Validators.required),
        name: new FormControl('', Validators.required),
        description: new FormControl('', Validators.required),
        link: new FormControl('', Validators.required),
        price: new FormControl('', Validators.required),
        weight: new FormControl('', Validators.required),
      });
    }
  }
  
  async OnChoose($event: Event) {
    if ($event.target instanceof HTMLInputElement) {
      const files = ($event.target as HTMLInputElement).files;
      if (files) {
        this.image = await this.ImageService.fileToUrl(files[0]);
      }
    }
  }

  OnSubmit() {
    // if required fields are empty
    if(this.form.invalid || this.image == '') {
      alert('Please fill all required fields');
      return
    }
    //add product
    const product = {
      IdProduct: this.tea === undefined ? 0 : this.tea.IdProduct,
      Name: this.form.value.name,
      ChineseName: this.form.value.chinese,
      Description: this.form.value.description,
      Price: this.form.value.price,
      Color: this.color,
      Link: this.form.value.link,
      Weight: this.form.value.weight,
      Type: 'Tea', 
      Origin: 'China'
    };

    if(this.tea === undefined) {
      this.ProductService.addProduct(product).subscribe({
        next: (data) => {
          this.ImageService.addPhoto(data.result[0].IdProduct, this.image).subscribe({
            next: () => {window.location.reload();}
          });
        }
      });
    }
    else {
      this.ProductService.updateProduct(product).subscribe({
        next: () => {
          if (this.image !== this.tea.Images[0]) {
            this.ImageService.deletePhoto(product.IdProduct.toString()).subscribe({
              next: () => {
                this.ImageService.addPhoto(product.IdProduct.toString(), this.image).subscribe({
                  next: () => { window.location.reload(); }
                });
              }
            });
          }
          else { window.location.reload();}
        }
      });



    }
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
    this.ProductService.deleteProduct(this.tea.IdProduct).subscribe({
      next: () => {window.location.reload();}
    });
  }
}
