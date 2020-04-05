import {
  LitElement,
  TemplateResult,
  html,
  CSSResult,
  css,
  property,
} from 'lit-element';
import './code-area.ts';
import './round-button.ts';
import { Code } from '../constants/postData';

class AppContents extends LitElement {
  @property({ type: String }) title = '';
  @property({ type: Object }) codeList: Code[] = [];
  @property({ type: String }) modalID = '';

  static get styles(): CSSResult {
    return css`
      * {
        box-sizing: border-box;
      }
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
      .contents {
        margin-top: 20px;
      }
      .sub-title {
        font-size: 2rem;
        color: #333;
        padding: 10px 5px;
        margin: 30px 0 20px 0;
      }
    `;
  }

  render(): TemplateResult {
    const link = this.title.split(' ').join('-');

    return html`
      <div class="content-container">
        <h2 id="${link}" class="title-wrapper">
          <a class="title" href="#${link}">${this.title}</a>
        </h2>
        <div class="contents">
          <h3 id="${link}" class="title-wrapper">
            <a class="sub-title" href="#${link}-Demo">Demo</a>
          </h3>
          <round-button
            class="button"
            value="open modal"
            @click="${this.handleOnClick}"
          ></round-button>
          <h3 id="${link}" class="title-wrapper">
            <a class="sub-title" href="#${link}-Code">Code</a>
          </h3>
          ${this.codeList.map(
            (code) =>
              html`
                <code-area code=${code.value} lang=${code.lang}></code-area>
              `
          )}
        </div>
      </div>
    `;
  }

  handleOnClick(): void {
    const modal = document.getElementById(this.modalID);
    modal?.setAttribute('open', 'true');
  }
}

window.customElements.define('app-contents', AppContents);
