import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
        font-family: Futura,Trebuchet MS,Arial,sans-serif; 
        overflow-x: hidden;
        width: 100vw;
    }

    *, *::before, *::after {
        box-sizing: border-box
    }
`;

export default GlobalStyle;