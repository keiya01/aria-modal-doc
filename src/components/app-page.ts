import { html, LitElement, TemplateResult, css, CSSResult } from 'lit-element';
import { postData } from '../constants/postData';
import 'aria-modal';
import './app-header';
import './normal-modal';
import './app-contents';
import '../css/app.css';
import '../css/reset.css';

class AppPage extends LitElement {
  static get styles(): CSSResult {
    return css`
      :host {
        height: 100%;
        width: 100%;
        background-color: #fff;
      }
      .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 100%;
        padding: 30px 0;
      }
      .body {
        width: 90%;
        max-width: 600px;
        height: 100%;
      }
    `;
  }

  render(): TemplateResult {
    return html`
      <app-header></app-header>
      <main>
        <div class="container">
          <article class="body" itemprop="text">
            ${postData.map(
              (data) => html`
                <app-contents
                  title=${data.title}
                  modalID=${data.modalID}
                  codeList=${JSON.stringify(data.codeList)}
                ></app-contents>
              `
            )}
          </article>
        </div>
      </main>
    `;
  }
}

window.customElements.define('app-page', AppPage);
