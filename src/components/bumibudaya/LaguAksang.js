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
    Portal
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import ReactAudioPlayer from 'react-audio-player';
import { BsMusicNoteBeamed } from "react-icons/bs";

function LaguAksang() {
  let audio = new Audio("/sound/lagu-aksang.wav")

  const start = () => {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause()
    }
    
  }

  return (
    <Box position="fixed" bottom="40px" right="40px" zIndex="20">
        <Popover>
            <PopoverTrigger>
                <IconButton bgGradient="linear(to-r, #85665e, #B4887C)" color="white" icon={<BsMusicNoteBeamed />} transition="all 0.3s" isRound w="60px" h="60px" shadow="md" _active={{ bgGradient: "linear(to-r, #85665e, #B4887C)", transition: "all 0.3s" }} _hover={{ bgGradient: "linear(to-r, #85665e, #B4887C)", transition: "all 0.3s" }} />
            </PopoverTrigger>
            <Portal>
                <PopoverContent marginRight="40px">
                    <PopoverArrow />
                    <PopoverHeader fontFamily="Mick Kelly">Lagu Aksi Angkatan FITB 2021</PopoverHeader>
                    <PopoverCloseButton />
                    <PopoverBody bgColor="#232323">
                        <ReactAudioPlayer
                            src="/sound/lagu-aksang.wav"
                            autoPlay
                            controls
                            loop
                        />
                    </PopoverBody>
                    <PopoverFooter textAlign="center" fontStyle="italic" color="gray.500">Enjoy and Happy Exploring!</PopoverFooter>
                </PopoverContent>
            </Portal>
        </Popover>
    </Box>
  );
}

export default LaguAksang;