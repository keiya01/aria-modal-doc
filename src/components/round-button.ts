import {
  html,
  LitElement,
  TemplateResult,
  css,
  property,
  CSSResult,
} from 'lit-element';
import { globalCSS } from './global-css';

class RoundButton extends LitElement {
  @property({ type: String }) value = '';

  static get styles(): CSSResult[] {
    return [
      globalCSS,
      css`
        button {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 40px;
          width: 150px;
          background-color: var(--main-color);
          border: 1px solid var(--main-color);
          color: #fff;
          font-size: 1.6rem;
          font-weight: bold;
          border-radius: 30px;
          transition: opacity ease-in 300ms;
          cursor: pointer;
        }
        button:focus {
          outline: none;
          box-shadow: 0 0 0 3px var(--sub-color);
        }
      `,
    ];
  }

  render(): TemplateResult {
    return html` <button type="button">${this.value}</button> `;
  }
}

window.customElements.define('round-button', RoundButton);
