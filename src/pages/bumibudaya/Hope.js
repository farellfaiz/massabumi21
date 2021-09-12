import { 
    Box, 
    Heading, 
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
    Text,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from "@chakra-ui/react"
import React from "react"
import { SmallTab } from "../../components"
import { ArrowBackIcon } from '@chakra-ui/icons'
import { BsFileText, BsGrid, BsFillInfoCircleFill } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
import { FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import hopezero from "../../json/hope-zero.json";

const Guestbook = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Box w="100%" height="auto" paddingY={8} bg="gray.50" marginBottom="-50px" display="flex" justifyContent="center">
            
            <Image src="/img/bg.png" position="fixed" top="0" right={["-200px", "-200px", "-200px", "0"]} alt="" />
            <Image src="/img/bg.png" position="fixed" left={["-200px", "-200px", "-200px", "0"]} bottom="0" transform="rotate(180deg)" alt="" />

            <Modal isOpen={isOpen} onClose={onClose} size="lg">
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader fontFamily="Mick Kelly" fontWeight="300">Apa itu Pusparagam Harapan?</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody textAlign="justify">
                        Laman ini berisikan kompilasi beberapa harapan dan budaya favorit terpilih yang diambil dari data <i>Buku Tamu</i> yang akan diupdate per harinya.<br /><br />
                        Stay tuned terus ya! Siapa tau ada nama kalian di sini :D 
                    </ModalBody>

                    <ModalFooter>
                        <Button onClick={onClose}>
                            Lanjutkan Eksplorasi
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

            <Box display="flex" flexDir="column" width="80%" alignItems="center" position="relative">
                <Flex width="100%" flexDir="column" justifyContent="center" alignItems="center" marginTop={3}>
                    <Heading fontFamily="Mick Kelly" fontWeight="bold" marginBottom={2} size="2xl" bgGradient="linear(to-r, #85665e, #B4887C)" bgClip="text" lineHeight="65px">
                        Pusparagam Harapan
                    </Heading>
                </Flex>
                <Box display="flex" flexDir="row" justifyContent="space-between" w="full">
                    <Box>
                        <Link to="/bumibudaya">
                            <SmallTab icon={<ArrowBackIcon />} text="Kembali" variant="ghost" />
                        </Link>
                    </Box>
                    <Box>
                        <IconButton shadow="md" bg="white" icon={<BsFillInfoCircleFill />} onClick={onOpen} />
                    </Box>
                </Box>

                <Accordion defaultIndex={[0]} allowMultiple allowToggle w="full" marginTop={2}>
                    {/* <AccordionItem>
                        <h2>
                        <AccordionButton marginBottom={2} marginTop={2}>
                            <Box flex="1" textAlign="Center" fontFamily="Mick Kelly">
                            Pratinjau
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                        {hopezero.map((hopes) => (
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
                        </AccordionPanel>
                    </AccordionItem> */}
                    
                    <AccordionItem>
                        <h2>
                        <AccordionButton shadow="md" rounded="3xl" marginBottom={2} marginTop={2} bgColor="white" colorScheme="teal">
                            <Box flex="1" textAlign="Center" fontFamily="Mick Kelly">
                                Day 1
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            {hopezero.map((hopes) => (
                                <Box 
                                    width="100%"
                                    height="auto"
                                    minH="250px"
                                    bgColor="#fff"
                                    rounded="md"
                                    shadow="md"
                                    padding="20px"
                                    marginTop="10px"
                                    marginBottom="20px"
                                >
                                    <Box display="flex" flexDir={{ base: 'column', sm: 'column', md: 'row' }} width="100%">
                                        <Box marginRight="20px" bgColor="white" w={{ base: 'full', md: '250px' }} h="auto" minH="250px" display="flex" flexDir="column" alignItems="center" justifyContent="center">
                                            <Image w="100px" h="auto" src={hopes.gambar} />
                                            <Text fontWeight="bold" textAlign="center" marginTop={2}>{hopes.nama}</Text>
                                            <Text textAlign="center">{hopes.instansi}</Text>
                                        </Box>
                                        <Box bgColor="white" w="full" h="auto" minH="250px" padding="10px" display="flex" justifyContent="center" flexDir="column">
                                            <Text fontWeight="bold">Kesan &amp; Harapan terhadap Budaya Indonesia</Text>
                                            <Text textAlign="justify">{hopes.harapan}</Text>
                                            
                                            <Text marginTop="10px" fontWeight="bold">Budaya Favorit</Text>
                                            <Text textAlign="justify">{hopes.favorit}</Text>
                                        </Box>
                                    </Box>
                                </Box>
                            ))}
                        </AccordionPanel>
                    </AccordionItem>
                    
                    <AccordionItem>
                        <h2>
                        <AccordionButton shadow="md" rounded="3xl" marginBottom={2} marginTop={2} bgColor="white">
                            <Box flex="1" textAlign="Center" fontFamily="Mick Kelly">
                            Day 2
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Box textAlign="center" fontStyle="italic" color="gray.500">
                                Akan diperbarui segera! :D<br />
                                Jangan lupa isi <b><u><Link to="/bumibudaya/bukutamu">Buku Tamu</Link></u></b>!
                            </Box>
                        </AccordionPanel>
                    </AccordionItem>
                    
                    {/* <AccordionItem>
                        <h2>
                        <AccordionButton shadow="md" rounded="3xl" marginBottom={2} marginTop={2} bgColor="white">
                            <Box flex="1" textAlign="Center" fontFamily="Mick Kelly">
                            Day 3
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                        Tes
                        </AccordionPanel>
                    </AccordionItem>
                    
                    <AccordionItem>
                        <h2>
                        <AccordionButton shadow="md" rounded="3xl" marginBottom={2} marginTop={2} bgColor="white">
                            <Box flex="1" textAlign="Center" fontFamily="Mick Kelly">
                            Day 4
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                        Tes
                        </AccordionPanel>
                    </AccordionItem>
                    
                    <AccordionItem>
                        <h2>
                        <AccordionButton shadow="md" rounded="3xl" marginBottom={2} marginTop={2} bgColor="white">
                            <Box flex="1" textAlign="Center" fontFamily="Mick Kelly">
                            Day 5
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                        Tes
                        </AccordionPanel>
                    </AccordionItem>
                    
                    <AccordionItem>
                        <h2>
                        <AccordionButton shadow="md" rounded="3xl" marginBottom={2} marginTop={2} bgColor="white">
                            <Box flex="1" textAlign="Center" fontFamily="Mick Kelly">
                            Day 6
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                        Tes
                        </AccordionPanel>
                    </AccordionItem>
                    
                    <AccordionItem>
                        <h2>
                        <AccordionButton shadow="md" rounded="3xl" marginBottom={2} marginTop={2} bgColor="white">
                            <Box flex="1" textAlign="Center" fontFamily="Mick Kelly">
                            Day 7
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                        Tes
                        </AccordionPanel>
                    </AccordionItem>
                    
                    <AccordionItem>
                        <h2>
                        <AccordionButton shadow="md" rounded="3xl" marginBottom={2} marginTop={2} bgColor="white">
                            <Box flex="1" textAlign="Center" fontFamily="Mick Kelly">
                            Day 8
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                        Tes
                        </AccordionPanel>
                    </AccordionItem> */}
                    </Accordion>

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
                                    Artikel
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
                                    Peta Budaya
                                </Button>
                            </Link>
                        </Box>
                        <Box width="48%">
                            <Link to="/bumibudaya/bukutamu">
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
                                    Buku Tamu
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