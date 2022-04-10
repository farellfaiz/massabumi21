import {
    Box,
    Heading,
    useMediaQuery
} from '@chakra-ui/react'
import React from 'react'

const BeritaFITB = () => {
    const [phoneSize] = useMediaQuery("(max-width: 500px)")

    return (
        <div>
            <Box
                width='100%'
                height='100vh'
                justifyContent={'center'}
                alignItems={'center'}
                display='flex'
                className='branchpage'
            >
                <Box
                    width='100%'
                    justifyContent={'left'}
                    alignItems={'left'}
                    display={'flex'}
                >
                    <span className='vl'></span>
                    <Heading className='branchhdg' fontSize={'80px'}>
                        Berita FITB
                    </Heading>
                </Box>
            </Box>
            <Box
                width='100%'
                height='460px'
                justifyContent={'left'}
                alignItems={'left'}
                display='flex'
            >
            </Box>
        </div>
    )
}

export default BeritaFITB;