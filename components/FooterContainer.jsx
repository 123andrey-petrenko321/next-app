import { Container, Stack, Text } from '@chakra-ui/layout';
import React from 'react';
import CustomInput from './CustomInput';

const FooterContainer = () => {
    return (
        <Container m="0" p="0">
            <Stack spacing="12px">
                <Text
                 fontFamily="poppins"
                 fontWeight="600"
                 lineHeight="24px"
                 fontSize="16px"
                 letterSpacing='0.1px'
                >
                How can you help with this Request?
                </Text>
                <CustomInput/>
            </Stack>
            
        </Container>
    );
};

export default FooterContainer;