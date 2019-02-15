import styled from 'styled-components';

export const Background = styled.div`
position: fixed;
left:10vw;
width: 80vw;
height: 90vh;
top:11vh;
background-image: url(${require('../../assets/qqw.png')});
background-color: #232323;
opacity: 0.3;
background-repeat: no-repeat;
background-size:80%;
background-position: center;
z-index: -99;

`; 

export const FrameContainer = styled.div`
   
position:relativ;
`; 

export const Frame = styled.div`
.bar {
    position: absolute;
    background: #ca4829;
    z-index: 1000;

}
.bar.left {
    left: 0
}
.bar.right {
    right: 0

}
.bar.top {
    left: 0;
    top: 0;
}
.bar.bottom {
    right: 0;
    bottom: 0;
    
    

}
.bar.left,.bar.right {
    top: 0;
    overflow:auto; 
    height: calc(150% + 14%);
    width: 14px;
    z-index: 90;
    
}
.bar.bottom,.bar.top {
    width: 100%;
    height: 14px;
    position:fixed;
}


`; 

