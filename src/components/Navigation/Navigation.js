import React, { Component } from 'react'; 
import {NavContainer,NavItem} from './Navigation.style';

class Navigation extends Component {
  render() {
    return (
        
      <NavContainer>
            <NavItem to="/">Home</NavItem>
            <NavItem to="/project">Project</NavItem>
            <NavItem to="/about">About</NavItem>
            <NavItem to="/">Contact</NavItem>
            <NavItem to="/">My-Resume</NavItem>
        </NavContainer>
    );
  }
}

export default Navigation;
