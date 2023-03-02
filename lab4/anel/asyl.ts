import { Component } from '@angular/core';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description of product 1',
      price: 10.99,
      image: 'product1.jpg'
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description of product 2',
      price: 15.99,
      image: 'product2.jpg'
    },
    // Add more products here
  ];
}
