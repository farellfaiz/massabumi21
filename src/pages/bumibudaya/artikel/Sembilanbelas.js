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
    const judul = "Kiprah Kiai Hamzanwadi di Bidang Pendidikan"

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
                    <p><img src="https://iili.io/RVyZAJ.jpg" alt="" /></p><br />
                    <p>Jika di Surabaya kita mengenal ada Bung Tomo, di Aceh ada Cut Nyak Dien, di Jawa ada Pangeran Diponegoro, maka di Lombok kita mengenal adanya Bapak Kiai Hamzanwadi. Kita mengenal beliau hari ini sebagai salah satu tokoh nasional yang sudah dinobatkan sebagai pahlawan nasional. Atas penghargaan dari negara ini sekaligus memberikan kesimpulan kepada kita bahwa kiprah beliau sudah tidak bisa dipungkiri lagi, bahkan tidak hanya lokal tetapi juga internasional.</p><br />
                    <p>Bagi masyarakat Lombok, kehadiran beliau adalah sebuah anugerah yang tak terhitung nilainya. Berbicara tentang Bapak Kiai Hamzanwadi, maka kita tidak akan terlepas dari kata Nahdlatul Wathan. Ya, Nahdlatul Wathan, yaitu organisasi kemasyarakatan terbesar di Nusa Tenggara Barat yang selanjutnya sering disebut dengan singkatan NW. Melalui NW, Bapak Kiai Hamzanwadi menyirami masyarakat Lombok yang tadinya buta aksara menjadi bisa baca dan yang tadinya buta agama menjadi melek agama.</p><br />
                    <p>Dalam bidang pendidikan misalnya, kiprah sang Kiai sangat jelas terlihat. Ribuan lembaga pendidikan berdiri dan tumbuh bagaikan jamur di musim hujan. Mulai dari TK, Sekolah Menengah Pertama hingga Perguruan Tinggi, bahkan hingga detik ini terus bertambah. Melalui bidang pendidikan juga, sang Kiai melahirkan ribuan cendekia muslim yang keilmuannya sudah tak diragukan lagi baik lokal, nasional maupun internasional. Ribuan guru lahir dari lembaga pendidikan yang beliau dirikan. Ratusan ulama dan Tuan Guru, ratusan Doktor dan puluhan Profesor hadir dari gemblengan beliau. Satu hal lagi yang menarik untuk kita perhatikan dengan cermat, yaitu realita tentang keberhasilan beliau dalam dunia pendidikan.<br />
                    Apa itu? </p><br />
                    <p>Lahirnya seorang tokoh nasional yang bernama Tuan Guru Bajang Doktor Muhammad Zainul Majdi, MA. Seorang cendekia yang sudah masyhur di negeri ini. Generasi muda yang lahir dari tangan cerdas sang Kiai, seorang yang hafiz Alquran, seorang pemimpin yang disegani pemimpin lainnya, tokoh nasional yang kiprahnya juga sudah tak diragukan lagi. Dialah TGB yang lahir dari didikan Kiai Hamzanwadi.</p><br />
                    <p>Bapak Kiai Hamzanwadi juga dijuluki dengan Madaris wal Masajid karena beliau yang memelopori pembangunan banyak masjid, sehingga Lombok dikenal dengan Pulau Seribu Masjid.</p><br />
                    <p>Akhirnya, jika berbicara tentang kiprah sang Kiai Hamzanwadi maka tidak akan pernah habis-habisnya. Dalam dunia pendidikan saja, kita tidak akan pernah mampu untuk mengurangi satu persatu keberhasilan beliau karena begitu banyaknya. Salah satunya melalui pendidikan, beliau memelopori perjuangan melawan penjajah di Lombok, Nusa Tenggara Barat. Sehingga wajar jika pemerintah memberikan penghargaan terhadap jasa-jasa beliau dengan memberikan gelar pahlawan nasional. </p><br />
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