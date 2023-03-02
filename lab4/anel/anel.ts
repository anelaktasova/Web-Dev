import { Component } from '@angular/core';

interface Product {
  image: string;
  name: string;
  description: string;
  rating: number;
  url: string;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: Product[] = [
    {
      image: 'product1.jpg',
      name: 'Product 1',
      description: 'Description of product 1',
      rating: 4.5,
      url: 'https://kaspi.kz/product1'
    },
    {
      image: 'product2.jpg',
      name: 'Product 2',
      description: 'Description of product 2',
      rating: 4.2,
      url: 'https://kaspi.kz/product2'
    },
    // Add more products here
  ];
}
