import { 
    Box, 
    Heading, 
    Flex, 
    Button, 
    Image
} from "@chakra-ui/react"
import React from "react"
import { SmallTab } from "../../../components"
import { ArrowBackIcon } from '@chakra-ui/icons'
import { BsFileText, BsGrid } from "react-icons/bs";
import { HiOutlineSun } from "react-icons/hi";
import { FiMapPin } from "react-icons/fi";
import { Link } from "react-router-dom";
import { BiBookContent } from "react-icons/bi";
import ReactGA from 'react-ga'

const FestivalKrakatau = () => {
    const judul = "Misteri di balik Situs Watu Tulis Cipaku"

    return (
        <Box w="100%" minHeight="1200px" paddingY={8} bg="gray.50" marginBottom="-50px" display="flex" justifyContent="center">
            <Image src="/img/bg.png" position="fixed" top="0" right={["-100px", "-100px", "-100px", "0"]} alt="" />
            <Image src="/img/bg.png" position="fixed" left={["-200px", "-200px", "-200px", "0"]} bottom="0" transform="rotate(180deg)" alt="" />
            <Box display="flex" flexDir="column" width="80%" alignItems="center" position="relative">
                <Flex width="100%" flexDir="column" justifyContent="center" alignItems="center" marginTop={3}>
                    <Heading fontFamily="Mick Kelly" fontWeight="bold" marginBottom={2} size="2xl" bgGradient="linear(to-r, #85665e, #B4887C)" bgClip="text" lineHeight="65px" textAlign="center">
                        {judul}
                    </Heading>
                </Flex>
                <Box alignSelf="flex-start">
                    <Link to="/bumibudaya/artikel">
                        <SmallTab icon={<ArrowBackIcon />} text="Kembali" variant="ghost" />
                    </Link>
                </Box>

                {/* Konten */}

                <Box 
                    width="100%"
                    height="auto"
                    bgColor="#fff"
                    rounded="md"
                    shadow="md"
                    padding="20px"
                    marginTop="10px"
                    textAlign="justify"
                    className="artikel"
                >
                    <p>Prasasti itu, jika mendengar kata itu, hati di sini pasti sudah tahu artinya.  Sebuah batu yang bertuliskan kalimat dalam bahasa kuno dan huruf yang merupakan peninggalan manusia masa lalu.</p><br />
                    <p><a href=""><img src="https://1.bp.blogspot.com/-Htla4kk3MPo/XgA2uuIbMRI/AAAAAAAABGo/LJpL-5OAVDwjjUfHPNjApUKTMaqGkBDhACLcBGAsYHQ/w1200-h630-p-k-no-nu/IMG_0290.jpg" alt="" /></a></p><br />
                    <p>Berbentuk sebongkah batu besar yang terdiri dari sebuah altar dan jonggol, prasasti ini telah diteliti oleh para arkeolog sejak tahun 1983. Bagian altar, konon digunakan sebagai tempat berdoa dan bersemedi yang menjadi media hubungan antara manusia dan Tuhan.  Sementara di bagian jonggolnya, wisata Indra Wardana Wikrama Deva yang ditulis dalam Huruf Pallawa dan Bahasa Sansakerta.</p><br />
                    <p><a href=""><img src="https://1.bp.blogspot.com/-LHMmt-WZ_SU/XgWYP0kL04I/AAAAAAAABHo/WrR_GUw6vfISi9venDFHKj2UbHUXU85uACLcBGAsYHQ/s1600/IMG_0294.jpg" alt="" /></a></p><br />
                    <p>ialah Prasasti Ciareuteun, sebuah situs batu tua abad empat masehi di Bogor, yang menjadi saksi betapa jayanya Kerajaan Tarumanegara pada saat itu. Selain di Bogor, Purbalingga juga memiliki prasasti yang diperkirakan berasal dari masa yang sama dengan Prasasti Ciareuteun, yakni Situs Batu Tulis atau secara resmi dinamai Situs Prasasti Cipaku, yang terletak di Dusun Pangebonan, Desa Cipaku, Kabupaten Purbalingga, Jawa Tengah.</p><br />
                    <p>Kalimat Indra Wardana Wikrama Deva diperkirakan tertulis sejak abad ke-empat masehi dan ditengarai dengan simbol naga yang bermakna bahwa prasasti tersebut terletak di antara dua sungai, Sungai Kalong dan Sungai Lembaran, serta terdapat mata air di bawahnya, Sendang Bola Ngirit. Namun sayangnya, tulisan kuno tersebut sudah terkikis dan sulit untuk dibaca.</p><br />
                    <p><a href=""><img src="https://awsimages.detik.net.id/community/media/visual/2021/02/22/situs-batu-tulis-cipaku-cagar-budaya-penuh-misteri-5.jpeg?w=600&amp;q=90" alt="" /></a></p><br />
                    <p> Situs Watu Tulis sendiri dipercaya sebagai mega magnet yang jika sebuah kompas diletakkan di suatu tempat, maka arah jarum kompas akan berputar 180 derajat.  Jadi, batir-batir yang memiliki minat berlebih pada sejarah dan budaya kuno, silahkan kunjungi Kabupaten kami, Purbalingga, dan belajar ke Situs Prasasti Cipaku ini ya!</p><br />
                    <p>Sampai detik ini, belum ada yang bisa mengungkapkan secara pasti siapakah Indra Wardana Wikrama Deva itu, para arkeolog dan sejarawan yang melakukan penelitian terhadap situs ini, menduga bahwa Indra Wardana Wikrama Deva adalah salah satu sebutan untuk Purnawarman, raja terbesar Kerajaan Tarumanegara abad ke-empat. Namun, beberapa dari mereka juga ada yang berargumen bahwa Indra Wardana Wikrama Deva adalah nama salah satu raja Kerajaan Galuh Kuno yang wilayahnya mencakup Kabupaten Purbalingga saat itu.</p><br />
                    <p>Kompleks museum ini juga memiliki padepokan yang digunakan oleh kelompok penghayat yang bersemedi di hari-hari dengan dina pasar kliwon. Konon, kompleks museum digunakan sebagai tempat pilihan para penghayat karena tempatnya yang tenang, asri nan hijau di perbukitan, dan mengandung aura magis yang amat kuat dari benda benda kuno yang terdapat didalamnya. Situs Watu Tulis sendiri dipercaya sebagai mega magnet yang jika sebuah kompas diletakkan di dekatnya, maka arah jarum kompas akan berputar 180 derajat.<br /><br />
                    Jadi, batir-batir yang memiliki minat berlebih pada sejarah dan budaya kuno, silahkan kunjungi Kabupaten kami, Purbalingga, dan belajar ke Situs Prasasti Cipaku ini ya!</p>

                </Box>

                <Box width="100%" display="flex" flexDir={{ base: "column", md: "row" }} justifyContent="space-between" marginY="10px">
                    <Box width={{ md:"50%" }} display="flex" justifyContent="space-between" margin="10px">
                        <Box width="48%">
                            <Link to="/bumibudaya">
                                <Button 
                                    leftIcon={<BsGrid />} 
                                    variant="solid"
                                    shadow="md"
                                    bgColor="white"
                                    fontFamily="Mick Kelly"
                                    fontSize="13px"
                                    fontWeight="200"
                                    width="100%"
                                >
                                    Menu
                                </Button>
                            </Link>
                        </Box>
                        <Box width="48%">
                            <Link to="/bumibudaya/bukutamu">
                                <Button 
                                    leftIcon={<BiBookContent />} 
                                    variant="solid"
                                    shadow="md"
                                    bgColor="white"
                                    fontFamily="Mick Kelly"
                                    fontSize="13px"
                                    fontWeight="200"
                                    width="100%"
                                >
                                    Buku Tamu
                                </Button>
                            </Link>
                        </Box>
                    </Box>
                    <Box width={{ md:"50%" }} display="flex" justifyContent="space-between" margin="10px">
                        <Box width="48%">
                            <Link to="/bumibudaya/peta">
                                <Button 
                                    leftIcon={<FiMapPin />} 
                                    variant="solid"
                                    shadow="md"
                                    bgColor="white"
                                    fontFamily="Mick Kelly"
                                    fontSize="13px"
                                    fontWeight="200"
                                    width="100%"
                                >
                                    Peta Budaya
                                </Button>
                            </Link>
                        </Box>
                        <Box width="48%">
                            <Link to="/bumibudaya/harapan">
                                <Button 
                                    leftIcon={<HiOutlineSun />} 
                                    variant="solid"
                                    shadow="md"
                                    bgColor="white"
                                    fontFamily="Mick Kelly"
                                    fontSize="13px"
                                    fontWeight="200"
                                    width="100%"
                                >
                                    Harapan
                                </Button>
                            </Link>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default FestivalKrakatau