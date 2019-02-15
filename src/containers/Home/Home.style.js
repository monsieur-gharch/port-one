import styled from 'styled-components';
import media from '../../theme/media';

export const Image = styled.img`
width: 100%; 
`;

export const Scroll = styled.h4`
    position: absolute;
    top:calc(70%);
    right: 0;
    transform: rotate(90deg);
    color: #ca4829;
    letter-spacing: .25em; 
`;

export const Name = styled.div`
  color:white;
display:inline;

`;

export const HeroImage = styled.div`
height: 100vh;
background-image: url('${require('../../assets/1.png')}');
background-repeat: no-repeat;
background-size: cover;
background-position: center;

display: flex;
flex-direction: column; 
align-content: center;
justify-content: center;

text-align: center;
color:white;
font-size:1.5em;





`;

