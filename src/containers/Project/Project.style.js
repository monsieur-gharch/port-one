import styled from 'styled-components';
import media from '../../theme/media';

export const ImageBtn = styled.div`

cursor: pointer;
overflow:hidden;
display:inline-block;



& > img {
width: 600px;
height: 300px;
transition : transform .3s;
border : 5px solid #cf5b54;


${media.tablet`
    width:95%;
`}

${media.phone`
    width:95%;
`}

}
&:hover{
    & > img {
        transform:scale(1.3);

}
}
`; 

export const Index = styled.div`
position : absolute;
left:0;
top:0;
z-index:-1;
font-size: 2.8em;

h1 {
font-weight: bold;
color:#ca4829;
opacity:0.5;
margin:0;
transform: translateY(-50%);
}
`;

export const ImageContainer = styled.div`
    width: 600px;
    margin-left: auto;
    margin-right: auto;
    border : 5px solid #ca4829;

`;

export const Title = styled.h1`
    color :#ca4829;
    font-weight :bold;
    margin-top:0;
`;