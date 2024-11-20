import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{
 // Productos de ejemplo en el carrito
 cartProducts = [
  {
    id: 1,
    name: 'Producto 1',
    price: 100,
    quantity: 1,
    image: 'assets/foto2.jpg'
  },
  {
    id: 2,
    name: 'Producto 2',
    price: 150,
    quantity: 2,
    image: 'assets/foto6.jpg'
  }
];

constructor() { }

ngOnInit(): void {
}

// Método para eliminar producto
removeProduct(productId: number) {
  this.cartProducts = this.cartProducts.filter(product => product.id !== productId);
}

// Método para actualizar cantidad
updateQuantity(product: any, quantity: number) {
  if (quantity > 0) {
    product.quantity = quantity;
  }
}

// Calcular subtotal
getSubtotal(product: any) {
  return product.price * product.quantity;
}

// Calcular total
getTotal() {
  return this.cartProducts.reduce((total: number, product: any) => total + this.getSubtotal(product), 0);
}
}
