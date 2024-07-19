import { Routes } from '@angular/router';
import { TeaGalleryComponent } from './Components/home/tea-gallery/tea-gallery.component';
import { AdminAddPhotoComponent } from './Components/Admin/admin-add-photo/admin-add-photo.component';
import { PuErComponent } from './Components/Details/pu-er/pu-er.component';
import { LoginComponent } from './Components/Account/login/login.component';
import { RegisterComponent } from './Components/Account/register/register.component';
import { CartComponent } from './Components/cart/cart.component';
import { HomeComponent } from './Components/home/home.component';
import { ConstructionComponent } from './Components/construction/construction.component';
import { UserComponent } from '@components/Account/user/user.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'admin', component: TeaGalleryComponent },
    {path: 'pu-er', component: PuErComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'cart', component: CartComponent},
    {path: 'construction', component: ConstructionComponent},
    {path: 'admin-add-photo', component: AdminAddPhotoComponent},
    {path: 'user', component: UserComponent}
];
