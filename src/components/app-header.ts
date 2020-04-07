import { html, LitElement, TemplateResult, css, CSSResult } from 'lit-element';
import { globalCSS } from './global-css';

class AppHeader extends LitElement {
  static get styles(): CSSResult[] {
    return [
      globalCSS,
      css`
        :host {
          display: block;
        }
        header {
          display: flex;
          background-color: #fff;
          height: 60px;
          width: 100%;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
          align-items: center;
          justify-content: left;
          padding: 0 20px;
        }
        h1 {
          font-size: 2.5rem;
          color: var(--main-color);
        }
        @media (max-width: 600px) {
          header {
            padding: 0;
            justify-content: center;
          }
        }
        @media (max-width: 500px) {
          h1 {
            font-size: 2rem;
          }
        }
      `,
    ];
  }

  render(): TemplateResult {
    return html`
      <header>
        <h1>&lt;aria-modal&gt;</h1>
      </header>
    `;
  }
}

window.customElements.define('app-header', AppHeader);
