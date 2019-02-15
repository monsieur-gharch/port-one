import styled from 'styled-components';
import {Flex} from '../../theme/grid';
import {Link} from 'react-router';


export const NavContainer = styled(Flex)`
    position: fixed;
    right:0;
    top: 1.5em;
    padding:0.1em 0em 0.2em 0.5em;
    background-color:white;
    z-index:999;
    border-right: 28px solid #ca4829;
//    border-top: 2px solid #ca4829;
//    border-bottom: 2px solid #ca4829;
//    border-left: 2px solid #ca4829;

`;
export const NavItem = styled(Link)`
    margin-right : 30px;
    font-size:1.02em;
    cursor: pointer;
    position:relative;

    color:#444444;

    &:hover {
    color: white;
    transition: color .2s;

    &:after{

    content:' ';
    position:absolute;
    left:0;
    top:0;
    width:100%;
    height: 100%;
    background-color:#ca4829;
    opacity:0.95;
    z-index:-1;
    transform: scale(1.25,1.25);
           }
    }
`;

