import { Routes } from '@angular/router';
import { TeaGalleryComponent } from './Components/tea-gallery/tea-gallery.component';
import { AdminAddPhotoComponent } from './Components/admin-add-photo/admin-add-photo.component';
import { PuErComponent } from './Components/Details/pu-er/pu-er.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: TeaGalleryComponent},
    {path: 'admin', component: AdminAddPhotoComponent},
    {path: 'pu-er', component: PuErComponent}
];
