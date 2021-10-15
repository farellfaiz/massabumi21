import { Box, Flex, Image, Link, chakra, Text } from "@chakra-ui/react"

const Cards = ({ img, title, desc }) => {
    return (
        <Flex
            bg="#F9FAFB"
            w="230px"
            alignItems="center"
            justifyContent="center"
        >
            <Box
                w="xs"
                bg="white"
                shadow="lg"
                rounded="lg"
                overflow="hidden"
                mx="auto"
                h="260px"
                _hover={{ shadow: "xl", transition: "all 0.3s", transform: "translate(0px, -7px)" }}
                transition="all 0.3s"
                position="relative"
            >
                <Image
                    w="full"
                    h={40}
                    fit="cover"
                    src={img}
                    alt=""
                />
                <Box display="flex" flexDir="column" textAlign="center" justifyContent="center" h="95px">
                    
                    {/* <chakra.span
                        fontSize="sm"
                        color="gray.500"
                    >
                        16321025
                    </chakra.span> */}
                    <Link
                        display="block"
                        fontSize="md"
                        color="gray.800"
                        fontWeight="bold"
                        _hover={{ textDecoration:"none" }}
                    >
                        {title}
                    </Link>
                    <chakra.span
                        fontSize="sm"
                        color="gray.700"
                    >
                        {desc}
                    </chakra.span>
                    {/* <Text position="absolute" zIndex="0" fontSize="21px" bottom="0" right="3" color="#cacbcc" fontWeight="bold" fontStyle="italic">
                        16321025
                    </Text> */}
                </Box>
            </Box>
        </Flex>
    )
}

export default Cards
