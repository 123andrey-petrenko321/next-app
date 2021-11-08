import { Avatar } from '@chakra-ui/avatar';
import { HStack,Text } from '@chakra-ui/react';
import React from 'react';

const AvatarComponent = ({userData}) => {
    const {name, avatarUrl,lastVisit} = userData
    return (
        <HStack spacing="12px">
            <Avatar width="44px" height="44px" name={name} src={avatarUrl} />
            <Text 
                fontFamily="poppins"
                fontWeight="600"
                lineHeight="27px"
                fontSize="18px"
                letterSpacing='0.2px'
            >
                {name}
            </Text>
            <Text 
                fontFamily="poppins"
                fontWeight="400"
                lineHeight="18px"
                fontSize="12px"
                opacity="0.5"
            >
                {lastVisit}h ago
            </Text>
        </HStack>
    );
};

export default AvatarComponent;