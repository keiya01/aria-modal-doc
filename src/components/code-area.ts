import {
  LitElement,
  html,
  TemplateResult,
  css,
  CSSResult,
  property,
} from 'lit-element';

class CodeArea extends LitElement {
  @property({ type: String }) code = '';

  static get styles(): CSSResult {
    return css`
      div {
        background-color: #eee;
        border-radius: 5px;
        padding: 5px 15px;
      }
      code {
        font-size: 1.6rem;
      }
    `;
  }

  render(): TemplateResult {
    return html`
      <div>
        <pre>${this.multipleCode()}</pre>
      </div>
    `;
  }

  multipleCode(): TemplateResult[] {
    return this.code.split('\\n').map((str) => html`<code>${str}</code>`);
  }
}

window.customElements.define('code-area', CodeArea);
