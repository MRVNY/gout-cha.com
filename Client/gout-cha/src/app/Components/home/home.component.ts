import { Component } from '@angular/core';
import { TeaGalleryComponent } from "./tea-gallery/tea-gallery.component";
import { WelcomeComponent } from "./welcome/welcome.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TeaGalleryComponent, WelcomeComponent],
  template: `
    <!-- <app-welcome/> -->
    <app-tea-gallery>
  `,
  styles: ``
})
export class HomeComponent {

}
