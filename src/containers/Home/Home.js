import React, { Component } from 'react';

import {Container,Relative} from '../../theme/grid';
import {
    Image,
    HeroImage,
    Name,
    Scroll
    
} from './Home.style';

import {A} from '../../theme/types';
import GlobalStyle from '../../theme/globalStyle';



class Home extends Component {
    static PropTypes={};
  render() {
    return (
        
      <div>
<GlobalStyle/>
        
<Container>
        
     <HeroImage>
<h1>Mr<Name>.Gharch Co.</Name></h1>
<h2><Name>Front-end developer</Name></h2>    
     </HeroImage>
        {/*<Scroll> SCROLL MORE-></Scroll>*/}
        
        <h1> 
        <A to="/project">
        Project
        </A>
        </h1>
        
        <h1>
        <A to="/about">
        About Me
        </A>
        </h1>
        
        <h1> <A href="/">Take look at Resume</A></h1>
        
    
</Container>
        </div>
    );
  }
}

export default Home;
