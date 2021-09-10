import { Wrap, WrapItem, Image, Box, Center } from "@chakra-ui/react"

const Medpart = () => {
    return (
        <Box
            position="relative" 
            bottom="20px"
            left="0"
            flexDir="column" bgColor="white" h="auto" w="full" display="flex" justifyContent="center" marginBottom="-70px" paddingY={8} alignItems="center" shadow="lg" marginTop="70px" paddingBottom="70px">
            <Center fontFamily="Mick Kelly" fontSize="20px" marginBottom="15px">
                Media Partner
            </Center>
            <Box paddingX="20px">
                    <Image marginX="10px" marginY="5px" display="inline-block" src="/medpart/itbreceh.PNG" height="30px" />
                    <Image marginX="10px" marginY="5px" display="inline-block" src="/medpart/boulevard.PNG" height="30px" />
                    <Image marginX="10px" marginY="5px" display="inline-block" src="/medpart/eventbandung.jpg" height="30px" />
                    <Image marginX="10px" marginY="5px" display="inline-block" src="/medpart/eventcampus.png" height="30px" />
                    <Image marginX="10px" marginY="5px" display="inline-block" src="/medpart/eventmahasiswa.png" height="30px" />
                    <Image marginX="10px" marginY="5px" display="inline-block" src="/medpart/inilahonline.PNG" height="30px" />
                    <Image marginX="10px" marginY="5px" display="inline-block" src="/medpart/seputarinfo.png" height="30px" />
                    <Image marginX="10px" marginY="5px" display="inline-block" src="/medpart/yotbandung.PNG" height="30px" />
            </Box>
        </Box>
    )
}

export default Medpart
