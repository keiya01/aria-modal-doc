import { html, LitElement, TemplateResult, css, CSSResult } from 'lit-element';

class AppHeader extends LitElement {
  static get styles(): CSSResult {
    return css`
      header {
        display: flex;
        background-color: #fff;
        height: 60px;
        width: 100%;
        border-bottom: 1px solid #ddd;
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
    `;
  }

  render(): TemplateResult {
    return html`
      <header>
        <h1>web-components-aria-modal</h1>
      </header>
    `;
  }
}

window.customElements.define('app-header', AppHeader);
