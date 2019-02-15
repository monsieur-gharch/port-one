import styled from 'styled-components';
import {Link} from 'react-router';

export const A = styled(Link)`
color: #444444;
text-decoration: none;
position:relative;

&:after {
content: ' ';
position:absolute;
left: 0;
bottom: 0;
height: 10%;
width:100%;
background-color:#444444;
z-index:-1;
transition : height .15s, background-color .17s;
}

&:hover:after {
height:40%;
opacity:0.8;
background-color:#ca4829;

}

`;


export const [H1,H2,H3,H4,H5,H6,P]=['h1','h2','h3','h4','h5','h6','p'].map((tag)=> styled[tag]`
${({ align }) => align && `text-align:${align};`}
`)


