import styled from 'styled-components';

export const CastList = styled.ul`
display:flex;
justify-content: center;
flex-direction: raw;
flex-wrap: wrap;
`
export const ActorCard = styled.li`
width: 200px;
margin: 5px;
padding: 10px;
background-color: yellow;
border 1px solid gray;
border-radius: 5px;
list-style: none;
`
export const ActorFotoFrame = styled.div`
width: 200px;
height: 300px;
background-color: gray;
`
export const NoFoto = styled.p`
margin: 0;
padding: 20px;
text-align: center;
`