import { Icon} from "@chakra-ui/react"

const ArrowIcon = (props) => {
    return (
        <Icon viewBox="0 0 18 15" {...props}>
            <path
            fill="#5F7495"
            d="M11 4V0L18 7L11 14V9.9C6 9.9 2.5 11.5 0 15C1 10 4 5 11 4Z"
        />
        </Icon>
    );
};

export default ArrowIcon;