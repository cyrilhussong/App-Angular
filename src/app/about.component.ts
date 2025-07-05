import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="about">
      <h1>À propos de Au Petit Village</h1>
      <p>Nous créons des figurines artisanales inspirées des célèbres aventures d'Astérix et Obélix.</p>
      <p>Notre boutique compte actuellement {{ products.length }} produits uniques.</p>
    </section>
  `,
  styles: [`
    .about {
      font-family: 'Comfortaa', sans-serif;
      color: #DA001E;
      padding: 1rem;
    }
  `]
})
export class AboutComponent {
  products: any[] = [];

  constructor(private productsService: ProductsService) {
    this.products = this.productsService.getAll();
  }
}

