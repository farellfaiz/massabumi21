import { Box, useBreakpointValue } from "@chakra-ui/react"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Hero } from "../components"
import AboutMasbum from "../components/home/AboutMasbum"
import DetailMhs from "../components/home/DetailMhs";
import LogoFilosofi from "../components/home/LogoFilosofi";


const Home = () => {
    const responsiveHeight = useBreakpointValue({ base: "900px", sm: "400px", md: "550px" })
    const dynamicSize = useBreakpointValue({ base: "300px", sm: "450px", md: "700px" })

    return (
        <div>
            <Box paddingY={8} minHeight={'100vh'} id="bg-masbum" bg="gray.50" style={{  
                backgroundImage: "url(" + "./img/MasBum.png" + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover' ,
                backgroundRepeat: 'no-repeat',
                }}>
                <Hero />
            </Box>
            <AboutMasbum />
            <DetailMhs />
            <LogoFilosofi />
        </div>
    )
}

export default Home
