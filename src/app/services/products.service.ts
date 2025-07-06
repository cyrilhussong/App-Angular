import { Injectable } from '@angular/core';
import { Style } from 'node:util';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  private products = [
    {
      id: 1,
      name: 'Astérix le Gaulois',
      price: 29.99,
      image: '/asterix1.jpg',
      description: 'Figurine artisanale d\'Astérix, fabriquée à la main.'
    },
    {
      id: 2,
      name: 'Obélix et son menhir',
      price: 39.99,
      image: '/obelix.jpg',
      description: 'Figurine d\'Obélix avec son célèbre menhir.'
    },
    {
      id: 3,
      name: 'Idéfix, le chien fidèle',
      price: 19.99,
      image: '/idefix.jpg',
      description: 'Figurine d\'Idéfix, le fidèle compagnon.'
    },
    
  ];

  getAll() {
    return this.products;
  }

  getById(id: number) {
    return this.products.find(p => p.id === id);
  }
}
