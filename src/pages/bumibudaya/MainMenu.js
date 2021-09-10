import { 
    Box, 
    Heading,
    Flex,
    Grid,
    Text,
    Image,
} from "@chakra-ui/react"
import React from "react"
import { BsFileText, BsPlay } from "react-icons/bs";
import { BiBookContent } from "react-icons/bi";
import { HiOutlineSun } from "react-icons/hi";
import { RiRoadMapLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { Medpart, Carousel } from "../../components"

const Guestbook = () => {
    /* const MySwal = withReactContent(Swal)
    MySwal.fire({
        title: <p>Hello World</p>,
        footer: 'Copyright 2018',
        confirmButtonColor: '#fff',
        confirmButtonText: 'Mari mulai berjelajah!',
        didOpen: () => {
          MySwal.clickConfirm()
        }
      }).then(() => {
        return MySwal.fire(
            <>
                <p>Shorthand works too</p>
                <RiRoadMapLine size="70px" />
            </>
        )
      }) */

    return (
        <Box w="100%" h="auto" paddingY={8} bg="gray.50" marginBottom="-50px" display="flex" justifyContent="center">
            
            <Image src="/img/bg.png" position="fixed" top="0" right={["-200px", "-200px", "-200px", "0"]} alt="" />
            <Image src="/img/bg.png" position="fixed" left={["-200px", "-200px", "-200px", "0"]} bottom="0" transform="rotate(180deg)" alt="" />

            <Box marginBottom="40px" display="flex" flexDir="column" width="80%" alignItems="center" position="relative">
                <Flex width="100%" flexDir="column" justifyContent="center" alignItems="center" marginTop={3}>
                    <Heading fontFamily="Mick Kelly" fontWeight="bold" marginBottom={6} size="2xl" bgGradient="linear(to-r, #85665e, #B4887C)" bgClip="text" lineHeight="65px">
                        Bumi Budaya
                    </Heading>
                </Flex>

                <Grid h="auto" templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }} gap="50px">
                    <Link to="/bumibudaya/peta">
                        <Box display="flex" justifyContent="center" alignItems="center" flexDir="column" bgColor="white" rounded="lg" shadow="lg" boxSize="230px" transition="all 0.3s"
                            _hover={{ shadow: "xl", transition: "all 0.3s", transform: "translate(0px, -7px)" }}
                        >
                            <RiRoadMapLine size="70px" />
                            <Text marginTop="5px" fontWeight="bold">Peta Budaya</Text>
                        </Box>
                    </Link>
                    <Link to="/bumibudaya/artikel">
                        <Box display="flex" justifyContent="center" alignItems="center" flexDir="column" bgColor="white" rounded="lg" shadow="lg" boxSize="230px" transition="all 0.3s"
                            _hover={{ shadow: "xl", transition: "all 0.3s", transform: "translate(0px, -7px)" }}
                        >
                            <BsFileText size="70px" />
                            <Text marginTop="5px" fontWeight="bold">Artikel</Text>
                        </Box>
                    </Link>
                    <Link to="/bumibudaya/bukutamu">
                        <Box display="flex" justifyContent="center" alignItems="center" flexDir="column" bgColor="white" rounded="lg" shadow="lg" boxSize="230px" transition="all 0.3s"
                            _hover={{ shadow: "xl", transition: "all 0.3s", transform: "translate(0px, -7px)" }}
                        >
                            <BiBookContent size="70px" />
                            <Text marginTop="5px" fontWeight="bold">Buku Tamu</Text>
                        </Box>
                    </Link>
                    <Link to="/bumibudaya/harapan">
                        <Box display="flex" justifyContent="center" alignItems="center" flexDir="column" bgColor="white" rounded="lg" shadow="lg" boxSize="230px" transition="all 0.3s"
                            _hover={{ shadow: "xl", transition: "all 0.3s", transform: "translate(0px, -7px)" }}
                        >
                            <HiOutlineSun size="70px" />
                            <Text marginTop="5px" fontWeight="bold">Pusparagam Harapan</Text>
                        </Box>
                    </Link>
                </Grid>
            </Box>
        </Box>
    )
}

export default Guestbook