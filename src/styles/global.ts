import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --main_background: #f0f2f5;
    --main_red: #e52e4d;
    --main_blue: #5429cc;
    --main_green: #33cc95;

    --blue_light: #6933ff;

    --text_title: #363f5f;
    --text_body: #969cb3;

    --shape: #ffffff;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    scrollbar-width: thin;
    scrollbar-color: var(--blue_light);
  }

  *::-webkit-scrollbar {
    width: 12px;
  }

  *::-webkit-scrollbar-track {
    background: var(--shape);
  }

  *::-webkit-scrollbar-thumb {
    background-color: var(--blue_light);
    border: 3px solid var(--blue_light);
  }

  html {
    @media(max-width: 1080px) {
      font-size: 93.75%;
    }

    @media(max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body, input, text-area, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  body {
    background-color: var(--main_background);
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const ContentLayoutDefault = styled.div`
  max-width: 1120px;
  margin: 0 auto;
`;
