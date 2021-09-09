import {
    Button,
} from "@chakra-ui/react";

const MenuButton = ({ icon, name }) => {
    return (
        <div>
            <Button 
                _hover={{ bg:'#E0D7D0', transform: "translate(0px, -2px)" }}
                _active={{ bg:'#C8B19C', transform: "translate(0px, 3px)" }} 
                _focus={{ boxShadow:"none" }} 
                width="272px" 
                leftIcon={icon} 
                variant="solid" 
                size="md" 
                marginBottom="10px" 
                marginX="auto"
                bgColor="white"
                shadow="md"
            >
                {name}
            </Button>
        </div>
    )
}

export default MenuButton
