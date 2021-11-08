import React from 'react';
import { Box } from "@chakra-ui/react"
import HeaderContainer from './HeaderContainer';
import TextContentComponent from './TextContentComponent';
import FooterContainer from './FooterContainer';

const userData = {
    avatarUrl:'https://bit.ly/dan-abramov',
    name:'Ralph Edwards',
    lastVisit: 3
}

const CardComponent = () => {
    return (
        <Box display="flex" flexDirection="column">
            <Box 
                width="640px" 
                height="464px" 
                borderRadius="12px" 
                bg="#272B35" 
                color="#FFFFFF" 
            >
                <HeaderContainer user={userData}/>
                <TextContentComponent/>
                <Box 
                    width="640px" 
                    p="24px" 
                    bg="#5F74951A" 
                    color="#FFFFFF" 
                >
                    <FooterContainer/>
                </Box>
            </Box>
           
            
        </Box>
    );
};

export default CardComponent;