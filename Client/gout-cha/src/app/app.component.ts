import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { TeaGalleryComponent } from "./Components/tea-gallery/tea-gallery.component";
import { AdminAddPhotoComponent } from './Components/Admin/admin-add-photo/admin-add-photo.component';

@Component({
    selector: 'app-root',
    standalone: true,
    //   templateUrl: './app.component.html',
    template: `
    <div class="min-h-screen flex flex-col justify-between">
      <div> 
        <app-nav-bar class="capitalize"/>
        <router-outlet></router-outlet>
      </div>
      <app-footer class="capitalize"/>
    </div>
    `,
    imports: [RouterOutlet, NavBarComponent, TeaGalleryComponent, AdminAddPhotoComponent, FooterComponent]
})
export class AppComponent {
  title = 'gout-cha';
}
