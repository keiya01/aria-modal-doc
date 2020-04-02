import { html, LitElement, TemplateResult } from 'lit-element';
// import './global-styles.ts';
import './app-header.ts';
import '../css/app.css';
import '../css/reset.css';

class AppPage extends LitElement {
  render(): TemplateResult {
    return html`
      <style>
        :host {
          height: 100%;
          width: 100%;
          background-color: #fff;
        }
      </style>
      <app-header></app-header>
      <main>
        <section>
          <h2>Normal</h2>
        </section>
      </main>
    `;
  }
}

window.customElements.define('app-page', AppPage);
