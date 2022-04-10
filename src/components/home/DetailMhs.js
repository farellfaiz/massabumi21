import {
    Box,
    Heading,
    Circle,
    HStack,
    Stack,
    Flex,
    useMediaQuery

} from '@chakra-ui/react'
import React from 'react'

const DetailMhs = () => {
    const [phoneSize] = useMediaQuery("(max-width: 768px)")

    return (
        <Box
            width='100%' 
            height='auto'
            display='flex'
            justifyContent='center'
            bg='#AA2920'   
        >
            <Flex className='detailmhs' align={'center'}>
                <HStack spacing={phoneSize ? '8vw' : '115px'}>
                    <Circle size={phoneSize ? '100px' : '170px'} bg='#C78788' color='black' flexDirection={'column'}>
                        <Stack>
                            <Heading
                                fontFamily='MonumentExtended-Regular' fontWeight={'bold'} fontSize={phoneSize ? '28px' : '40px'} position={'static'}
                            >
                                253
                            </Heading>
                        </Stack>
                        <Stack>
                            <Heading fontFamily='TextaNarrowAlt-Bold' fontWeight={'bold'} fontSize={phoneSize ? '18px' : '20px'}>
                                Mahasiswa
                            </Heading>
                        </Stack>
                        <Stack>
                            <Heading fontFamily='TextaNarrowAlt-Bold' fontWeight={'bold'} fontSize={phoneSize ? '18px' : '20px'}>
                                Ganesha
                            </Heading>
                        </Stack>
                    </Circle>
                    <Circle size={phoneSize ? '100px' : '170px'} bg='#C78788' color='black' flexDirection={'column'}>
                        <Stack>
                            <Heading
                                fontFamily='MonumentExtended-Regular' fontWeight={'bold'} fontSize={phoneSize ? '28px' : '40px'} position={'static'}
                            >
                                34
                            </Heading>
                        </Stack>
                        <Stack>
                            <Heading fontFamily='TextaNarrowAlt-Bold' fontWeight={'bold'} fontSize={phoneSize ? '18px' : '20px'}>
                                Mahasiswa
                            </Heading>
                        </Stack>
                        <Stack>
                            <Heading fontFamily='TextaNarrowAlt-Bold' fontWeight={'bold'} fontSize={phoneSize ? '18px' : '20px'}>
                                Cirebon
                            </Heading>
                        </Stack>
                    </Circle>
                    <Circle size={phoneSize ? '100px' : '170px'} bg='#C78788' color='black' flexDirection={'column'}>
                        <Stack>
                            <Heading
                                fontFamily='MonumentExtended-Regular' fontWeight={'bold'} fontSize={phoneSize ? '28px' : '40px'} position={'static'}
                            >
                                4
                            </Heading>
                        </Stack>
                        <Stack>
                            <Heading fontFamily='TextaNarrowAlt-Bold' fontWeight={'bold'} fontSize={phoneSize ? '18px' : '20px'}>
                                Program
                            </Heading>
                        </Stack>
                        <Stack>
                            <Heading fontFamily='TextaNarrowAlt-Bold' fontWeight={'bold'} fontSize={phoneSize ? '18px' : '20px'}>
                                Studi
                            </Heading>
                        </Stack>
                    </Circle>
                </HStack>
            </Flex>
        </Box>
    )   
}

export default DetailMhs;