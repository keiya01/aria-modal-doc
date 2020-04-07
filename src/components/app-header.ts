import {
  html,
  LitElement,
  TemplateResult,
  css,
  CSSResult,
  customElement,
} from 'lit-element';
import { globalCSS } from './global-css';

@customElement('app-header')
export class AppHeader extends LitElement {
  static get styles(): CSSResult[] {
    return [
      globalCSS,
      css`
        :host {
          display: block;
          height: 60px;
          width: 100%;
          background-color: #fff;
        }
        header {
          height: 100%;
          width: 100%;
          display: flex;
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
        <h1 aria-label="aria-modal">&lt;aria-modal&gt;</h1>
      </header>
    `;
  }
}
