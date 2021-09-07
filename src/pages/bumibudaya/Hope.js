import { 
    Box, 
    Heading, 
    useBreakpointValue, 
    Flex, 
    Button,
    useDisclosure,
    IconButton,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Image,
    Text
} from "@chakra-ui/react"
import React from "react"
import { SmallTab } from "../../components"
import { ArrowBackIcon } from '@chakra-ui/icons'
import { BsFileText, BsGrid, BsFillInfoCircleFill } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
import { FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import hope from "../../json/hope-zero.json";

const Guestbook = () => {
    const responsiveHeight = useBreakpointValue({ base: "1200px", sm: "1200px", md: "1200px" })
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Box w="100%" height="auto" paddingY={8} bg="gray.50" marginBottom="-50px" display="flex" justifyContent="center">
            
            <Modal isOpen={isOpen} onClose={onClose} size="lg">
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader fontFamily="Mick Kelly" fontWeight="300">Apa itu Featured Hope?</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody textAlign="justify">
                        Featured Hope merupakan kompilasi harapan dan budaya favorit terpilih yang diambil dari data <i>Guest Book</i> yang akan diupdate per harinya.<br /><br />
                        Stay tuned terus ya! Siapa tau ada nama kalian di sini :D 
                    </ModalBody>

                    <ModalFooter>
                        <Button onClick={onClose}>
                            Continue Adventure
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

            <Box display="flex" flexDir="column" width="80%" alignItems="center" position="relative">
                <Flex width="100%" flexDir="column" justifyContent="center" alignItems="center" marginTop={3}>
                    <Heading fontFamily="Mick Kelly" fontWeight="bold" marginBottom={2} size="2xl" bgGradient="linear(to-r, #85665e, #B4887C)" bgClip="text" lineHeight="65px">
                        Featured Hope
                    </Heading>
                </Flex>
                <Box display="flex" flexDir="row" justifyContent="space-between" w="full">
                    <Box>
                        <Link to="/bumibudaya">
                            <SmallTab icon={<ArrowBackIcon />} text="Back" variant="ghost" />
                        </Link>
                    </Box>
                    <Box>
                        <IconButton icon={<BsFillInfoCircleFill />} onClick={onOpen} />
                    </Box>
                </Box>
                {hope.map((hopes) => (
                    <Box 
                        width="100%"
                        height="auto"
                        bgColor="#fff"
                        rounded="md"
                        shadow="md"
                        padding="20px"
                        marginTop="10px"
                        marginBottom="20px"
                    >
                        <Box display="flex" flexDir={{ base: 'column', sm: 'column', md: 'row' }} width="100%">
                            <Box marginRight="20px" bgColor="white" w={{ base: 'full', md: '250px' }} h="auto" display="flex" flexDir="column" alignItems="center" justifyContent="center">
                                <Image boxSize="100px" src={hopes.gambar} />
                                <Text fontWeight="bold" textAlign="center" marginTop={2}>{hopes.nama}</Text>
                                <Text textAlign="center">{hopes.instansi}</Text>
                            </Box>
                            <Box bgColor="white" w="full" h="auto" padding="10px">
                                <Text fontWeight="bold">Kesan &amp; Harapan terhadap Budaya Indonesia</Text>
                                <Text textAlign="justify">{hopes.harapan}</Text>
                                
                                <Text marginTop="10px" fontWeight="bold">Budaya Favorit</Text>
                                <Text textAlign="justify">{hopes.favorit}</Text>
                            </Box>
                        </Box>
                    </Box>
                ))}

                <Box 
                    width="100%"
                    height="auto"
                    bgColor="#fff"
                    rounded="md"
                    shadow="md"
                    padding="20px"
                    marginTop="10px"
                    marginBottom="20px"
                >
                    <Box display="flex" flexDir="row" width="100%">
                        <Box marginRight="20px" bgColor="white" w="250px" h="auto" display="flex" flexDir="column" alignItems="center" justifyContent="center">
                            <Image boxSize="100px" src="https://upload.wikimedia.org/wikipedia/id/9/95/Logo_Institut_Teknologi_Bandung.png" />
                            <Text fontWeight="bold" textAlign="center" marginTop={2}>Nama Pengunjung</Text>
                            <Text textAlign="center">Nama Instansi</Text>
                        </Box>
                        <Box bgColor="white" w="full" h="auto" padding="10px">
                            <Text fontWeight="bold">Kesan &amp; Harapan terhadap Budaya Indonesia</Text>
                            <Text textAlign="justify">Cras sem nisl, hendrerit molestie sodales nec, egestas id erat. Nulla libero mi, venenatis sit amet mollis et, posuere a massa. Proin maximus diam non nisl elementum, in porttitor nibh ornare. Proin feugiat leo at ex feugiat, eget egestas dolor eleifend. Quisque auctor aliquet laoreet. Nullam sollicitudin ligula id felis venenatis, eget scelerisque tortor efficitur. Nam malesuada pretium lacus vel laoreet. </Text>
                            
                            <Text marginTop="10px" fontWeight="bold">Budaya Favorit</Text>
                            <Text textAlign="justify">Cras sem nisl, hendrerit molestie sodales nec, egestas id erat. Nulla libero mi, venenatis sit amet mollis et, posuere a massa. Proin maximus diam non nisl elementum, in porttitor nibh ornare. Proin feugiat leo at ex feugiat, eget egestas dolor eleifend. Quisque auctor aliquet laoreet. Nullam sollicitudin ligula id felis venenatis, eget scelerisque tortor efficitur. Nam malesuada pretium lacus vel laoreet. </Text>
                        </Box>
                    </Box>
                </Box>

                <Box 
                    width="100%"
                    height="auto"
                    bgColor="#fff"
                    rounded="md"
                    shadow="md"
                    padding="20px"
                    marginTop="10px"
                    marginBottom="20px"
                >
                    <Box display="flex" flexDir="row" width="100%">
                        <Box marginRight="20px" bgColor="white" w="250px" h="auto" display="flex" flexDir="column" alignItems="center" justifyContent="center">
                            <Image boxSize="100px" src="https://upload.wikimedia.org/wikipedia/id/9/95/Logo_Institut_Teknologi_Bandung.png" />
                            <Text fontWeight="bold" textAlign="center" marginTop={2}>Nama Pengunjung</Text>
                            <Text textAlign="center">Nama Instansi</Text>
                        </Box>
                        <Box bgColor="white" w="full" h="auto" padding="10px">
                            <Text fontWeight="bold">Kesan &amp; Harapan terhadap Budaya Indonesia</Text>
                            <Text textAlign="justify">Cras sem nisl, hendrerit molestie sodales nec, egestas id erat. Nulla libero mi, venenatis sit amet mollis et, posuere a massa. Proin maximus diam non nisl elementum, in porttitor nibh ornare. Proin feugiat leo at ex feugiat, eget egestas dolor eleifend. Quisque auctor aliquet laoreet. Nullam sollicitudin ligula id felis venenatis, eget scelerisque tortor efficitur. Nam malesuada pretium lacus vel laoreet. </Text>
                            
                            <Text marginTop="10px" fontWeight="bold">Budaya Favorit</Text>
                            <Text textAlign="justify">Cras sem nisl, hendrerit molestie sodales nec, egestas id erat. Nulla libero mi, venenatis sit amet mollis et, posuere a massa. Proin maximus diam non nisl elementum, in porttitor nibh ornare. Proin feugiat leo at ex feugiat, eget egestas dolor eleifend. Quisque auctor aliquet laoreet. Nullam sollicitudin ligula id felis venenatis, eget scelerisque tortor efficitur. Nam malesuada pretium lacus vel laoreet. </Text>
                        </Box>
                    </Box>
                </Box>

                <Box width="100%" display="flex" flexDir={{ base: "column", md: "row" }} justifyContent="space-between" marginY="10px">
                    <Box width={{ md:"50%" }} display="flex" justifyContent="space-between" margin="10px">
                        <Box width="48%">
                            <Link to="/bumibudaya">
                                <Button 
                                    leftIcon={<BsGrid />} 
                                    variant="solid"
                                    shadow="md"
                                    bgColor="white"
                                    fontFamily="Mick Kelly"
                                    fontSize="13px"
                                    fontWeight="200"
                                    width="100%"
                                >
                                    Menu
                                </Button>
                            </Link>
                        </Box>
                        <Box width="48%">
                            <Link to="/bumibudaya/artikel">
                                <Button 
                                    leftIcon={<BsFileText />} 
                                    variant="solid"
                                    shadow="md"
                                    bgColor="white"
                                    fontFamily="Mick Kelly"
                                    fontSize="13px"
                                    fontWeight="200"
                                    width="100%"
                                >
                                    Article
                                </Button>
                            </Link>
                        </Box>
                    </Box>
                    <Box width={{ md:"50%" }} display="flex" justifyContent="space-between" margin="10px">
                        <Box width="48%">
                            <Link to="/bumibudaya/peta">
                                <Button 
                                    leftIcon={<FiMapPin />} 
                                    variant="solid"
                                    shadow="md"
                                    bgColor="white"
                                    fontFamily="Mick Kelly"
                                    fontSize="13px"
                                    fontWeight="200"
                                    width="100%"
                                >
                                    Culture Map
                                </Button>
                            </Link>
                        </Box>
                        <Box width="48%">
                            <Link to="/bumibudaya/hope">
                                <Button 
                                    leftIcon={<FaRegEdit />} 
                                    variant="solid"
                                    shadow="md"
                                    bgColor="white"
                                    fontFamily="Mick Kelly"
                                    fontSize="13px"
                                    fontWeight="200"
                                    width="100%"
                                >
                                    Guestbook
                                </Button>
                            </Link>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Guestbook