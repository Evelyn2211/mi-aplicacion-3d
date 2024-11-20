import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Módulos creados
import { SharedModule } from './shared/shared.module';
import { ProductosModule } from './modules/productos/productos.module';
import { CarritoModule } from './modules/carrito/carrito.module';
import { AuthModule } from './modules/auth/auth.module';


// Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    ProductosModule,
    CarritoModule,
    AuthModule,
    FormsModule
  
    // Angular Material Modules
   
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
