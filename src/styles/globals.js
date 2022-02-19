import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyles = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;

  }
  ::selection{
    color:white;
    background-color:black
  }
  body {
    font-family: ${(props) => props.theme.fonts.main};
    font-size: 1.6rem;
    background: ${(props) => props.theme.colors.background1};
    color: ${(props) => props.theme.colors.primary1};
    cursor: default;

  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${(props) => props.theme.fonts.title};
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }

  ::-webkit-scrollbar{
    width:10px
  }
  ::-webkit-scrollbar-track{
   background-color:${(props) => props.theme.colors.background1};
  }

  ::-webkit-scrollbar-thumb{
    background-color:rgba(255,255,255,0.75);
    border-radius:2px;
  }
  ::-webkit-scrollbar-thumb:hover{
   border-radius:0;
  }
`;

export default GlobalStyles;
