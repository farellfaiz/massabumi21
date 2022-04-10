import {
    Box,
    Flex,
    Heading,
    InputGroup,
    Input,
    InputLeftElement,
    Divider,
    Button,
    Text,
    Stack,
    Image,
    HStack,
    useMediaQuery
  } from '@chakra-ui/react'

import { FaRegEnvelope, FaInstagram, FaTwitter, FaYoutube} from 'react-icons/fa'
import { IoLogoTiktok } from 'react-icons/io5'
import { IconFooter } from '.'

const Footer = () => {
    const [phoneSize] = useMediaQuery("(max-width: 950px)")
    return (
        <div>
            <Box
                w='100%'
                h='1985px'
                display='flex'
                justifyContent='center'
                marginTop={'50px'}
                id='footer-main'
            >
                <Box
                    w={'82vw'}
                    h={phoneSize? '1110px':'163vh'}
                    bg='white'
                    borderRadius={'40px'}
                    marginTop={'195px'}
                    boxShadow={'dark-lg'}
                >
                    <Stack
                        marginTop='100px'
                        align={'center'}
                        spacing={'180px'}
                    >
                        <Stack>
                            <Stack align={'center'}>
                                <Heading
                                    marginBottom='40px' 
                                    fontFamily='MonumentExtended-Regular'
                                    fontWeight={'bold'}
                                    fontSize='35px'
                                    color='#330F11'
                                >
                                    Sub<span className='underl'>sc</span>ribe
                                </Heading>
                            </Stack>
                            <Stack
                            textAlign='center'
                            alignContent='center'
                            color='#600E0E'
                            fontFamily='TextaNarrowAlt-Book'
                            fontSize={phoneSize ? '18px' : '23px'}
                            fontWeight={'normal'}
                            >
                                <p>Updates you'll want to know about FITB ITB students batch 2021.<br/>Our stories, events, and another updates.</p>
                            </Stack>
                            <Stack align={'center'}>
                                <form id='newsletter' action="https://formsubmit.co/dev.fitb21@gmail.com" method="POST">
                                    <InputGroup>
                                        <Input 
                                        _focus={{ boxShadow:"none" }}
                                        name='email'
                                        id='email'
                                        type='email'
                                        placeholder="Enter your email"
                                        />
                                        <InputLeftElement marginLeft={'5px'}>
                                            <FaRegEnvelope />
                                        </InputLeftElement>
                                    </InputGroup>
                                    <Button type='submit' id='submit'>Subscribe</Button>    
                                </form>
                            </Stack>
                        </Stack>
                        <Stack>
                            <Stack align={'center'}>
                                <Heading
                                marginBottom='30px' 
                                fontFamily='MonumentExtended-Regular'
                                fontWeight={'bold'}
                                fontSize='35px'
                                color='#330F11'
                                >
                                    Fee<span className='underl'>db</span>ack
                                </Heading>
                            </Stack>
                            <Stack
                            textAlign='center'
                            alignContent='center'
                            color='#600E0E'
                            fontFamily='TextaNarrowAlt-Book'
                            fontSize='23px'
                            fontWeight={'normal'}
                            >
                                <p>Please write your feedback for further improvements of this website.</p>
                            </Stack>
                            <Stack align={'center'}>
                                <form 
                                action='https://docs.google.com/forms/d/e/1FAIpQLScwwMVMuRmRRfCCSLlZDEeVDqq-NAfbOsmsFNWvlq3F9ZzzWA/formResponse'
                                method='POST'
                                >
                                    <Stack spacing={'10px'}>
                                        <textarea id='feedback' name='entry.1487572390'></textarea>
                                        <Button type='submit' id='submit' width={'40vw'}>Send</Button>
                                    </Stack>
                                </form>
                            </Stack>
                        </Stack>
                        <Stack>
                            <Box
                            w='100%'
                            h='auto'
                            display='flex'
                            justifyContent='center'
                            marginTop='180px'
                            >
                                <Stack
                                align={'center'}
                                spacing={'40px'}
                                >
                                    <Stack align={'center'}>
                                        <Image 
                                        src='/img/logoL.png'
                                        width={phoneSize ? '100px' : '215px'}
                                        height={phoneSize ? '100px' : '215px'}
                                        alt=''
                                        marginBottom={'10px'}
                                        />
                                        <Heading
                                        fontFamily='TextaNarrowAlt-Book'
                                        fontWeight={700}
                                        fontSize='25px'
                                        textAlign={'center'}
                                        >
                                            Massa Bumi 2021 <br/>#InovatifResilienBerprestasi
                                        </Heading>
                                    </Stack>
                                    <Stack align={'center'}>
                                        <Heading
                                        fontFamily='TextaNarrowAlt-Book'
                                        fontWeight={700}
                                        fontSize='17px'
                                        textAlign={'center'}
                                        marginBottom={phoneSize ? '0px':'17px'}
                                        >
                                            Ikuti kami
                                        </Heading>
                                        <HStack>
                                            <a href='https://instagram.com/fitb21/'>
                                                <IconFooter icon={<FaInstagram/>} mx={'1.5'} />
                                            </a>
                                            <a href='twitter.com/fitb21'>
                                                <IconFooter icon={<FaTwitter/>} mx={'1.5'} />
                                            </a>
                                            <a href='https://www.youtube.com/channel/UCwWXzzP7yh60ZzS-udBl2WA'>
                                                <IconFooter icon={<FaYoutube/>} mx={'1.5'} />
                                            </a>
                                            <a href='https://tiktok.com/@fitb21'>
                                                <IconFooter icon={<IoLogoTiktok/>} mx={'1.5'} />
                                            </a>
                                        </HStack>
                                    </Stack>
                                </Stack>
                            </Box>
                        </Stack>
                    </Stack>
                </Box>
            </Box>
            <Flex bg="white" color="black" w="100%" justifyContent="center" paddingY={3}>
                <Text fontWeight="bold" fontSize="15px" fontFamily={'TextaNarrowAlt-Book'}>&copy; Copyright 2021 Massa Bumi. All rights reserved.</Text>
            </Flex>
        </div>
    )
}

export default Footer
