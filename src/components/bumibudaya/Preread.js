import React from 'react';
import {
    IconButton, 
    Box,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    Button,
    Portal,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import ReactAudioPlayer from 'react-audio-player';
import { BsFillQuestionCircleFill } from "react-icons/bs";

const Preread = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box position="fixed" bottom="100px" right="40px" zIndex="20">
        <IconButton variant="sghost" onClick={onOpen} icon={<BsFillQuestionCircleFill />} transition="all 0.3s" isRound w="60px" h="60px"  />

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Pudarnya Budaya</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant="ghost">Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
    </Box>
  );
}

export default Preread;