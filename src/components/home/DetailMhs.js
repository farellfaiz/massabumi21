import {
    Box,
    Heading,
    Circle,
    HStack,
    Stack,

} from '@chakra-ui/react'
import React from 'react'

const DetailMhs = () => {
    return (
        <Box
            width='100%' 
            height='auto'
            display='flex'
            justifyContent='center'
            bg='#AA2920'   
        >
            <Stack className='detailmhs' align={'center'}>
                <HStack spacing='115px'>
                    <Circle size='170px' bg='#C78788' color='black' flexDirection={'column'}>
                        <Stack>
                            <Heading
                                fontFamily='MonumentExtended-Regular' fontWeight={'bold'} fontSize='40px' position={'static'}
                            >
                                261
                            </Heading>
                        </Stack>
                        <Stack>
                            <Heading fontFamily='TextaNarrowAlt-Bold' fontWeight={'bold'} fontSize='20px'>
                                Mahasiswa
                            </Heading>
                        </Stack>
                        <Stack>
                            <Heading fontFamily='TextaNarrowAlt-Bold' fontWeight={'bold'} fontSize='20px'>
                                Ganesha
                            </Heading>
                        </Stack>
                    </Circle>
                    <Circle size='170px' bg='#C78788' color='black' flexDirection={'column'}>
                        <Stack>
                            <Heading
                                fontFamily='MonumentExtended-Regular' fontWeight={'bold'} fontSize='40px' position={'static'}
                            >
                                37
                            </Heading>
                        </Stack>
                        <Stack>
                            <Heading fontFamily='TextaNarrowAlt-Bold' fontWeight={'bold'} fontSize='20px'>
                                Mahasiswa
                            </Heading>
                        </Stack>
                        <Stack>
                            <Heading fontFamily='TextaNarrowAlt-Bold' fontWeight={'bold'} fontSize='20px'>
                                Cirebon
                            </Heading>
                        </Stack>
                    </Circle>
                    <Circle size='170px' bg='#C78788' color='black' flexDirection={'column'}>
                        <Stack>
                            <Heading
                                fontFamily='MonumentExtended-Regular' fontWeight={'bold'} fontSize='40px' position={'static'}
                            >
                                4
                            </Heading>
                        </Stack>
                        <Stack>
                            <Heading fontFamily='TextaNarrowAlt-Bold' fontWeight={'bold'} fontSize='20px'>
                                Program
                            </Heading>
                        </Stack>
                        <Stack>
                            <Heading fontFamily='TextaNarrowAlt-Bold' fontWeight={'bold'} fontSize='20px'>
                                Studi
                            </Heading>
                        </Stack>
                    </Circle>
                </HStack>
            </Stack>
        </Box>
    )   
}

export default DetailMhs;