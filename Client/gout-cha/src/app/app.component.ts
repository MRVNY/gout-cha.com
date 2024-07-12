import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { TeaGalleryComponent } from "./Components/tea-gallery/tea-gallery.component";
import { AdminAddPhotoComponent } from './Components/admin-add-photo/admin-add-photo.component';

@Component({
    selector: 'app-root',
    standalone: true,
    //   templateUrl: './app.component.html',
    template: `
    <app-nav-bar/>
    <app-tea-gallery/>
    <app-admin-add-photo/>
    `,
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NavBarComponent, TeaGalleryComponent, AdminAddPhotoComponent]
})
export class AppComponent {
  title = 'gout-cha';
}
