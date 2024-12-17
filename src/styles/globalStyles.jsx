import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

html, body, div, span, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
abbr, address, cite, code,
del, dfn, em, img, ins, kbd, q, samp,
small, strong, sub, sup, var,
b, i,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section, summary,
time, mark, audio, video {
  margin:0;
  padding:0;
  border:0;
  outline:0;
  font-size:100%;
  vertical-align:baseline;

}
body{
  line-height:1;
  background-color: ${({ theme }) => theme.bgTotal};
  color: ${({ theme }) => theme.text};
  font-family: "Poppins", sans-serif;
}

article,aside,details,figcaption,figure,
footer,header,hgroup,menu,nav,section { 
  display:block;
}

nav ul {
  list-style:none;
} 

a {
  margin:0;
  padding:0;
  font-size:100%;
  vertical-align:baseline;
  background:transparent;
}

table {
  border-collapse:collapse;
  border-spacing:0;
}

hr {
  display:block;
  height:1px;
  border:0;   
  border-top:1px solid ${({ theme }) => theme.borderColor};
  margin:1em 0;
  padding:0;
}

input, select {
  vertical-align:middle;
}

`;

/* https://programandoointentandolo.com/2017/10/reset-css-normalizar-estilos.html */