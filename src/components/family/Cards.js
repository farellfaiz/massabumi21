import { Box, Flex, Image, Link, chakra } from "@chakra-ui/react"

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
                h="250px"
                _hover={{ shadow: "xl", transition: "all 0.3s", transform: "translate(0px, -7px)" }}
                transition="all 0.3s"
            >
                <Image
                    w="full"
                    h={40}
                    fit="cover"
                    src={img}
                    alt=""
                />
                <Box display="flex" flexDir="column" textAlign="center" justifyContent="center" h="85px">
                    <Link
                        display="block"
                        fontSize="md"
                        color="gray.800"
                        fontWeight="bold"
                    >
                        {title}
                    </Link>
                    <chakra.span
                        fontSize="sm"
                        color="gray.700"
                    >
                        {desc}
                    </chakra.span>
                </Box>
            </Box>
        </Flex>
    )
}

export default Cards
