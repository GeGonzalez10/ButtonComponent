import styled from 'styled-components'
import {Colors, Fonts} from './styled.config'

let { Default, Primary, Secondary, Danger, DefaultH, PrimaryH, SecondaryH, DangerH} = Colors; 
let { NotoSans, Poppins} = Fonts; 

export const Button = styled.button`
    display: flex;
    margin: 15px;
    align-items: center;
    font-family: ${NotoSans};
    justify-content: center;
    border: ${({outline}) => (outline ? "1px solid #3D5AFE" : "none")};
    width: ${({outline}) => (outline ? "88px" : "81px")};
    height: 36px; 
    font-size: 14px;
    line-height: 20.27px;
    font-weight: 500;
    cursor: pointer; 
    background-color: ${props => props.color === "default" ? Default : props.color === "primary" ? Primary : props.color === "secondary" ? Secondary : props.color === "danger" ? Danger : "transparent"};
    color: ${props => props.color === "default" ? "#3F3F3F" : props.color === "primary" ? "#FFFFFF" : props.color === "secondary" ? "#FFFFFF" : props.color === "danger" ? "#FFFFFF" : "#3D5AFE"};
    box-shadow:  ${props => props.color === "default" ? "0px 2px 3px rgba(51, 51, 51, 0.2);" : props.color === "primary" ? "0px 2px 3px rgba(41, 98, 255, 0.2);" : props.color === "secondary" ? "0px 2px 3px rgba(69, 90, 100, 0.2);" : props.color === "danger" ? "0px 2px 3px rgba(211, 47, 47, 0.2);" : "none" };
    border-radius: 6px;
    
    &:hover, &:focus{
    transition: all 0.2s ease-in-out;
    background-color: ${props => props.color === "default" ? DefaultH : props.color === "primary" ? PrimaryH : props.color === "secondary" ? SecondaryH : props.color === "danger" ? DangerH : "rgba(41, 98, 255, 0.1)"};
    }
`

export const TextButton = styled(Button)`
    color: #3D5AFE;
    background-color: transparent;
    border: none;
    box-shadow:none;

    &:hover, &:focus{
    background: rgba(41, 98, 255, 0.1);
    }
`

export const DisableShadowBtn = styled(Button)`
    background-color: #3D5AFE;
    color: #FFFFFF;
    box-shadow: none;

    &:hover, &:focus{
    background-color: ${PrimaryH};
    }
`

export const DisableButton = styled(Button)`
    width: 88px;
    background-color: ${({text}) => (text ? "transparent" : "#E0E0E0")};
    color: #9E9E9E;
    cursor: default;
    box-shadow: none;

    &:hover, &:focus{
    background-color: ${({text}) => (text ? "transparent" : "#E0E0E0")};
    }
`

export const IconButton = styled(Button)`
    width: 105px;
    justify-content: space-evenly;
`

export const SizeButton = styled(Button)`
    width: ${props => props.type === "sm" ? "73px" : props.type === "md" ? "81px" : props.type === "lg" ? "93px" : "81px"};
    height:  ${props => props.type === "sm" ? "32px" : props.type === "md" ? "36px" : props.type === "lg" ? "42px" : "36px"};

`





