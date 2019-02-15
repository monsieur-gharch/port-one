import React , {Component} from 'react';

import GlobalStyle from '../../theme/globalStyle';
import {ImageBtn,
       Index,
        ImageContainer,
        Title,
       } from './Project.style';
import {Container,
       Relative,
        Flex,
       } from '../../theme/grid';

import ParallaxImage from 'react-image-parallax2';

import {A} from '../../theme/types';

 class Project extends Component {
    
    render(){
        return (
            
        <Container>
            <GlobalStyle/>
           
         {/*  <Title>Open-Source Project</Title> */}
        <Relative marginTop="100px" marginBottom="40px">  
            <Index>
              <h1>01</h1>
            </Index>
            <h1>Take look at <A href="/">Resume</A></h1>
        </Relative> 
        <Flex justify={'center'} marginBottom="90px">
            <ImageBtn>
            <img 
            src={require('../../assets/2.jpeg')}/>
            </ImageBtn>
        </Flex>  
 
               
        <Relative marginBottom="40px">
            
            <Index>
              <h1>02</h1>
            </Index>
            <h1>first real project <A href="/">animation-mentor</A></h1>
        </Relative> 
        <Flex justify={'center'} marginBottom="90px">
            <ImageContainer>
            <ParallaxImage 
                reduceHeight={1/3}
                src={require('../../assets/1.png')} />
            </ImageContainer>
        </Flex>

        </Container>
            
        );
    }
}

export default Project;