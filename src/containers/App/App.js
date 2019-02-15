import React, { Component } from 'react';
import {Background,
       Frame,
       FrameContainer,
       } from './App.style';

import Navigation from '../../components/Navigation/Navigation';

import './Webkit.css';


import ReallySmoothScroll from 'really-smooth-scroll';
import {hashHistory} from 'react-router';


ReallySmoothScroll.shim();
hashHistory.listen(()=> {
    window.scrollTo(0,0);
});

class App extends Component {
  render() {
    return (
      <div>
        {/*<Background/>*/}
        
        
        <FrameContainer>
        <Frame class="bar">
                <span class="bar top"></span>
                <span class="bar left"></span>
                <span class="bar right"></span>
                <span class="bar bottom"></span>
        </Frame>
        </FrameContainer>
        
        <Navigation/>
        {this.props.children}
        </div>
    );
  }
}

export default App;
