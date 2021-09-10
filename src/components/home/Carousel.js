import { Image, Container, Center, Box, useBreakpointValue } from "@chakra-ui/react"
import { Carousel } from "react-responsive-carousel";

const KayanaCarousel = () => {
    const dynamicSize = useBreakpointValue({ base: "300px", sm: "450px", md: "500px" })
    return (
        <Container>
            <Center>
                <Box marginX={10} shadow="lg">
                    <Carousel width={dynamicSize} dynamicHeight={true} autoPlay={false} infiniteLoop emulateTouch showIndicators showStatus={false} showThumbs={false}>
                        <Box borderRadius="md">
                            <Image borderRadius="md" alt="" src="preread/1.png" />
                        </Box>
                        <Box borderRadius="md">
                            <Image borderRadius="md" alt="" src="preread/2.png" />
                        </Box>
                        <Box borderRadius="md">
                            <Image borderRadius="md" alt="" src="preread/3.png" />
                        </Box>
                    </Carousel>
                </Box>
            </Center>
        </Container>
    )
}

export default KayanaCarousel
