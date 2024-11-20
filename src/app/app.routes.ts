import { Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/login/login.component';
import { RegisterComponent } from './modules/auth/register/register.component';
import { CartComponent } from './modules/carrito/cart/cart.component';
import { HomeComponent } from './modules/home/home/home.component';
import { ProductDetailComponent } from './modules/productos/product-detail/product-detail.component';
import { ProductListComponent } from './modules/productos/product-list/product-list.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    {path: 'con',component: ContactComponent},
    { path: 'productos', component: ProductListComponent },
    { path: 'producto/:id', component: ProductDetailComponent },
    { path: 'carrito', component: CartComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent }
];
