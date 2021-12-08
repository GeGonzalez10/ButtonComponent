import styled from 'styled-components';
import {Fonts} from './styled.config'

let { NotoSans, Poppins} = Fonts; 


const Div = styled.div`
font-size:${p=>p.fontSize};
width:${p=>p.width};
height:${p=>p.height};
margin:${p=>p.margin};
border-radius:${p=>p.borderRadius};
border-bottom:${p=>p.borderBottom};
box-shadow:${p=>p.boxShadow};
background-color: ${p=>p.backgroundColor};
color:${p=>p.color};
max-width:${p=>p.maxWidth};
max-height:${p=>p.maxHeight};
padding:${p=>p.padding};
column-gap:${p=>p.columnGap};
row-gap:${p=>p.rowGap};
position:${p=>p.position};
left:${p=>p.left};
right:${p=>p.right};
bottom:${p=>p.bottom};
transform:${p=>p.transform};
`

export const FlexContainer = styled(Div)`
display:${p=>p.display || "flex"};
position:${p=>p.position};
top:${p=>p.top};
grid-column:${p=>p.gridColumn || "1/-1"};
flex-wrap:${p=>p.flexWrap || "wrap"};
flex-direction:${p=>p.flexDirection};
flex-grow:${p=>p.flexGrow};
justify-content:${p=>p.justifyContent};
align-items:${p=>p.alignItems};
`

export const Title = styled.h1`
    display: flex;
    margin: 15px;
    font-size: 24px;
    font-family: ${Poppins};

`

export const Logo = styled.a`
    font-weight: 600;
    text-decoration: none; 
    font-size: 13px;
    margin:38px;
    font-family: ${Poppins};
    color: #F7542E;
    &:hover{
        cursor: pointer;
    }
`

export const H4 = styled.h4`
    margin: 20px;
    font-weight: ${({active}) => (active ? "700" : "500")};
    font-size: 14px;
    font-family: ${NotoSans};
    color: ${({active}) => (active ? "#090F31" : "#9E9E9E")};

    &:hover{
        cursor: ${({created}) => (created ? "default" : "pointer")};
        color: ${({created}) => (created ? "#9E9E9E" : "#636363")};
        font-weight: ${({created}) => (created ? "500" : "600")};
    }
`
export const A = styled.a`
    color: #3F3F3F; 
    font-weight: 600;
    font-size: 14px; 
    text-decoration: none; 

    &:hover{
        cursor: pointer;
        color: #636363;
        }
`