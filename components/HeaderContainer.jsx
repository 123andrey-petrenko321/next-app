import { Box, HStack } from '@chakra-ui/layout';
import React from 'react';
import AvatarComponent from './AvatarComponent';
import CustomButton from './CustomButton';
import MoreMenuButton from './MoreMenuButton';

const menuItems = [{title:"some",id:"some"}]

const HeaderContainer = ({user}) => {
    return (
        <Box display="flex" alignItems="center" justifyContent="space-between" mb="24px" p="32px 34px 0 32px">
            <HStack spacing="12px">
                <CustomButton title={'Funding'}/>
                <AvatarComponent userData={user}/>
            </HStack>
            <MoreMenuButton menuItems={menuItems}/>
        </Box>
    );
};

export default HeaderContainer;