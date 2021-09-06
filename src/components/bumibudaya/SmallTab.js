import { 
    Box,
    Button,
} from '@chakra-ui/react'

const SmallTab = ( { icon, text, shadow, variant, bg } ) => {
    return (
        <Box>
            <Button 
              leftIcon={icon} 
              _focus={{ boxShadow:"none" }}
              variant={variant}
              shadow={shadow}
              bgColor={bg}
            >
                {text}
            </Button>
        </Box>
    )
}

export default SmallTab
