import { 
    Box, 
    Heading, 
    Flex, 
    Button, 
    IconButton,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Center,
    Text,
    Image
} from "@chakra-ui/react"
import React from "react"
import { SmallTab } from "../../components"
import { ArrowBackIcon } from '@chakra-ui/icons'
import { BsFileText, BsFillInfoCircleFill, BsMicFill, BsMic, BsGrid } from "react-icons/bs";
import { HiOutlineSun } from "react-icons/hi";
import { FiMapPin } from "react-icons/fi";
import { FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Medpart } from "../../components"

const PetaBudaya = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Box w="100%" height="auto" paddingY={8} bg="gray.50" marginBottom="-50px" display="flex" justifyContent="center">
            <Image src="/img/bg.png" position="fixed" top="0" right={["-200px", "-200px", "-200px", "0"]} alt="" />
            <Image src="/img/bg.png" position="fixed" left={["-200px", "-200px", "-200px", "0"]} bottom="0" transform="rotate(180deg)" alt="" />
            <Modal isOpen={isOpen} onClose={onClose} size="lg">
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader fontFamily="Mick Kelly" fontWeight="300">Sekilas tentang Peta Budaya</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Accordion allowToggle defaultIndex={[0]} >
                            <AccordionItem>
                                <h2>
                                <AccordionButton>
                                    <Box flex="1" textAlign="left" fontWeight="600" display="flex" flexDir="row">
                                        <Box paddingTop="4.5px">
                                            <FiMapPin />
                                        </Box>
                                        <Text marginLeft={2}>Peta Budaya</Text>
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    Peta Budaya berisikan kebudayaan-kebudayaan unik dan menarik berdasarkan persebaran mahasiswa FITB 2021, lho!<br /><br />
                                    Yuk kita jelajahi budaya yang ada di daerah mereka! :D
                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <h2>
                                <AccordionButton>
                                    <Box flex="1" textAlign="left" fontWeight="600" display="flex" flexDir="row">
                                        <Box paddingTop="4.5px">
                                            <BsMic />
                                        </Box>
                                        <Text marginLeft={2}>Podcast</Text>
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    Sambil menjelajahi budaya dan keindahan tiap daerah, yuk kita sama-sama dengarkan podcast yang membahas tentang isu budaya yang ada di Indonesia!<br /><br />
                                    Pasti seru, insightful, dan ga ngebosenin!
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
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
                        Peta Budaya
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
                <Box 
                    width="100%"
                    height="580px"
                    bgColor="#4D6A79"
                    rounded="md"
                    shadow="md"
                    padding="10px"
                    marginTop="10px"
                >
                    <iframe src="https://www.google.com/maps/d/embed?mid=1vxz_KEGWq2zczoxl7eAP2GQmJkoHytzc" width="100%" height="100%"></iframe>
                </Box>
                <Box marginY={4} w="full">
                    <Accordion allowToggle>
                        <AccordionItem>
                            <AccordionButton rounded="md" shadow="md" marginTop="2px" bgColor="white">
                                <Box flex="1" textAlign="left">
                                    <Center>
                                        <BsMicFill /><Text marginLeft={2} fontFamily="Mick Kelly">Podcast</Text>
                                    </Center>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            <AccordionPanel pb={4}>
                                <Box bgColor="white" padding="10px" rounded="md" shadow="xl">
                                    <iframe src="https://open.spotify.com/embed/episode/0nIMRbyHFdNHSxM1Nto52q?theme=0" width="100%" height="232" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                                    <Center>
                                        <Text marginTop={2} color="gray.400" textAlign="center">
                                            <i>
                                                Jangan menutup tab <b>Podcast</b> ketika sedang mendengarkan :D<br />
                                                Kalau lagi nyalain lagu aksang FITB, jangan lupa dipause dulu yaa!
                                            </i>
                                        </Text>
                                    </Center>
                                </Box>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
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
                                    Artikel
                                </Button>
                            </Link>
                        </Box>
                    </Box>
                    <Box width={{ md:"50%" }} display="flex" justifyContent="space-between" margin="10px">
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
                        <Box width="48%">
                            <Link to="/bumibudaya/harapan">
                                <Button 
                                    leftIcon={<HiOutlineSun />} 
                                    variant="solid"
                                    shadow="md"
                                    bgColor="white"
                                    fontFamily="Mick Kelly"
                                    fontSize="13px"
                                    fontWeight="200"
                                    width="100%"
                                >
                                    Harapan
                                </Button>
                            </Link>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default PetaBudaya