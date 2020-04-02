import { html, TemplateResult } from 'lit-html';
import '../src/components/app-page';

export default {
  title: 'Demo',
};

export const AppPage = (): TemplateResult => html` <app-page></app-page> `;
