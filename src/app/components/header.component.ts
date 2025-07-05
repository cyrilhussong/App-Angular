import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  template: `
    <header class="header">
      <a routerLink="/" class="logo" aria-label="Accueil">
        <img src="assets/logo.png" alt="Logo Au Petit Village" />
      </a>
      <nav class="nav-menu">
        <a routerLink="/">Accueil</a>
        <a routerLink="/about">À propos</a>
        <a routerLink="/contact">Contact</a>
      </nav>
    </header>
  `,
  styles: [`
    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem 2rem;
      background-color: #151217;
    }
    .logo img {
      height: 50px;
    }
    .nav-menu a {
      color: #FDD90B;
      margin-left: 1.5rem;
      text-decoration: none;
      font-family: 'Bubbleboddy neue', cursive;
      font-weight: bold;
    }
    .nav-menu a:hover {
      color: #DA001E;
    }
  `]
})
export class HeaderComponent {}
