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
    Text
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import ReactAudioPlayer from 'react-audio-player';
import { BsMusicNoteBeamed } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";

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
                <PopoverContent marginRight="20px">
                    <PopoverArrow />
                    <PopoverHeader fontFamily="Mick Kelly" display="flex" flexDir="row" justifyContent="flex-start" alignItems="center"><a href="https://www.youtube.com/watch?v=b73t07QamIs"><FaYoutube fontSize="20px" /></a><Text marginLeft="15px">Niskala - OST Bumi Budaya</Text></PopoverHeader>
                    <PopoverCloseButton />
                    <PopoverBody bgColor="#232323">
                        {/* <ReactAudioPlayer
                            src="/sound/lagu-aksang.wav"
                            controls
                            loop
                            volume={0.5}
                        /> */}
                        <iframe width="100%" height="auto" src="https://www.youtube.com/embed/b73t07QamIs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </PopoverBody>
                    <PopoverFooter textAlign="center" fontStyle="italic" color="gray.500">Selamat menikmati dan bereksplorasi!</PopoverFooter>
                </PopoverContent>
            </Portal>
        </Popover>
    </Box>
  );
}

export default LaguAksang;