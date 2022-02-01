import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    ul, li {
        list-style: none;
    }

    a {
        text-decoration: none;
    }

    button, input {
        border: 0;
        outline: 0;
    }

    body, html {
        height: 100%;
    }

    body {
        font-family: 'Roboto', sans-serif;
        font-size: 16px;

        background-color: var(--primary);
        color: var(--white);
    }

    .d-block {
        display: block;
    }

    .d-flex {
        display: flex;
    }

    input, button {
        padding: 12px;
        border-radius: 7px;
    }

    button:hover {
        cursor: pointer;
        opacity: 0.9;
    }

    #application {
        height: 100%;
    }

    .error {
        color: var(--danger);
    }

    :root {
        --primary: #1A1B1D;
        --secondary: #141416;
        --tertiary: #2F323C;

        --white: #FFFFFF;
        --black: #000000;

        --success: #BCFE2F;
        --danger: #FF4C00;

        --grey-primary: #2D2F32;
        --gray-secondary: #707277;
        --grey-tertiary: #B7B7B7;

        --active: #4422EF;

    }
`;

export default GlobalStyle;