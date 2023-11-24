"use client";

import { createGlobalStyle } from "styled-components";
import "@radix-ui/themes/styles.css";

const GlobalStyle = createGlobalStyle`  
  * {
    margin: 0;
    padding: 0;
    border: none;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  button {
    cursor: pointer;
    background-color: transparent;
    color: #000;
  }

  a {
    text-decoration: none;
    color: inherit;
    font-size: inherit;
    font-weight: inherit;
  }

  li {
    list-style-type: none;
  }

  p {
    word-wrap: break-word;
  }

  body.ReactModal__Body--open {
    overflow: hidden;
  }

`;

export default GlobalStyle;
