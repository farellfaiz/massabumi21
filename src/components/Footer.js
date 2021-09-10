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
  } from '@chakra-ui/react'

import { FaRegEnvelope, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { IoLogoTiktok } from 'react-icons/io5'
import { IconFooter } from '.'

const Footer = () => {
    return (
        <Box 
            position="relative" 
            bottom="-10"
            left="0"
            w="100%" 
            bg="white"
            paddingTop={10}
        >
            <Divider position="absolute" top="0"/>
            <Flex flexDirection="column" justifyContent="center" alignItems="center">
                <Heading size="md" mb={2}>
                    Subscribe
                </Heading>
                <Text align="center" maxWidth="400px" marginX={4} marginBottom={7}>
                    Updates you’ll want to know about FITB ITB students batch 2021. Our stories, events, and another updates.
                </Text>
                <form action="https://formsubmit.co/dev.fitb21@gmail.com" method="POST">
                    <Flex justifyContent="center" alignItems="center" marginX={5} marginBottom={7}>
                        <InputGroup>
                            <Input 
                                borderRadius="8px 0px 0px 8px" 
                                _focus={{ boxShadow:"none" }}
                                placeholder="Email"
                                name="Email"
                            />
                            <InputLeftElement>
                                <FaRegEnvelope />
                            </InputLeftElement>
                        </InputGroup>
                        <Button 
                            type="submit"
                            paddingX={7} 
                            variant="solid" 
                            size="md" 
                            borderRadius="0px 8px 8px 0px"
                            color="white"
                            bg="gray.700"
                            _hover={{ bg:'gray.700' }}
                            _active={{ bg:'gray.700' }} 
                            _focus={{ boxShadow:"0 0 1px 2px black, 0 1px 1px rgba(0, 0, 0, .15)" }}
                        >
                            Subscribe
                        </Button>
                    </Flex>
                </form>
                <Flex marginTop={4} justifyContent="center" alignItems="center" width="100%" bg="gray.100" paddingY={4}>
                    <a href="mailto:tanya@massabumi21.id">
                        <IconFooter icon={<FaRegEnvelope />} mx="1.5" />
                    </a>
                    <a href="https://instagram.com/fitb21">
                        <IconFooter icon={<FaInstagram />} mx="1.5" />
                    </a>
                    <a href="https://twitter.com/fitb21">
                        <IconFooter icon={<FaTwitter />} mx="1.5" />
                    </a>
                    <a href="https://www.youtube.com/channel/UCwWXzzP7yh60ZzS-udBl2WA">
                        <IconFooter icon={<FaYoutube />} mx="1.5" />
                    </a>
                    <a href="https://tiktok.com/@fitb21">
                        <IconFooter icon={<IoLogoTiktok />} mx="1.5" />
                    </a>
                </Flex>
                <Flex bg="gray.700" color="white" w="100%" justifyContent="center" paddingY={3}>
                    <Text fontWeight="thin" fontSize="15px">&copy; 2021 Massa Bumi. All rights reserved.</Text>
                </Flex>
            </Flex>
        </Box>
    )
}

export default Footer
