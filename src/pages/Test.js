import { Box, Center, useBreakpointValue } from "@chakra-ui/react"
import React from "react"

const Test = () => {
    const responsiveHeight = useBreakpointValue({ base: "900px", sm: "400px", md: "550px" })
    const dynamicSize = useBreakpointValue({ base: "300px", sm: "450px", md: "700px" })

    return (
        <Box w="100%" height={responsiveHeight} paddingY={8} bg="gray.50" marginBottom="-50px" display="flex" justifyContent="center">
            <iframe src="https://www.google.com/maps/d/embed?mid=1oLaZBlQ3U2RlnKz6CAyMcZzVeQA1mj9X" width="1000" height="480"></iframe>
        </Box>
    )
}

export default Test
