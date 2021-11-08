import React from 'react';
import { Box } from "@chakra-ui/react"

const CustomButton = ({title,clickHandler}) => {
    return (
        <Box
            as="button"
            width="94px"
            height="44px"
            borderRadius="100px"
            fontSize="13px"
            fontFamily="Poppins"
            fontWeight="600"
            bg="#BE4444"
            borderColor="#ccd0d5"
            color="#FFFFFF"
            padding="12px 20px"
        >
          {title}
        </Box>
    );
};

export default CustomButton;