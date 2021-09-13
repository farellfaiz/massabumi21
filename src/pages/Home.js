import { Box, useBreakpointValue } from "@chakra-ui/react"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Hero } from "../components"


const Home = () => {
    const responsiveHeight = useBreakpointValue({ base: "900px", sm: "400px", md: "550px" })
    const dynamicSize = useBreakpointValue({ base: "300px", sm: "450px", md: "700px" })

    return (
        <Box w="100%" height="auto" paddingY={8} bg="gray.50" marginBottom="-50px">
            <Hero />
        </Box>
    )
}

export default Home
