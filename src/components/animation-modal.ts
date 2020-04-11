import {
  LitElement,
  TemplateResult,
  html,
  css,
  CSSResult,
  property,
  customElement,
} from 'lit-element';
import { globalCSS } from './global-css';

@customElement('animation-modal')
export class AnimationModal extends LitElement {
  @property({ type: String, attribute: 'modalid' }) modalID = '';

  static get styles(): CSSResult[] {
    return [
      globalCSS,
      css`
        :host {
          display: block;
          margin: auto;
          width: 90%;
          max-width: 500px;
        }

        .modal {
          display: none;
          flex-direction: column;
          background-color: #fff;
          border-radius: 5px;
          padding: 30px 20px;
          align-items: center;
          text-align: center;
          margin: 0 auto;
          width: 100%;
        }

        .modal.active {
          display: block;
        }

        .modal-title {
          font-size: 2rem;
          color: #555;
        }

        .button-wrapper {
          display: flex;
          justify-content: center;
          margin-top: 70px;
        }

        .button {
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 5px;
          width: 130px;
          height: 40px;
          margin: 0 10px;
          font-size: 1.6rem;
          color: #fff;
          cursor: pointer;
        }

        .ok-button {
          background-color: green;
          border-color: green;
        }

        .cancel-button {
          background-color: red;
          border-color: red;
        }
      `,
    ];
  }

  render(): TemplateResult {
    return html`
      <div class="modal" role="dialog" aria-labelledby="modal-title">
        <h1 id="modal-title" class="modal-title">
          Animation Modal
        </h1>
        <div class="button-wrapper">
          <button
            type="button"
            class="button ok-button"
            id="first"
            @click="${this.handleOnClose}"
          >
            OK
          </button>
          <button
            type="button"
            class="button cancel-button"
            @click="${this.handleOnClose}"
          >
            Cancel
          </button>
        </div>
      </div>
    `;
  }

  firstFocus(): HTMLElement {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.shadowRoot!.getElementById('first')!;
  }

  handleOnClose(): void {
    const modal = document.getElementById(this.modalID);
    if (modal) {
      modal.setAttribute('open', 'false');
    }
  }
}
