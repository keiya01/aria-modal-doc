import {
  LitElement,
  CSSResult,
  property,
  css,
  TemplateResult,
  html,
} from 'lit-element';

class TitleAnchor extends LitElement {
  @property({ type: String }) href = '';

  static get styles(): CSSResult {
    return css`
      a {
        text-decoration: none;
      }
      a:focus {
        outline-color: var(--sub-color);
      }
    `;
  }

  render(): TemplateResult {
    return html`
      <a class="link" href="${this.href}">
        <slot name="title"></slot>
      </a>
    `;
  }
}

window.customElements.define('title-anchor', TitleAnchor);
