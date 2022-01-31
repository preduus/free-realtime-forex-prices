import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    button, input {
        border: 0;
        outline: 0;
    }

    body {
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
    }
`;

export default GlobalStyle;