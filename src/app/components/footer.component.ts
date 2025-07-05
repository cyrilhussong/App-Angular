import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer">
      <p>Suivez-nous :</p>
      <div class="socials">
        <a href="https://facebook.com" target="_blank" rel="noopener">
          <img src="assets/facebook.svg" alt="Facebook" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener">
          <img src="assets/twitter.svg" alt="Twitter" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener">
          <img src="assets/instagram.svg" alt="Instagram" />
        </a>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background-color: #F9D0A3;
      padding: 1rem;
      text-align: center;
      font-family: 'Comfortaa', sans-serif;
      color: #DA001E;
    }
    .socials {
      margin-top: 0.5rem;
      display: flex;
      justify-content: center;
      gap: 1rem;
    }
    .socials img {
      width: 24px;
      height: 24px;
    }
  `]
})
export class FooterComponent {}
