import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    a {
      text-decoration: none;
      cursor: pointer;
    }
    body {
        font: 400 14px Roboto, sans-serif;
        background: ${({ theme }) => theme.colors.background};
        -webkit-font-smoothing: antialiased;
    }

    input,
    button {
        font: 400 18px Roboto, sans-serif !important;
    }

    button {
        cursor: pointer;
    }

    @media (max-width: 1080px) {
      html {
        font-size: 93.75%; /* 15px */
      }
    }

    @media (max-width: 970px) {
      html {
        font-size: 87.5%; /* 14px */
      }
    }

    @media (max-width: 700px) {
      :root {
        font-size: 75%; /* 12px */
      }
    }

    @media (max-width: 590px) {
      :root {
        font-size: 62.25%; /* 10px */
      }
    }
`;
