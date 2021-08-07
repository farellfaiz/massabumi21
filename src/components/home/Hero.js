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
      <Container maxW={'4xl'}>
        <Stack
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          direction={{ base: 'column', md: 'row' }}>
          <Stack marginTop="80px" flex={1} spacing={{ base: 5, md: 4 }}>
            <Heading
              fontWeight="bold"
              fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
              bgGradient="linear(to-l, #604842, #B4887C)" bgClip="text"
            >
                Massa Bumi 2021
            </Heading>
            <Text color={'gray.500'}>
              Selamat datang di website Massa Bumi 2021
            </Text>
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: 'column', sm: 'row' }}>
              <Link to="/family">
                <Button
                  rounded={'full'}
                  size={'lg'}
                  fontWeight="medium"
                  px={6}
                  color="white"
                  bg="#402B0E"
                  iconSpacing={3} 
                  leftIcon={ <FaUsers /> } 
                  _hover={{ bg:'#CCBA92' }}
                  _active={{ bg:'#C8B19C' }} 
                  _focus={{ boxShadow:"0 0 1px 2px #9c8067, 0 1px 1px rgba(0, 0, 0, .15)" }}
                >
                  Our Family
                </Button>
              </Link>
            </Stack>
          </Stack>
          <Flex
            flex={1}
            justify={'center'}
            align={'center'}
            position={'relative'}
            w={'full'}  
          >
            <Box
              position={'relative'}
              display="flex"
              flexDir="column"
              height={'280px'}
              rounded={'2xl'}
              boxShadow={'2xl'}
              width={'full'}
              marginTop="80px"
              overflow={'hidden'}>
              <Image
                alt={'FITB 2021'}
                fit={'contain'}
                align={'center'}
                w={'100%'}
                h={'100%'}
                src={
                  '/img/fotbar.png'
                }
                marginBottom="-10px"
              />
              <Image
                alt={'FITB 2021'}
                fit={'contain'}
                align={'center'}
                w={'100%'}
                h={'100%'}
                src={
                  '/img/fotbar.png'
                }
              />
            </Box>
          </Flex>
        </Stack>
      </Container>
    );
  }

  export default Hero;