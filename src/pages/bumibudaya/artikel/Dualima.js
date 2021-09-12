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

const FestivalKrakatau = () => {
    const judul = "Bali Kedua di Kalimantan Timur"

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
                    <p><img src="https://www.celebes.co/borneo/wp-content/uploads/2020/11/Pulau-Derawan.jpg" alt="" /></p><br />
                    <p>Menurut kalian gambar di atas dimana? Bali? Hawai? Bukan keduanya, Gambar di atas adalah gambar Pulau Derawan di Kabupaten Berau, Kalimantan Timur. Laut yang biru dan pantai yang bersih. Siapa yang menyangka ada surga tersembunyi di Kalimantan Timur.</p><br />
                    <p>Pulau Derawan terdiri dari beberapa kecamatan yang berupa pulau-pulau yakni, Pulau Derawan, Maratua, dan Biduk Biduk. Setiap kecamatan memiliki kekhasannya masing-masing. Contohnya Pulau Maratua yang merupakan pulau terluar Indonesia yang terletak di Laut Sulawesi dan berbatasan langsung dengan Malaysia.</p><br />
                    <p>Pulau Derawan yang terkenal akan wisata bawah airnya ini memiliki luas 44,6 hektare dan berbatasan langsung dengan perairan. Berbagai macam fasilitas tersedia di Pulau Derawan seperti villa, pantai, dan hutan bakau. Di Pulau Derawan pengunjung diajak untuk menyusuri pantai yang bersih, menyelam, dan melihat proses bertelur penyu. Pulau Derawan juga memiliki beberapa satwa langka seperti penyu hijau, penyu sisik, paus, dan lumba-lumba.</p><br />
                    <p>Dengan bermacam fasilitasnya tidak membuat tarif berlibur disana menjadi selangit. Pulau Derawan memiliki tarif yang murah jika dibandingkan dengan tempat lain yang menyediakan fasilitas yang sama seperti Bali dan Lombok. Bahkan Pulau Derawan dicalonkan menjadi situs warisan dunia UNESCO pada tahun 2005.</p><br />
                    <p>Saat ini Pulau Derawan juga sedang dipromosikan menjadi salah satu pariwisata andalan bagi turis lokal dan internasional. Oleh karena itu, kita sebagai masyarakat Indonesia harus memberikan perhatian lebih pada tempat wisata seperti ini agar lebih dikenal. </p><br />

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