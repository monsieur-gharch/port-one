import styled , {css} from 'styled-components';
import media from './media';

export const Div = styled.div`
    ${({ marginBottom}) => marginBottom && css `
    margin-bottom: ${marginBottom} ;
`}   
${({ marginTop}) => marginTop && css `
    margin-top: ${marginTop} ;
`}
`;

export const Container = styled(Div)`
padding-left:120px;
padding-right:120px;
padding-top:60px;

${media.desktop`
  padding-left:80px;
  padding-right:80px;
  padding-top:40px;  
`}

${media.tablet`
  padding-left:40px;
  padding-right:40px;
  padding-top:25px;  
`}

${media.phone`
  padding-left:25px;
  padding-right:25px;
  padding-top:15px;  
`}

`;

export const Relative =styled(Div)`
position: relative;
`;

export const Flex = styled(Div)`
display: flex;

${({ column}) => column && css `
    flex-direction : column;
`}
${({ justify}) => justify && css `
    justify-content : ${justify};
`}
${({ align}) => align && css `
    align-content : ${align};
`}
`; 