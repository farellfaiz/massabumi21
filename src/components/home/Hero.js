import {
    Container,
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    Button,
    Image,
  } from '@chakra-ui/react';
import { Link } from "react-router-dom";
import { FaUsers } from "react-icons/fa"
  
  const Hero = () => {
    return (
      <Container maxWidth='fit-content' paddingBottom="60px" id='home1' textAlign={'center'}>
        <Stack
          align={'center'}
          direction={{ base: 'column', md: 'row' }}>
          <Stack marginTop="80px" flex={1} spacing={{ base: 6, md: 4 }}>
            <Heading
              id='home-heading'
              bgGradient="linear(to-l, #604842, #B4887C)" bgClip="text"
              textAlign={{ base: "center"}}
            >
                MASSA BUMI <span className='home-year'>2021</span>
            </Heading>
            <Heading
              id='homeheading2'
              textAlign={{ base: "center"}}
            >
                EKSTRUSI INOVASI, MERAKI AKSI
            </Heading>
            <Stack maxW={'fit-content'}
              alignSelf={'center'}>
              <Link to='/family'>
                <Button id='family'
                  rounded={'full'}
                  px={6}
                  size={'lg'}
                  fontWeight='normal'
                  color="black"
                  bg="#C68787" 
                  leftIcon={ <FaUsers /> } 
                  _hover={{ bg:'#d8aeae'}}
                  _active={{ bg:'#e2c2c2'}} 
                  _focus={{ boxShadow:"0 0 1px 2px black, 0 1px 1px rgba(0, 0, 0, .15)" }}                
                >
                  Our Family
                </Button>
              </Link>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    );
  }

  export default Hero;
