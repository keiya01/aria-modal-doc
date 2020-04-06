import { css } from 'lit-element';

export const globalCSS = css`
  * {
    box-sizing: border-box;
  }

  html,
  body,
  div,
  span,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  a,
  img,
  ul,
  li,
  form,
  label,
  footer,
  header,
  nav {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    vertical-align: baseline;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: -apple-system, Segoe UI, Helvetica Neue,
      Hiragino Kaku Gothic ProN, 'メイリオ', meiryo, sans-serif;
    font-size: 1.6em;
  }

  ul {
    list-style: none;
  }
`;
