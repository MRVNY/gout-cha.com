import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '@services/user.service';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { ShoppingService } from '@services/shopping.service';
import { RouterLink } from '@angular/router';
import { ColorPickerModule } from 'ngx-color-picker';
import { ProductService } from '@services/product.service';
import { ImageService } from '@services/image.service';
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
          <div class="desc" [innerHTML]="tea.Description.replace('\n', '<br>')"></div>
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
      <img [src]="this.image" alt="Photo" class="w-full h-full aspect-square">

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
            <textarea formControlName="description" placeholder="Description."
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
              <div class="flex items-center content-center text-center p-0 desc h-full z-10">
                <span [style.color]="this.color"
                  [cpPosition]="'top-left'"
                  [cpPositionRelativeToArrow]="true"
                  [(colorPicker)]="this.color"
                  class="bg-black border-white border-2 px-1 z-10"><a class="text-white z-10">COLOR</a></span>
              </div>
            </div>
            <!-- IMAGE -->
            <input type="file" accept="image/*" (change)="OnChoose($event)" #imageInput>

            <button *ngIf="this.tea!==undefined" type="submit" class="w-1/3 mx-3 my-1 self-center">Submit</button>
            <button *ngIf="this.tea===undefined" type="submit" class="w-1/3 mx-3 my-1 self-center">Add</button>
            <!-- <button type="button" (click)="Reload()" class="w-1/3 mx-3 my-1 self-center">Reload</button> -->
          </form>
        </div>
      </div>
    </div>

    <!-- <input type="text" [(ngModel)]="name" placeholder="Enter name"> -->
  `,
})

export class TeaItemComponent implements OnInit{
  @ViewChild('imageInput') imageInput!: ElementRef;
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
    }
    this.form = new FormGroup({
      chinese: new FormControl(this.tea === undefined ? '' : this.tea.ChineseName, Validators.required),
      name: new FormControl(this.tea === undefined ? '' : this.tea.Name, Validators.required),
      description: new FormControl(this.tea === undefined ? '' : this.tea.Description, Validators.required),
      price: new FormControl(this.tea === undefined ? '' : this.tea.Price, Validators.required),
      link: new FormControl(this.tea === undefined ? '' : this.tea.Link, Validators.required),
      weight: new FormControl(this.tea === undefined ? '' : this.tea.Weight, Validators.required),
    });
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
            next: () => {this.Reload()}
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
                  next: () => { this.router.navigate([this.router.url]) }
                });
              }
            });
          }
          else { this.Reload()}
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
      next: () => {this.Reload()}
    });
  }

  Reload() {
    // this.location.go(this.location.path());
    // this.router.navigate([this.router.url])
    this.tea = undefined;
    this.image = "assets/tea.jpg";
    this.imageInput.nativeElement.files = null;
    console.log(this.image);
    this.color = '#808080';
    this.form.reset();
    this.ngOnInit();
    this.TeaGalleryComponent.ngOnInit();
  }
}
