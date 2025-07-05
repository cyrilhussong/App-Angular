import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ProductsService } from '../services/products.service';
import { SortByPricePipe } from '../pipes/sort-by-price.pipe';
import { FilterByNamePipe } from '../pipes/filter-by-name.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, SortByPricePipe, FilterByNamePipe],
  template: `
    <section class="intro">
      <h1>Bienvenue chez Au Petit Village</h1>
      <p>Découvrez nos figurines artisanales inspirées d'Astérix et Obélix !</p>
    </section>

    <section class="controls">
      <input [(ngModel)]="searchTerm" placeholder="Rechercher un produit..." />
      <select [(ngModel)]="sortOrder" aria-label="Trier par prix">
        <option value="asc">Prix croissant</option>
        <option value="desc">Prix décroissant</option>
      </select>
    </section>

    <ul class="product-list">
      <li *ngFor="let product of products | filterByName:searchTerm | sortByPrice:sortOrder">
        <a [routerLink]="['/product', product.id]">
          {{ product.name }} - {{ product.price | currency:'EUR':'symbol':'1.2-2' }}
        </a>
      </li>
    </ul>
  `,
  styles: [`
    /* Ajoute ici tes styles si besoin */
  `]
})
export class HomeComponent implements OnInit {
  products: any[] = [];
  searchTerm = '';
  sortOrder: 'asc' | 'desc' = 'asc';

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.products = this.productService.getAll();
  }
}
