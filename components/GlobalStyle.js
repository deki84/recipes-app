import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
*, *::after,*::before {
    box-sizing: border-box;
}

body{

    background-color: grey;
    
}`;

export default GlobalStyle;