import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  template: `
    <header class="header">
      <a routerLink="/" class="logo" aria-label="Accueil">
        <img src="/Logo_au petit village.jpg" alt="Logo Au Petit Village" />
        <span class="logo-text">Au Petit Village</span>
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
    .logo {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      text-decoration: none;
    }
    .logo img {
      height: 50px;
      width: 50px;
    }
    .logo-text {
      color: #FDD90B;
      font-family: 'Bubbleboddy neue', cursive;
      font-weight: bold;
      font-size: 1.2rem;
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
