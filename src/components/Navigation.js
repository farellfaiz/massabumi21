import { Menu } from "./";
import { Skeleton, Box, Flex, Spacer, Image, IconButton, useMediaQuery, useBreakpointValue } from "@chakra-ui/react"
import { FaUsers } from "react-icons/fa"
import { Link } from "react-router-dom";
import {
    IoEarth
} from "react-icons/io5";

const Navigation = () => {
    const [phoneSize] = useMediaQuery("(max-width: 500px)")
    const btnDisplay = useBreakpointValue({ base: "none", md: "inline-flex" })

    return (
        <Box 
            paddingX={10}
            paddingY={3}
            position="sticky"
            top="0"
            bg="white"
            zIndex={10}
            w="100%"
            shadow="md"
        >
            <Flex justifyContent="center">
                <Box>
                    <Menu />
                </Box>
                <Spacer />
                <Box position="absolute" top={phoneSize ? "8px" : "-8px"}>
                    <Link to="/">
                        <Image src="/img/logo.png" alt="" width={phoneSize ? "60px" : "60px"} marginTop={phoneSize ? "-6px" : "10px"} />
                    </Link>
                </Box>
                <Spacer />
                <Box>
                    <Link to="/family">
                        <IconButton display={btnDisplay} aria-label="Contact Us" icon={<FaUsers fontSize="13px" />} marginRight={2} variant="ghost" />
                    </Link>
                    <Link to="/bumibudaya">
                        <IconButton aria-label="Shop" icon={<IoEarth fontSize="13px" />} />
                    </Link>
                </Box>
            </Flex>
        </Box>
    )
}

export default Navigation
