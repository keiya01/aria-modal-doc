import { html, LitElement, TemplateResult, css, CSSResult } from 'lit-element';
import { postData } from '../constants/postData';
import 'aria-modal';
import './app-header';
import './app-contents';
import './demo-contents';
import './normal-modal';
import './animation-modal';
import './custom-animation-modal';
import './app-contents';
import '../css/app.css';
import '../css/reset.css';
import { globalCSS } from './global-css';

class AppPage extends LitElement {
  static get styles(): CSSResult[] {
    return [
      globalCSS,
      css`
        :host {
          display: block;
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
        .contents {
          margin-top: 30px;
        }
        .description {
          font-size: 1.6rem;
          color: #333;
        }
        .list {
          padding-left: 25px;
        }
        .list > li {
          padding: 10px 0;
        }
        .code {
          background-color: #eee;
          padding: 3px 5px;
          border-radius: 3px;
        }
      `,
    ];
  }

  render(): TemplateResult {
    return html`
      <app-header></app-header>
      <main>
        <div class="container">
          <article class="body" itemprop="text">
            <app-contents title="About">
              <div slot="contents" class="contents">
                <p class="description">
                  aria-modal that is a fully accessible is built according to
                  <a
                    href="https://www.w3.org/TR/wai-aria-practices/#dialog_modal"
                    >WAI-ARIA Authoring Practices</a
                  >. And it provide the only simple features. It makes be easy
                  to implement accessible modal. <br />
                  If you want to use polyfill, you can use
                  <a
                    href="https://github.com/webcomponents/polyfills/tree/master/packages/webcomponentsjs"
                    >@webcomponents/webcomponentsjs</a
                  >.
                </p>
              </div>
            </app-contents>
            <app-contents title="Features">
              <ul slot="contents" class="list contents description">
                <li>
                  Focus is moved to
                  <span class="code">first-focus</span> element.
                  <span class="code">Tab</span> and
                  <span class="code">Shift+Tab</span> keys will cycle through
                  the modal's focusable nodes.
                </li>
                <li><span class="code">ESC</span> key closes the modal.</li>
                <li>
                  Scrolling is frozen on the
                  <span class="code">document.body</span>.
                </li>
                <li>
                  When the modal closes, focus returns to the element that was
                  focused before the modal are shown.
                </li>
                <li>
                  The dialog element has an ARIA role of dialog by default(You
                  can change <span class="code">role</span>).
                </li>
                <li>
                  The dialog element must has either
                  <span class="code">aria-label</span> or
                  <span class="code">aria-labelledby</span>.
                </li>
                <li>
                  If clicking the backdrop, the modal is closed.
                </li>
                <li>
                  If
                  <span class="code">animation</span>
                  property is <span class="code">true</span>, the modal can use
                  the fade-in(out) animation.
                </li>
              </ul>
            </app-contents>
            ${postData.map(
              (data) => html`
                <app-contents title=${data.title}>
                  <demo-contents
                    slot="contents"
                    modalID=${data.modalID}
                    codeList=${JSON.stringify(data.codeList)}
                  >
                  </demo-contents>
                </app-contents>
              `
            )}
          </article>
        </div>
      </main>
    `;
  }
}

window.customElements.define('app-page', AppPage);
