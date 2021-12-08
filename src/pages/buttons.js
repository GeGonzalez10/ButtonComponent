import React from 'react';

import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import {Button, TextButton, SizeButton, DisableShadowBtn, DisableButton, IconButton} from '../components/ButtonElements'
import {FlexContainer, Title, Logo, H4, A} from '../components/Containers'

export const Buttons = () => {
    return (
        <>  
        <FlexContainer justifyContent="space-between" height="100vh">
            
            <FlexContainer backgroundColor="#FAFBFD" width="237px" heigh="100vh">
                
                <Logo>Devchallenges.io</Logo>

                <FlexContainer display="inline" margin="-200px 0px 0px 38px" alignItems="flex-start" justifyContent="flex-start">
                    <H4>Colors</H4>
                    <H4>Typography</H4> 
                    <H4>Spaces</H4>               
                    <H4>Buttons</H4>
                    <H4 active>Imputs</H4>
                    <H4>Grid</H4>
                </FlexContainer>
                
            </FlexContainer>

            <FlexContainer display="inline" width="60vw" margin="0 0 0 25px" height="60vh">
                <FlexContainer width="50vw" margin="20px 0 10px 0">
                    <Title>Buttons</Title>
                </FlexContainer>
                <FlexContainer>
                    <Button color="default">Default</Button>
                    <Button outline>Default</Button>
                    <TextButton>Default</TextButton>
                </FlexContainer>
                <FlexContainer>
                    <DisableShadowBtn>Default</DisableShadowBtn>
                    <DisableButton>Disable</DisableButton>
                    <DisableButton text>Disable</DisableButton>
                </FlexContainer>
                <FlexContainer>
                    <IconButton color="primary"><LocalGroceryStoreIcon sx={{ fontSize: 14 }}/>Default</IconButton>
                    <IconButton color="primary">Default<LocalGroceryStoreIcon sx={{ fontSize: 14 }}/></IconButton>
                </FlexContainer>
                <FlexContainer>
                <SizeButton color="primary" type="sm" >Default</SizeButton>
                <SizeButton color="primary" type="md" >Default</SizeButton>
                <SizeButton color="primary" type="lg" >Default</SizeButton>
                </FlexContainer>
                <FlexContainer>
                    <Button color="default">Default</Button> 
                    <Button color="primary">Default</Button>
                    <IconButton color="secondary">Secondary</IconButton>
                    <Button color="danger">Danger</Button>                
                </FlexContainer>
                <FlexContainer>
                    <H4 created>created by <A>GeGonzalez10</A> - devChallenges.io</H4>
                </FlexContainer>
            </FlexContainer>
        </FlexContainer>
        </>
    )
}

export default Buttons; 