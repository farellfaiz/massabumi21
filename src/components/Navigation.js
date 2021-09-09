import { Menu } from "./";
import { Skeleton, Box, Flex, Spacer, Image, IconButton, useMediaQuery, useBreakpointValue } from "@chakra-ui/react"
import { FaUsers } from "react-icons/fa"
import { Link } from "react-router-dom";

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
                        <Image src="/img/rounded.png" alt="" width={phoneSize ? "78px" : "78px"} marginTop={phoneSize ? "-15px" : "0px"} />
                    </Link>
                </Box>
                <Spacer />
                <Box>
                    {/* <Link to="/contact">
                        <IconButton display={btnDisplay} aria-label="Contact Us" icon={<FaPhoneAlt fontSize="13px" />} marginRight={2} variant="ghost" />
                    </Link> */}
                    <Link to="/family">
                        <IconButton aria-label="Shop" icon={<FaUsers fontSize="13px" />} />
                    </Link>
                </Box>
            </Flex>
        </Box>
    )
}

export default Navigation
