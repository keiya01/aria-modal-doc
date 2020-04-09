import {
  LitElement,
  TemplateResult,
  html,
  CSSResult,
  css,
  property,
  customElement,
} from 'lit-element';
import './code-area';
import './round-button';
import { globalCSS } from './global-css';

@customElement('app-contents')
export class AppContents extends LitElement {
  @property({ type: String, attribute: 'content-title' }) title = '';
  @property({ type: String }) link = '';

  static get styles(): CSSResult[] {
    return [
      globalCSS,
      css`
        :host {
          display: block;
        }
        .content-container {
          width: 100%;
          height: 100%;
          padding: 30px 0;
        }
        .title-wrapper {
          width: 100%;
        }
        .title {
          text-decoration: none;
          display: block;
          width: 100%;
          padding: 10px 5px;
          font-size: 3rem;
          color: #000;
          width: 100%;
          border-bottom: 1px solid #ccc;
        }
      `,
    ];
  }

  render(): TemplateResult {
    return html`
      <section class="content-container">
        <h2 id="${this.link}" class="title-wrapper">
          <a class="title" href="#${this.link}">${this.title}</a>
        </h2>
        <slot name="contents"></slot>
      </section>
    `;
  }
}
