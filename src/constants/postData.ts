export interface Code {
  lang: string;
  value: string;
}

export interface Post {
  title: string;
  modalID: string;
  codeList: Code[];
}

export const postData: Post[] = [
  {
    title: 'HTML',
    modalID: 'aria-normal-modal',
    codeList: [
      {
        lang: 'html',
        value: `
<!-- index.html -->

<style>
  .modal {
    display: none;
    /* other styles */
  }
  
  .active {
    display: block;
    /* other styles */
  }
  
  /* other styles */
</style>

<aria-modal
  id="aria-normal-modal"
  node="modal"
  first-focus="first"
  active="active"
  role="dialog"
  aria-modal="false"
  aria-labelledby="title"
>
  <div slot="modal" id="modal" class="modal">
    <h1 id="title">Hello World</h1>
    <div>
      <button
        type="button"
        id="first"
        onclick="handleOnCloseModal()"
      >
        OK
      </button>
      <button
        type="button"
        onclick="handleOnCloseModal()"
      >
        Cancel
      </button>
    </div>
  </div>
</aria-modal>

<script>
  function handleOnCloseModal() {
    const modal = document.querySelector('aria-normal-modal')
    modal.setAttribute('open', 'false');
  }
</script>

`,
      },
    ],
  },
  {
    title: 'Web Components',
    modalID: 'aria-normal-modal',
    codeList: [
      {
        lang: 'javascript',
        value: `
// normal-modal.js

class NormalModal extends HTMLElement {
  static get template() {
    return \`
      <style>
        .modal {
          display: none;
          /* other styles */
        }

        /* other styles */
      </style>
      <div>
        <h1>Normal Modal</h1>
        <div>
          <button
            type="button"
            id="first"
            onclick="handleOnCloseModal()"
          >
            OK
          </button>
          <button
            type="button"
            onclick="handleOnCloseModal()"
          >
            Cancel
          </button>
        </div>
      </div>
    \`;
  }

  constructor() {
    super();

    const template = document.createElement('template');
    template.innerHTML = NormalModal.template;

    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(template.content.cloneNode(true));
  }

  firstFocus() {
    return this.shadowRoot.getElementById('first');
  }
}

`,
      },
      {
        lang: 'html',
        value: `
<!-- index.html -->

<aria-modal
  id="aria-normal-modal"
  node="normal-modal"
  active="active"
  shadow="true"
  aria-label="Normal Modal"
  role="dialog"
  aria-modal="false"
>
  <normal-modal
    id="normal-modal"
    modalID="aria-normal-modal"
    slot="modal"
  >
  </normal-modal>
</aria-modal>

`,
      },
    ],
  },
  {
    title: 'Animation',
    modalID: 'aria-animation-modal',
    codeList: [
      {
        lang: 'html',
        value: `
<!-- index.html -->

<aria-modal
  id="aria-animation-modal"
  node="animation-modal"
  active="active"
  shadow="true"
  animation="true"
  aria-label="Animation Modal"
  role="dialog"
  aria-modal="false"
>
  <!-- element -->
</aria-modal>

`,
      },
    ],
  },
  {
    title: 'Custom Animation',
    modalID: 'aria-custom-animation-modal',
    codeList: [
      {
        lang: 'html',
        value: `
<!-- index.html -->

<aria-modal
  id="aria-animation-modal"
  node="animation-modal"
  active="active"
  hide="hide"
  shadow="true"
  animation="true"
  aria-label="Animation Modal"
  role="dialog"
  aria-modal="false"
>
  <!-- element -->
</aria-modal>

`,
      },
    ],
  },
];
