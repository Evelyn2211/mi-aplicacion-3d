import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './modules/productos/product-detail/product-detail.component';
import { CartComponent } from './modules/carrito/cart/cart.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { RegisterComponent } from './modules/auth/register/register.component';
import { ProductListComponent } from './modules/productos/product-list/product-list.component';
import { HomeComponent } from './modules/home/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'productos', component: ProductListComponent },
  { path: 'producto/:id', component: ProductDetailComponent },
  { path: 'carrito', component: CartComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
  
]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
