import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/menu';
import { HStack } from '@chakra-ui/react';
import CircleIcon from '../assets/CircleIcon';

const MoreMenuButton = ({menuItems}) => {
    return (
        <Menu>
            <MenuButton>
                <HStack spacing="2px">
                    <CircleIcon boxSize="4px"/>
                    <CircleIcon boxSize="4px"/>
                    <CircleIcon boxSize="4px"/>
                </HStack>
            </MenuButton>
            <MenuList>
            {menuItems?.map(({title,id})=>
                <MenuItem key={id} p="6px" color="black">
                    {title}
                </MenuItem>)}
                
            </MenuList>
        </Menu>
    );
};

export default MoreMenuButton;