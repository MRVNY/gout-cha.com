import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tea-item',
  standalone: true,
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

export class TeaItemComponent implements OnInit{
  @Input() tea: any;

  name: string = '';
  image: string = '';
  description: string = '';

  constructor() {}

  ngOnInit() {
    // console.log(this.tea);
    this.name = this.tea.Name;
    this.image = this.getImageUrl();
    this.description = this.tea.Description;
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
}
