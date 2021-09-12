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
    const judul = "Batik Gajah Oling Kekayaan Banyuwangi"

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
                    <img src="https://inspirasipagi.id/wp-content/uploads/2018/11/motif-batik-gajah-oling.png" alt="" /><br />
                    <p>Banyuwangi merupakan daerah yang berada di paling timur Pulau Jawa. Banyuwangi memiliki keberagaman baik dari segi budaya, tempat wisata, tradisi, suku, mata pencaharian dan yang lainnya termasuk batik. Salah satu batik yang terkenal dari Banyuwangi adalah batik gajah oling. Meskipun ada sekitar 22 lebih motif batik, motif batik gajah oling ini salah satu yang paling populer. </p><br />
                    <p>Batik gajah oling adalah motif batik tertua yang ada di Banyuwangi. Sesuai dengan namanya, motif batik gajah oling berbentuk seperti belalai gajah atau oling (dalam bahasa Indonesia oling artinya belut). Namun, tidak sedikit yang mengatakan jika bentuknya menyerupai tanda tanya. Pemaknaan motif batik gajah oling menurut Azhar Prasetyo dalam buku beliau yang berjudul Batik Banyuwangi masih berkaitan dengan kereligiusan masyarakat Banyuwangi. Hal ini sesuai dengan kata gajah yang melambangkan kebesaran dari Tuhan Yang Mahakuasa dan oling atau eling  yang berarti ingat. Jika digabungkan berarti ingat kepada Tuhan Yang Mahakuasa. Secara tidak langsung motif batik gajah oling telah mengajarkan dan menjadi tuntunan tentang pentingnya melaksanakan kewajiban kepada Tuhan Yang Mahakuasa. <br /><br />
                    Batik gajah oling tidak bisa dilepaskan dari masyarakat Banyuwangi sendiri, mulai dari digunakan untuk baju wajib di pemerintahan, sekolah-sekolah, bisa juga untuk kebaya atau keperluan lainnya. Sebagai masyarakat Banyuwangi, melestarikan dan memperkenalkan kebudayaan Banyuwangi di kancah nasional maupun internasional adalah suatu kewajiban dan kebanggaan tersendiri. Jadi, berbanggalah menjadi bangsa Indonesia yang kaya akan keberagaman. </p><br />
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