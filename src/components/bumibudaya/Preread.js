import { useState, useEffect } from 'react';
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
import { Carousel } from '../../components';

const Preread = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [showModal, setShowModal] = useState(false)
    
      useEffect(() => {
        const timeId = setTimeout(() => setShowModal(true), 1000)
    
        return () => clearTimeout(timeId)
      })
  
  return (
    <Box position="fixed" bottom="100px" right="40px" zIndex="20">

        <Modal isOpen={showModal} onClose={onClose} size="xl">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader fontFamily="Mick Kelly">Selamat Datang!</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Carousel />
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Mulai Eksplorasi!
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
    </Box>
  );
}

export default Preread;