import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TeaGalleryComponent } from "./tea-gallery/tea-gallery.component";

@Component({
    selector: 'app-root',
    standalone: true,
    //   templateUrl: './app.component.html',
    template: `<app-nav-bar/>
    <app-tea-gallery/>`,
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NavBarComponent, TeaGalleryComponent]
})
export class AppComponent {
  title = 'gout-cha';
}
