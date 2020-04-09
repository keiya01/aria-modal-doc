import { css } from 'lit-element';

export const globalCSS = css`
  * {
    box-sizing: border-box;
  }

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

  button {
    -webkit-appearance: none;
    -webkit-font-smoothing: antialiased;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  *:focus {
    outline: 3px solid var(--sub-color);
  }
`;
