import { html, TemplateResult } from 'lit-html';
import '../src/components/app-header.ts';

export default {
  title: 'Header',
};

export const AppHeader = (): TemplateResult =>
  html` <app-header></app-header> `;
