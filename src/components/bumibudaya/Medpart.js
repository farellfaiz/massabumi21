import { Wrap, WrapItem, Image, Box, Center } from "@chakra-ui/react"

const Medpart = () => {
    return (
        <Box
            position="relative" 
            bottom="20px"
            left="0"
            flexDir="column" bgColor="white" w="100vw" display="flex" justifyContent="center" marginBottom="-70px" paddingY={8} alignItems="center" shadow="lg" marginTop="70px" paddingBottom="70px">
            <Center fontWeight="" fontFamily="Mick Kelly" fontSize="20px" marginBottom="15px">
                Media Partner
            </Center>
            <Wrap display="display" alignItems="center" spacing="30px" justify="Center">
                <WrapItem>
                    <Image src="/medpart/itbreceh.png" height="30px" />
                </WrapItem>
                <WrapItem>
                    <Image src="/medpart/boulevard.png" height="30px" />
                </WrapItem>
                <WrapItem>
                    <Image src="/medpart/eventbandung.jpg" height="30px" />
                </WrapItem>
                <WrapItem>
                    <Image src="/medpart/eventcampus.png" height="30px" />
                </WrapItem>
                <WrapItem>
                    <Image src="/medpart/eventmahasiswa.png" height="30px" />
                </WrapItem>
                <WrapItem>
                    <Image src="/medpart/inilahonline.png" height="30px" />
                </WrapItem>
                <WrapItem>
                    <Image src="/medpart/seputarinfo.png" height="30px" />
                </WrapItem>
                <WrapItem>
                    <Image src="/medpart/yotbandung.png" height="30px" />
                </WrapItem>
            </Wrap>
        </Box>
    )
}

export default Medpart
