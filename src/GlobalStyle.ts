import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    font-size: 16px;
  }
  body, * {
    margin: 0;
    padding: 0;

    font-family: 'Lato', Arial, Helvetica, sans-serif;
    color: #fff;
  }
  body {
    background-color: #0D1112;
  }
`;
