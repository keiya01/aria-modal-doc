import {
  LitElement,
  TemplateResult,
  html,
  CSSResult,
  css,
  property,
} from 'lit-element';
import './code-area';
import './round-button';
import { globalCSS } from './global-css';

class AppContents extends LitElement {
  @property({ type: String }) title = '';

  static get styles(): CSSResult[] {
    return [
      globalCSS,
      css`
        .content-container {
          width: 100%;
          height: 100%;
          padding: 30px 0;
        }
        a {
          text-decoration: none;
          display: block;
          width: 100%;
          padding: 10px 5px;
        }
        a:focus {
          outline-color: var(--sub-color);
        }
        .title-wrapper {
          width: 100%;
        }
        .title {
          font-size: 3rem;
          color: #000;
          width: 100%;
          border-bottom: 1px solid #ccc;
        }
      `,
    ];
  }

  render(): TemplateResult {
    const link = this.title.split(' ').join('-');

    return html`
      <section class="content-container">
        <h2 id="${link}" class="title-wrapper">
          <a class="title" href="#${link}">${this.title}</a>
        </h2>
        <slot name="contents"></slot>
      </section>
    `;
  }
}

window.customElements.define('app-contents', AppContents);
