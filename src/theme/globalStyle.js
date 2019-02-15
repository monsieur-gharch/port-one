
import { createGlobalStyle } from "styled-components"
import media from './media';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=VT323');


body {
    font-family: 'VT323', monospace;
    font-size: 26px;
    text-align: justify;
}

h1,h2,h3 {
font-weight : bold;
margin:10px;
color: #232323;
padding-top:0.4em;
}
h2 {
font-size : 34px;
//color : #ca4829;
}
p{
margin:10px;
margin-top:20px;
}

h1{
    margin-bottom:0;
${media.tablet`
    font-size:1.5em;
`}
${media.phone`
    font-size:1em;
`}
}

`
export default GlobalStyle;
