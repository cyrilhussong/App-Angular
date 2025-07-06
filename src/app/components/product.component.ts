import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ng-container *ngIf="product; else notFound">
      <h2>{{ product.name }}</h2>
      <img [src]="product.image" alt="{{ product.name }}" class="product-image"/>
      <p>Prix : {{ product.price | currency:'EUR':'symbol':'1.2-2' }}</p>
      <p>{{ product.description }}</p>
    </ng-container>
    <ng-template #notFound>
      <p>Produit non trouvé.</p>
    </ng-template>
  `,
  styles: [`
    h2 {
  font-family: 'Bubbleboddy neue', cursive;
  color: #DA001E;
}

.product-container {
  text-align: center; /* Centrer tout le contenu */
}

.product-image {
  max-width: 300px;
  display: block;
  margin: 1rem auto; /* Centrage horizontal */
}

p {
  font-family: 'Comfortaa', sans-serif;
  color: #333;
}

  `]
})
export class ProductComponent {
  product: any | undefined;

  constructor(private route: ActivatedRoute, private service: ProductsService) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.service.getById(id);
  }
}
