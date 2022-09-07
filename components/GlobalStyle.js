import {createGlobalStlye} from "styled-components";

const GlobalStyle = createGlobalStlye`
*, *::after,*::before{
    box-sizing: border-box;
}

body{

    background-color: hotpink;
    
}`;

export default GlobalStyle;