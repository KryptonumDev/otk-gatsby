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
    --neutral-200: #F1F1F1;
    --primary: #4D77FF;
    --primary-300: #4D77FF;
    --primary-400: #0152A8;
    --primary-500: #00259C;
    --secondary-200: #57EBC7;
    --secondary-500: #0FE3AF;
    --error: #FF0;
    --dark-500: #0E2428;
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
    color: var(--dark-500);
    font-size: 16px;
    font-family: 'Manrope', sans-serif;
    overflow-x: hidden;
    -webkit-tap-highlight-color: transparent;
  }
  :focus {
    outline: none;
  }
  .tabbing :focus-visible {
    outline: 3px solid var(--secondary-500);
    outline-offset: 5px;
  }
  .max-width {
    max-width: 1680px;
    width: calc(100% - var(--pageMargin) * 2);
    margin: 0 auto;
    height: 100%;
  }
  main {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: ${Clamp(96, 144, 172, "px")};
    margin-bottom: ${Clamp(96, 144, 172, "px")};
  }
  svg {
    vertical-align: top;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  label {
    display: block;
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
    background-color: transparent;
    appearance: none;
  }
  hr {
    display: inline-block;
    width: 100%;
    max-width: 180px;
    height: 3px;
    background-color: var(--secondary-500);
    border: none;
    margin: ${Clamp(24, 24, 48, 'px')} 0;
  }
  h1 {
    font-size: ${Clamp(32, 36, 82)};
  }
  h2 {
    font-size: ${Clamp(32, 32, 48)};
  }
  h3 {
    font-size: ${Clamp(24, 24, 32)};
  }
  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    strong {
      font-weight: 700;
    }
  }
  .cta-wrapper {
    display: inline-flex;
    flex-wrap: wrap;
    gap: 16px 32px;
    @media (max-width: 549px){
      width: 100%;
      .cta {
        width: 100%;
        text-align: center;
      }
    }
  }
`

export default GlobalStyle