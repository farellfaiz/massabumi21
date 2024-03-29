import { Box, Center, Heading, Spacer, Flex, Textarea, Button } from "@chakra-ui/react"
import { InputBox } from "./../components"
import {
    FaUserAlt,
    FaPaperPlane,
    FaRegEnvelope,
    FaPhoneAlt
} from 'react-icons/fa'


const Contact = () => {

    return (
        <Box bg="gray.50" w="100%" h="850px" paddingY={7} paddingX={4}>
            <Center>
                <Heading size="lg">
                    Contact Us
                </Heading>
            </Center>
            <Center>
                <form action="https://formsubmit.co/51dcb6d7815195eed5b6bcc7c66e3d5a" method="POST">
                    <Flex w="600px" justifyContent="center" alignItems="center" marginY={7} flexDir="column" >
                        <Flex w="100%" justifyContent="center" alignItems="center">
                            <InputBox icon={<FaUserAlt color="#CBD5E0" />} type="text" placeholder="Name" name="Name" />
                            <Spacer />
                            <InputBox icon={<FaRegEnvelope color="#CBD5E0" />} type="email" placeholder="Email" name="Email" />
                        </Flex>
                        <Flex flexDir="column" w="100%" justifyContent="center" alignItems="center" paddingX={3} marginTop="-10px">
                            <InputBox icon={<FaPhoneAlt color="#CBD5E0" />} type="number" placeholder="Phone Number" name="Phone Number" />
                            <Textarea bg="white" height="200px" placeholder="Message" name="Message" />
                            <Button leftIcon={<FaPaperPlane />} w="100%" marginY={3} colorScheme="telegram" type="submit">
                                Send
                            </Button>
                        </Flex>
                    </Flex>
                </form>
            </Center>
        </Box>
    )
}

export default Contact
