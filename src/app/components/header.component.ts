import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav class="navbar">
      <a routerLink="/" routerLinkActive="active" class="logo">Au Petit Village</a>
      <a routerLink="/" routerLinkActive="active">Accueil</a>
      <a routerLink="/about" routerLinkActive="active">À propos</a>
      <a routerLink="/contact" routerLinkActive="active">Contact</a>
    </nav>
  `,
  styles: [`
    .navbar {
      background-color: #FDD90B;
      padding: 1rem;
      display: flex;
      gap: 1.5rem;
      align-items: center;
      font-family: 'Comfortaa', sans-serif;
    }
    a {
      text-decoration: none;
      color: #DA001E;
      font-weight: bold;
    }
    a.logo {
      font-family: 'Bubbleboddy neue', cursive;
      font-size: 1.5rem;
      flex-grow: 1;
    }
    a.active {
      text-decoration: underline;
    }
  `]
})
export class HeaderComponent {}
