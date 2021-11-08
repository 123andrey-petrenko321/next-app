import React from 'react';
import { Input,InputGroup,InputRightElement } from "@chakra-ui/react"
import ArrowIcon from '../assets/ArrowInput';

const CustomInput = () => {
    return (
        <InputGroup
            width="592px"   
            position="relative"      
        >
         <Input 
            height="48px" 
            border="none" 
            borderRadius="full" 
            placeholder="Type here..." 
            fontFamily="lato"
            padding="14.5px 14.5px 14.5px 20px"
            bgColor="#5F749533"
            opacity="0.8"
        />
            <InputRightElement position="absolute" top="4px" right="5px" children={<ArrowIcon boxSize="18px"/>}/>
        </InputGroup>
      
    );
};

export default CustomInput;