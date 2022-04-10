import {
    Box,
    Heading,
    Stack,
    Image,
    HStack,
    Text,
    Divider,
    useMediaQuery,
    Flex
} from '@chakra-ui/react'
import React from 'react'

const LogoFilosofi = () => {
    const [phoneSize] = useMediaQuery("(max-width: 900px)")

    return (
        <Box 
            width='100%'
            height='auto'
            bg='white'
            display='flex'
            justifyContent={'center'}
            marginBottom={'-50px'}
        >
            <Stack marginTop='50px' marginBottom='190px' align='center'>
                <Stack>
                    <Heading
                        marginBottom='50px' 
                        fontFamily='MonumentExtended-Regular'
                        fontWeight={'bold'}
                        fontSize='35px'
                        color='#330F11'
                    >
                        L<span class='underl'>og</span>o
                    </Heading>
                </Stack>
                <Flex spacing={phoneSize ? '10px' : '100px'}>
                    <Image 
                        src='/img/logocircle.png' 
                        alt='' 
                        width='330px' 
                        height='330px' 
                        shadow={'dark-lg'} 
                        objectFit={'cover'}
                        borderRadius={'100%'} 
                        overflow={'hidden'}
                        display={phoneSize ? 'none' : 'block'} 
                        margin='auto'
                        marginRight={'50px'}/>
                    <Stack spacing={'40px'} marginLeft={phoneSize ? '5vw': '0px'}>
                        <Stack>
                            <HStack>
                                <Image src='/img/volcano.png' />
                                <Heading className='logo-home'>VOLCANO</Heading>
                            </HStack>
                            <Text maxWidth={phoneSize? '40vw':'270px'} className='logo-p'>
                            Showing the identity of the earth, the place of exit of the earth's contents to the
                            surface, as well as a representation of the <span className='logo-bolder'>Geological Engineering study program.</span>
                            </Text>
                        </Stack>
                        <Stack>
                            <HStack>
                                <Image src='/img/contourlines.png' />
                                <Heading className='logo-home'>CONTOUR LINES</Heading>
                            </HStack>
                            <Text maxWidth={phoneSize? '40vw':'270px'} className='logo-p'>
                                A line connecting different locations that are at the same height. Representation of <span className='logo-bolder'>Geodesy and Geomatics Engineering study program.</span> Contain some dots, which shows
                                1 brown dot, 6 yellow dots, and 3 white dots. These dots combine to form the number of FITB, <span className='logo-bolder'>163.</span>
                            </Text>
                        </Stack>
                        <Stack>
                            <HStack>
                                <Image src='/img/ganeshacompass.png' />
                                <Heading className='logo-home'>GANESHA & COMPASS</Heading>
                            </HStack>
                            <Text maxWidth={phoneSize? '40vw':'270px'} className='logo-p'>
                                The Ganesha logo represents this faculty is a part of Bandung Institute of Technology (ITB).
                                The Compass shows that FITB has directions in the midst of the chaos of the lecture situation,
                                as well as a representation of the <span className='logo-bolder'>Geodesy and Geomatics Engineering study program.</span>
                            </Text>
                        </Stack>
                    </Stack>
                    <Stack spacing={'40px'} marginLeft={phoneSize ? '15vw': '5vw'}>
                        <Stack>
                            <HStack>
                                <Image src='/img/windsolar.png' />
                                <Heading className='logo-home'>WIND TURBINES & SOLAR PANEL</Heading>
                            </HStack>
                            <Text maxWidth={phoneSize? '40vw':'270px'} className='logo-p'>
                                Demonstrate that FITB is a visionary faculty, helping to innovate the development of renewable
                                resources, in this case is wind energy. Representing the <span className='logo-bolder'>Meteorological study program.</span>
                            </Text>
                        </Stack>
                        <Stack>
                            <HStack>
                                <Image src='/img/redocean.png' />
                                <Heading className='logo-home'>RED OCEAN</Heading>
                            </HStack>
                            <Text maxWidth={phoneSize? '40vw':'270px'} className='logo-p'>
                               The sea, connected as the world ocean or simply the ocean, is the body of salty water that covers
                               approximately 71 percent of the Earth's surface. Representing the <span className='logo-bolder'>Oceanography study program.</span>
                            </Text>
                        </Stack>
                        <Stack>
                            <HStack>
                                <Image src='/img/nightsky.png' />
                                <Heading className='logo-home'>NIGHT SKY, STARGAZING</Heading>
                            </HStack>
                            <Text maxWidth={phoneSize? '40vw':'270px'} className='logo-p'>
                                The sky is the top of the Earth's surface, and is classified as a separate layer called the atmosphere.
                                The sky is made up of many gases and air, with different compositions in each layer.
                                Representing the <span className='logo-bolder'>Meteorological study program.</span>
                            </Text>
                        </Stack>
                        <Stack>
                            <HStack>
                                <Image src='/img/geotermalplant.png' />
                                <Heading className='logo-home'>GEOTERMAL POWERPLANT</Heading>
                            </HStack>
                            <Text maxWidth={phoneSize? '40vw':'270px'} className='logo-p'>
                                Demonstrate that FITB is a visionary faculty, helping to innovate the development of renewable resources, 
                                in this case is Geothermal Energy. Representing the <span className='logo-bolder'>Geological Engineering study program.</span>
                            </Text>
                        </Stack>
                    </Stack>
                </Flex>
            </Stack>
        </Box> 
    )
}

export default LogoFilosofi;