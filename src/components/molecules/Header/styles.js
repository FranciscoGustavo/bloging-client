import styled from 'styled-components';

export const CSSHeader = styled.header`
position: sticky;
top: 0;
left: 0;
width: 100vw;
height: 60px;
background: linear-gradient(90deg, ${props => props.theme.primaryDark}, ${props => props.theme.primarylight});
box-shadow: ${props => props.shadow ? '0 0 7px rgba(0, 0, 0, 0.14)' : '0 0 0px'};

div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 0 28px;
}

@media screen and (min-width: 1200px) {
  div {
    padding: 0;
  }
}

`;

export const CSSNav = styled.nav`
display: flex;
align-items: center;
a {
  display: flex;
  img {
    width: 35px;
  }
}
`;

export const NavItem = styled.a`
display: inline-block;
border-radius: 5px;
margin-left: 21px;
padding: 7px 14px;
box-shadow: 0 0 7px rgba(0, 0, 0, 0.14);
background-color: rgba(0, 0, 0, 0.14);
text-transform: uppercase;
text-decoration: none;
color: white;
&:first-child {
  margin-left: 0;
}
`;


export const CSSLogo = styled.a`
color: #FFF;
letter-spacing: 1px;
span {
  font-size: 21px;
  &:nth-child(even) {
    display: none;
  }
}

@media screen and (min-width: 680px) {
  span:nth-child(even) {
    display: contents;
  }
}
`;