import React, { Component } from 'react';
import ReactPlayer from 'react-player';

import GlobalStyle from '../../theme/globalStyle';
import {Container,} from '../../theme/grid';
import {A , H2 , P} from '../../theme/types';


import {Title,VidContainer,Styleplay} from './About.style';

class About extends Component {
    
constructor(props){
        super(props);
        
        this.state ={
            vidHover:false,
            vidPlay:false
        };
        
       this.onMouseLeave = this.onMouseLeave.bind(this);
       this.onMouseOver = this.onMouseOver.bind(this); 
       this.onClick = this.onClick.bind(this);
    } 
onMouseOver(){
    this.setState({
        vidHover:true
    });
}
onMouseLeave(){
    this.setState({
        vidHover:false,
        
    });
}
 onClick(){
 this.setState(prevState => ({
  vidPlay: !prevState.vidPlay
}));
}
   
    
  render() {
    return (
      <Container>
        <GlobalStyle/>
        
        <Title>About</Title>
        
        <H2 align="right" style={{color:'#ca4829'}}>
        what exactly doing in wasted time?</H2>
        <P align="left" style={{width:'60%'}}>
        Watch masterpeace movie and playing game , reading russian books and do a lot of shits.Watch masterpeace movie and playing game , reading russian books and do a lot of shits.</P>
        
        <VidContainer
        onMouseOver={this.onMouseOver}
        onMouseLeave={this.onMouseLeave}
        onClick={this.onClick}
        >
            <Styleplay 
            hover={this.state.vidHover}
            playing={this.state.vidPlay}
            />
        
            <ReactPlayer 
            playing={this.state.vidPlay}
            loop 
            width="100%"
            url={require('../../assets/3.mp4')}>
            </ReactPlayer>

        </VidContainer>
<br/>
<br/>
<br/>
<br/>
<br/>   
      </Container>
    );
  }
}

export default About;
