import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

*, *::before, *::after{
    box-sizing: border-box;
    -webkit-font-smoothing : antialiased;
    -mos-osx-font-smoothing  : grayscale;

}
body,html {
    padding : 0;
    margin  :0;  
    overflow-x: hidden;
    font-family: 'Roboto', sans-serif;
    width: 100%;
    height:100%;
    background: #353b48;
}

`;

export default GlobalStyle;
