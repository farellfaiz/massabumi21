import { 
    Box, 
    Heading, 
    useBreakpointValue, 
    Flex, 
    Button,
    Grid,
    Skeleton,
    useDisclosure,
    Text
} from "@chakra-ui/react"
import React from "react"
import { Cards, CardAr } from '../../components'
import { SmallTab } from "../../components"
import { ArrowBackIcon } from '@chakra-ui/icons'
import { BsFileText, BsBook } from "react-icons/bs";
import { BiBookContent } from "react-icons/bi";
import { HiOutlineSun } from "react-icons/hi";
import { FiMapPin } from "react-icons/fi";
import { RiRoadMapLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import data from "../../json/artikel.json"
import { FaRegEdit } from "react-icons/fa"

const Guestbook = () => {
    const responsiveHeight = useBreakpointValue({ base: "1200px", sm: "1200px", md: "1200px" })
    const responsiveGrid = useBreakpointValue({ base: "repeat(1, 1fr)", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(2, 1fr)" })

    return (
        <Box w="100%" h="auto" paddingY={8} bg="gray.50" marginBottom="-50px" display="flex" justifyContent="center">
            
            <Box marginBottom="40px" display="flex" flexDir="column" width="80%" alignItems="center" position="relative">
                <Flex width="100%" flexDir="column" justifyContent="center" alignItems="center" marginTop={3}>
                    <Heading fontFamily="Mick Kelly" fontWeight="bold" marginBottom={6} size="2xl" bgGradient="linear(to-r, #85665e, #B4887C)" bgClip="text" lineHeight="65px">
                        Bumi Budaya
                    </Heading>
                </Flex>

                <Grid h="auto" templateColumns="repeat(2, 1fr)" gap="50px">
                    <Link to="/bumibudaya/peta">
                        <Box display="flex" justifyContent="center" alignItems="center" flexDir="column" bgColor="white" rounded="lg" shadow="lg" boxSize="230px">
                            <RiRoadMapLine size="70px" />
                            <Text marginTop="5px" fontWeight="bold">Culture Map</Text>
                        </Box>
                    </Link>
                    <Link to="/bumibudaya/artikel">
                        <Box display="flex" justifyContent="center" alignItems="center" flexDir="column" bgColor="white" rounded="lg" shadow="lg" boxSize="230px">
                            <BsFileText size="70px" />
                            <Text marginTop="5px" fontWeight="bold">Articles</Text>
                        </Box>
                    </Link>
                    <Link to="/bumibudaya/guestbook">
                        <Box display="flex" justifyContent="center" alignItems="center" flexDir="column" bgColor="white" rounded="lg" shadow="lg" boxSize="230px">
                            <BiBookContent size="70px" />
                            <Text marginTop="5px" fontWeight="bold">Guest Book</Text>
                        </Box>
                    </Link>
                    <Link to="/bumibudaya/hope">
                        <Box display="flex" justifyContent="center" alignItems="center" flexDir="column" bgColor="white" rounded="lg" shadow="lg" boxSize="230px">
                            <HiOutlineSun size="70px" />
                            <Text marginTop="5px" fontWeight="bold">Featured Hope</Text>
                        </Box>
                    </Link>
                </Grid>

            </Box>
        </Box>
    )
}

export default Guestbook