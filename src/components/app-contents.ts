import {
  LitElement,
  TemplateResult,
  html,
  CSSResult,
  css,
  property,
} from 'lit-element';
import './title-anchor.ts';
import './code-area.ts';
import './round-button.ts';

class AppContents extends LitElement {
  @property({ type: String }) title = '';
  @property({ type: String }) code = '';
  @property({ type: String }) modalID = '';

  static get styles(): CSSResult {
    return css`
      .content-container {
        width: 100%;
        height: 100%;
        padding: 30px 0;
      }
      .title {
        font-size: 3rem;
        color: #000;
        width: 100%;
        padding: 10px 5px;
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
    return html`
      <div class="modal">
        <div id="app-contents" class="content-container">
          <title-anchor href="#${this.title}">
            <h2 slot="title" id="${this.title}" class="title">${this.title}</h2>
          </title-anchor>
          <div class="contents">
            <title-anchor href="#${this.title}-Demo">
              <h3 slot="title" class="sub-title">Demo</h3>
            </title-anchor>
            <round-button
              class="button"
              value="open modal"
              @click="${this.handleOnClick}"
            ></round-button>
            <title-anchor href="#${this.title}-Code">
              <h3 slot="title" class="sub-title">Code</h3>
            </title-anchor>
            <code-area code="${this.code}"></code-area>
          </div>
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
