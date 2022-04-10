import {
    Box,
    Heading,
    useMediaQuery
} from '@chakra-ui/react'
import React from 'react'

const ComingSoon = () => {
    const [phoneSize] = useMediaQuery("(max-width: 500px)")

    return (
        <Box
        width='100%'
        height='100vh'
        justifyContent={'center'}
        alignItems={'center'}
        display='flex'
        bg='white'
        >
            <Heading
            fontFamily='MonumentExtended-Regular'
            fontWeight={'bold'}
            fontSize={phoneSize ? '70px':'120px'}
            textAlign={'center'}
            color='#330F11'
            >
                COMING SOON
            </Heading>
        </Box>
    )
}

export default ComingSoon;