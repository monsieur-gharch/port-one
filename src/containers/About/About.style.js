import styled from 'styled-components';
import {Relative} from '../../theme/grid';

import Playbtn from '../../components/Playbtn/Playbtn';

export const Title = styled.h1`
//   background-color: #ca4829;
   width:10%;
    padding:2px;
color:#444444;
`;

export const VidContainer = styled(Relative)`
    width:100%;
//    flex-shrink:0;
//    flex-grow:0;
cursor:pointer;
`;

export const Styleplay= styled(Playbtn)`
position:absolute;
left:50%;
top:50%;
transform: translate(-50%,-50%);
transition : opacity .5s;

${({playing}) => playing && `
    opacity: 0;
`}

`;

