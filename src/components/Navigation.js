import { Menu } from "./";
import { Skeleton, Box, Flex, Spacer, Image, IconButton, useMediaQuery, useBreakpointValue, background, color } from "@chakra-ui/react"
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
            position="sticky"
            top="0"
            bg="white"
            zIndex={10}
            w="100%"
            shadow="md"
            height='90px'
        >
            <Flex justifyContent="left">
                <Box position="absolute" top={phoneSize ? "8px" : "-8px"}>
                    <Link to="/">
                        <Image src="/img/logo512.png" alt="" width={phoneSize ? "60px" : "65px"} marginTop={phoneSize ? "-6px" : "20px"} marginLeft={71}/>
                    </Link>
                </Box>
                <Spacer />
                <ul id='main-nav'>
                    <li><a href='/'>Beranda</a></li>
                    <li><a href='/comingsoon'>Kepengurusan</a></li>
                    <li><a href='/comingsoon'>Layanan Mahasiswa</a></li>
                    <li><a href='/comingsoon'>Berita</a></li>
                    <li><a href='/comingsoon'>Agenda</a></li>
                    <li><a href='/bumibudaya'>Campaign</a></li>
                </ul>
            </Flex>
        </Box>
    )
}

export default Navigation
