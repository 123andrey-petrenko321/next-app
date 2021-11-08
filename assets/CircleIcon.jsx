import { Icon} from "@chakra-ui/react"

const CircleIcon = (props) => {
    return (
        <Icon viewBox="0 0 4 4" {...props}>
            <path
            fill="#5F7495"
            fillOpacity="0.501961"
            d="M2 4C3.10457 4 4 3.10457 4 2C4 0.89543 3.10457 0 2 0C0.89543 0 0 0.89543 0 2C0 3.10457 0.89543 4 2 4Z"
        />
        </Icon>
    );
};

export default CircleIcon;