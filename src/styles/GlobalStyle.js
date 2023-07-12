import { createGlobalStyle } from "styled-components";
import { Clamp } from "../utils/functions";
import './fonts.css';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  :root {
    --neutral-100: #fff;
    --primary-500: #00259C;
    --error-400: #EE6470;
    --gradient: linear-gradient(90deg, #90F4E8, #2DD282);
    --easing: cubic-bezier(0.175, 0.885, 0.32, 1.275);
    --pageMargin: 40px;
    @media (max-width: 699px){
     --pageMargin: 16px;
    }
  }
  body.scrollLock {
    overflow: hidden;
    touch-action: none;
  }
  body {
    min-width: 320px;
    background-color: var(--neutral-100);
    color: #0E2428;
    font-size: 16px;
    font-family: 'Manrope', sans-serif;
    font-feature-settings: 'pnum' on, 'onum' on, 'ss03' on, 'ss04' on;
    overflow-x: hidden;
    -webkit-tap-highlight-color: transparent;
  }
  :focus {
    outline: none;
  }
  :focus-visible {
    outline: 2px solid #26D9C3;
    outline-offset: 5px;
  }
  main, .max-width {
    max-width: 1680px;
    width: calc(100% - var(--pageMargin)*2);
    margin: 0 auto;
    height: 100%;
  }
  main {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: ${Clamp(96, 144, 172, "px")};
  }
  svg {
    vertical-align: top;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
  sup {
    font-size: .6em;
    vertical-align: top;
  }
  input, textarea, button, select {
    font: inherit;
    color: inherit;
    appearance: none;
  }
`

export default GlobalStyle