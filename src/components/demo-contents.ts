import {
  LitElement,
  TemplateResult,
  html,
  property,
  CSSResult,
  css,
  customElement,
} from 'lit-element';
import { Code } from '../constants/postData';
import { globalCSS } from './global-css';

@customElement('demo-contents')
export class DemoContents extends LitElement {
  @property({ type: String }) link = '';
  @property({ type: String, attribute: 'modalid' }) modalID = '';
  @property({ type: Object, attribute: 'code-list' }) codeList: Code[] = [];

  static get styles(): CSSResult[] {
    return [
      globalCSS,
      css`
        :host {
          display: block;
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
        .contents {
          margin-top: 20px;
        }
        .sub-title {
          font-size: 2rem;
          color: #333;
          padding: 10px 5px;
          margin: 30px 0 20px 0;
        }
      `,
    ];
  }

  render(): TemplateResult {
    return html`
      <div class="contents">
        <h3 id="${this.link}-Demo" class="title-wrapper">
          <a class="sub-title" href="#${this.link}-Demo">Demo</a>
        </h3>
        <round-button
          class="button"
          value="open modal"
          @click="${this.handleOnClick}"
        ></round-button>
        <h3 id="${this.link}-Code" class="title-wrapper">
          <a class="sub-title" href="#${this.link}-Code">Code</a>
        </h3>
        ${this.codeList.map(
          (code) =>
            html` <code-area code=${code.value} lang=${code.lang}></code-area> `
        )}
      </div>
    `;
  }

  handleOnClick(): void {
    const modal = document.getElementById(this.modalID);
    modal?.setAttribute('open', 'true');
  }
}
