import { html, TemplateResult } from 'lit-html';
import '../src/components/round-button.ts';

export default {
  title: 'Button',
};

export const AppHeader = (): TemplateResult =>
  html`
    <style>
      body {
        margin: 10px 10px;
      }
    </style>
    <round-button value="button"></round-button>
  `;
