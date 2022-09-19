import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Message = styled.h2`
text-align: center;
`

export const ToHome = styled(Link)`
display: flex;
justify-content: center;
// align-items: center;
margin: 20px auto;
padding: 20px;
width: 150px;
background-color: orange;
text-decoration: none;
font-size: 20px;
`