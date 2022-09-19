import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const NavMenu = styled.div`
display: flex;
margin: 10px auto;
border-bottom: 2px solid gray;

`
export const NavItem = styled(NavLink)`
text-decoration: none;
text-align: center;
padding: 10px;
width: 100px;
height: 100%;
font-size: 24px;
color: black;


&.active {
    color: #e17878;
    font-weight: 700;
}

&:hover {
color: #e17878;
font-weight: 700;
}
`
