import {
    Box,
    Heading
} from '@chakra-ui/react'
import React from 'react'

const ComingSoon = () => {
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
            fontSize={'120px'}
            color='#330F11'
            >
                COMING SOON
            </Heading>
        </Box>
    )
}

export default ComingSoon;