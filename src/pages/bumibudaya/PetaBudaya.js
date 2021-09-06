import { Box, Heading, useBreakpointValue, Flex, Button } from "@chakra-ui/react"
import React from "react"
import { SmallTab } from "../../components"
import { ArrowBackIcon } from '@chakra-ui/icons'
import { BsFileText, BsBook } from "react-icons/bs";
import { HiOutlineSun } from "react-icons/hi";
import { BiDonateHeart } from "react-icons/bi";
import { FaRegEdit } from "react-icons/fa";

const PetaBudaya = () => {
    const responsiveHeight = useBreakpointValue({ base: "900px", sm: "400px", md: "1000px" })

    return (
        <Box w="100%" height={responsiveHeight} paddingY={8} bg="gray.50" marginBottom="-50px" display="flex" justifyContent="center">
            <Box display="flex" flexDir="column" width="80%" alignItems="center" position="relative">
                <Flex width="100%" flexDir="column" justifyContent="center" alignItems="center" marginTop={3}>
                    <Heading fontFamily="Mick Kelly" fontWeight="bold" marginBottom={2} size="2xl" bgGradient="linear(to-r, #85665e, #B4887C)" bgClip="text" lineHeight="65px">
                        Peta Budaya
                    </Heading>
                </Flex>
                <Box position="absolute" top="9%" left="0">
                    <SmallTab icon={<ArrowBackIcon />} text="Menu" variant="ghost" />
                </Box>
                <Box 
                    width="100%"
                    height="580px"
                    bgColor="#4D6A79"
                    rounded="md"
                    shadow="md"
                    padding="10px"
                    marginTop="50px"
                >
                    <iframe src="https://www.google.com/maps/d/embed?mid=1vxz_KEGWq2zczoxl7eAP2GQmJkoHytzc" width="100%" height="100%"></iframe>
                </Box>
                <Box width="100%" display="flex" flexDir={{ base: "column", md: "row" }} justifyContent="space-between" marginY="10px">
                    <Box width={{ md:"50%" }} display="flex" justifyContent="space-between" margin="10px">
                        <Button 
                            leftIcon={<BsFileText />} 
                            variant="solid"
                            shadow="md"
                            bgColor="white"
                            width="48%"
                        >
                            Articles
                        </Button>
                        <Button 
                            leftIcon={<FaRegEdit />} 
                            variant="solid"
                            shadow="md"
                            bgColor="white"
                            width="48%"
                        >
                            Guest Book
                        </Button>
                    </Box>
                    <Box width={{ md:"50%" }} display="flex" justifyContent="space-between" margin="10px">
                        <Button 
                            leftIcon={<HiOutlineSun />} 
                            variant="solid"
                            shadow="md"
                            bgColor="white"
                            width="48%"
                        >
                            Featured Hope
                        </Button>
                        <Button 
                            leftIcon={<BiDonateHeart />} 
                            variant="solid"
                            shadow="md"
                            bgColor="white"
                            width="48%"
                        >
                            Donation
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default PetaBudaya