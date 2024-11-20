import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarritoRoutingModule } from './carrito-routing.module';
import { FormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [CartComponent],
  imports: [
    CommonModule,
    CarritoRoutingModule,
    FormsModule
  ]
})
export class CarritoModule { }
