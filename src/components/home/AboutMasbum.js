import {
    Box,
    Heading,
    Stack,
} from '@chakra-ui/react'
import React from 'react'

const AboutMasbum = () => {
    return (
        <Box 
            width='100%'
            height='auto'
            bg='white'
            display='flex'
            justifyContent='center'
        >
            <Stack marginTop='50px' marginBottom='190px' align='center'>
                <Stack>
                    <Heading
                        marginBottom='50px' 
                        fontFamily='MonumentExtended-Regular'
                        fontWeight={'bold'}
                        fontSize='35px'
                        color='#330F11'
                    >
                        Tenta<span class='underl'>ng</span> Kami
                    </Heading>
                </Stack>
                <Stack 
                textAlign='center'
                alignContent='center'
                color='#600E0E'
                fontFamily='TextaNarrowAlt-Bold'
                fontSize='25px'
                fontWeight={'normal'}
                maxW={'80vw'}>
                    <p>Massa Bumi 2021 adalah sebutan untuk mahasiswa Fakultas Ilmu dan Teknologi Kebumian (FITB) 
                        di Institut Teknologi Bandung (ITB) angkatan 2021. Massa Bumi 2021 memiliki nama angkatan Amertaraga,
                        yang artinya kekompakan yang akan selalu abadi. Nama angkatan tersebut menumbuhkan semangat pada Massa 
                        Bumi 2021 untuk terus menjaga kekompakan dalam memajukan ilmu kebumian.
                    </p>
                </Stack>
            </Stack>
        </Box> 
    )
}

export default AboutMasbum;