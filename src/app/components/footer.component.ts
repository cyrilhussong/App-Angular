import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer">
      <p>Suivez-nous sur les réseaux sociaux :</p>
      <div class="social-icons">
        <a href="https://facebook.com" target="_blank" aria-label="Facebook">
          <img src="assets/facebook.svg" alt="Facebook" />
        </a>
        <a href="https://twitter.com" target="_blank" aria-label="Twitter">
          <img src="assets/twitter.svg" alt="Twitter" />
        </a>
        <a href="https://instagram.com" target="_blank" aria-label="Instagram">
          <img src="assets/instagram.svg" alt="Instagram" />
        </a>
      </div>
      <p class="copyright">&copy; 2025 Au Petit Village</p>
    </footer>
  `,
  styles: [`
    .footer {
      background-color: #151217;
      color: #F9D0A3;
      text-align: center;
      padding: 1rem;
      font-family: 'Comfortaa', sans-serif;
    }
    .social-icons {
      margin: 0.5rem 0;
    }
    .social-icons a img {
      width: 30px;
      margin: 0 0.5rem;
      vertical-align: middle;
      filter: brightness(0) invert(1);
      transition: filter 0.3s;
    }
    .social-icons a:hover img {
      filter: brightness(0) invert(0.6);
    }
  `]
})
export class FooterComponent {}
