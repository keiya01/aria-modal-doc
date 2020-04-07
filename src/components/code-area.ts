import {
  LitElement,
  html,
  TemplateResult,
  css,
  CSSResult,
  property,
} from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import Prism from 'prismjs';
import { globalCSS } from './global-css';

class CodeArea extends LitElement {
  @property({ type: String }) code = '';
  @property({ type: String }) lang = '';

  static get styles(): CSSResult[] {
    return [
      globalCSS,
      css`
        :host {
          display: block;
        }
        pre {
          width: 100%;
          overflow-x: scroll;
          background-color: #eee;
          border-radius: 5px;
          padding: 0 20px;
        }
        code {
          color: #333;
          font-size: 1.6rem;
        }
        /* common */
        .token.comment {
          color: #999;
        }
        .token.punctuation {
          color: #888;
        }
        .token.operator {
          color: #999;
        }
        /* JavaScript */
        .token.string {
          color: #669900;
        }
        .token.keyword {
          color: #0077aa;
        }
        .token.class-name {
          color: #00aa4a;
        }
        .token.function {
          color: #d49b00;
        }
        /* HTML */
        .token.tag {
          color: #0077aa;
        }
        .token.attr-name {
          color: #669900;
        }
        .token.attr-value {
          color: #996600;
        }
        /* CSS */
        .token.selector {
          color: #669900;
        }
        .token.property {
          color: #990055;
        }
      `,
    ];
  }

  render(): TemplateResult {
    const template = Prism.highlight(
      this.code,
      Prism.languages[this.lang],
      this.lang
    );

    return html`<pre><code>${unsafeHTML(template)}</code></pre>`;
  }

  multipleCode(): TemplateResult[] {
    return this.code.split('\\n').map((str) => html`<span>${str}</span>`);
  }
}

window.customElements.define('code-area', CodeArea);
