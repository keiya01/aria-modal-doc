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

@customElement('normal-modal')
export class NormalModal extends LitElement {
  @property({ type: String, attribute: 'modalid' }) modalID = '';

  static get styles(): CSSResult[] {
    return [
      globalCSS,
      css`
        :host {
          display: block;
          flex-direction: column;
          background-color: #fff;
          border-radius: 5px;
          padding: 30px 20px;
          align-items: center;
          text-align: center;
          margin: auto;
          width: 90%;
          max-width: 500px;
        }

        .modal {
          display: none;
        }

        .modal.active {
          display: block;
        }

        .normal-modal-title {
          font-size: 2rem;
          color: #555;
        }

        .normal-modal-button-wrapper {
          display: flex;
          justify-content: center;
          margin-top: 70px;
        }

        .normal-modal-button {
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

        .normal-modal-ok-button {
          background-color: green;
          border-color: green;
        }

        .normal-modal-cancel-button {
          background-color: red;
          border-color: red;
        }
      `,
    ];
  }

  render(): TemplateResult {
    return html`
      <div class="modal">
        <h1 id="normal-modal-title" class="normal-modal-title">Normal Modal</h1>
        <div class="normal-modal-button-wrapper">
          <button
            type="button"
            class="normal-modal-button normal-modal-ok-button"
            id="first"
            @click="${this.handleOnClose}"
          >
            OK
          </button>
          <button
            type="button"
            class="normal-modal-button normal-modal-cancel-button"
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
