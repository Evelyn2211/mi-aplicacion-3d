import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  products = [
    {
      id: 1,
      name: 'Producto 1',
      price: 100,
      image: 'assets/16.jpg'  // Aquí se asigna la misma imagen para todos
    },
    {
      id: 2,
      name: 'Producto 2',
      price: 150,
      image: 'assets/15.jpg'
    },
    {
      id: 3,
      name: 'Producto 3',
      price: 200,
      image: 'assets/17.jpg'
    },
    {
      id: 4,
      name: 'Producto 4',
      price: 250,
      image: 'assets/18.jpg'
    },
    {
      id: 5,
      name: 'Producto 5',
      price: 300,
      image: 'assets/foto6.jpg'
    },
    {
      id: 3,
      name: 'Producto 3',
      price: 200,
      image: 'assets/foto7.jpg'
    },
    {
      id: 4,
      name: 'Producto 4',
      price: 250,
      image: 'assets/foto8.jpg'
    },
    {
      id: 5,
      name: 'Producto 5',
      price: 300,
      image: 'assets/foto9.jpg'
    },
    {
      id: 3,
      name: 'Producto 3',
      price: 200,
      image: 'assets/foto10.jpg'
    },
    {
      id: 4,
      name: 'Producto 4',
      price: 250,
      image: 'assets/foto11.jpg'
    },
    {
      id: 5,
      name: 'Producto 5',
      price: 300,
      image: 'assets/foto12.jpg'
    },
    {
      id: 3,
      name: 'Producto 3',
      price: 200,
      image: 'assets/foto1.jpg'
    },
    {
      id: 4,
      name: 'Producto 4',
      price: 250,
      image: 'assets/foto1.jpg'
    },
    {
      id: 5,
      name: 'Producto 5',
      price: 300,
      image: 'assets/foto1.jpg'
    },
    {
      id: 5,
      name: 'Producto 5',
      price: 300,
      image: 'assets/foto1.jpg'
    },
    {
      id: 5,
      name: 'Producto 5',
      price: 300,
      image: 'assets/foto1.jpg'
    }
  ];

  constructor() { }

  ngOnInit(): void {
    // Aquí podrías inicializar cualquier dato si fuera necesario
  }
}
