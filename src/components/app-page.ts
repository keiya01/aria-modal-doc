import { html, LitElement, TemplateResult } from 'lit-element';
import '../css/app.css';
import '../css/reset.css';

class AppPage extends LitElement {
  render(): TemplateResult {
    return html`
      <div>
        <h1>Hello World</h1>
      </div>
    `;
  }
}

window.customElements.define('app-page', AppPage);
