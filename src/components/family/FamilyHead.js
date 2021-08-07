import { Heading, Text, Box, Flex } from '@chakra-ui/layout'
import React from 'react'

const FamilyHead = () => {
    return (
        <Box marginBottom={6}>
            <Flex width="100%" flexDir="column" justifyContent="center" alignItems="center">
                <Text marginTop={7} fontWeight="700" color="#614943" maxW="500px" marginX={5} align="center" fontSize="lg">
                    Perkenalkan,
                </Text>
                <Heading fontWeight="black" marginBottom={2} size="2xl" bgGradient="linear(to-r, #604842, #B4887C)" bgClip="text">
                    Massa Bumi 2021
                </Heading>
            </Flex>
        </Box>
    )
}

export default FamilyHead
