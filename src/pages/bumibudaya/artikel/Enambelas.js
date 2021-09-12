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
    const judul = "Nyangku, Ritual Adat di Panjalu"

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
                    <p>Kita semua sebagai bangsa Indonesia tentu setuju bahwa negeri ini memiliki amat banyak budaya yang tersebar di seluruh penjurunya. Tapi sebenarnya, apa sih budaya itu? Budaya berasal dari Bahasa Sansekerta budhayah yang berarti budi atau akal. Menurut Melville Jean Herskovits, seorang antropolog Amerika, budaya adalah sesuatu yang turun temurun dari satu generasi ke generasi lain, yang kemudian disebut sebagai superorganik. </p><br />
                    <p>Di antara banyaknya budaya di Indonesia, ada satu budaya bernama nyangku. Nyangku ini merupakan budaya dari daerah Panjalu, Kabupaten Ciamis, Jawa Barat. Nyangku ini merupakan sebuah ritual atau upacara adat yang dilakukan untuk menghormati leluhur Panjalu yang sudah menyebarkan agama Islam. </p><br />
                    <p>Ritual ini sebenarnya adalah prosesi membersihkan benda-benda pusaka peninggalan Prabu Sanghyang Borosngora, para raja, dan bupati Panjalu serta para penerusnya. Benda-benda pusaka ini tersimpan di Pasucian Bumi Alit. Tempat itu seperti museum bagi warga Panjalu. Benda-benda pusaka tersebut diantaranya; pedang zulfikar, keris pancaworo, bangreng, gong kecil, cis, keris komando, trisula, dan lain-lain. Namun benda yang akan dibersihkan tidak semua, hanya pusaka yang disebutkan saja.</p><br />
                    <p><img src="https://iili.io/ROI88P.jpg" alt="" /></p><br />
                    <p>Upacara ini dilakukan tiap hari Senin atau Kamis terakhir pada bulan Maulid atau Rabiul Awal. Sekaligus merayakan Maulid Nabi Muhammad Shallallahu &#39;Alaihi wa Sallam. Biasanya yang melaksanakan ritual ini adalah Yayasan Borosngora yang didukung seluruh tetua Panjalu, Pemerintah Desa Panjalu, para tokoh masyarakat, juru kunci makam keramat, keturunan Raja Panjalu dan pihak bersangkutan yang lainnya. </p><br />
                    <p>Ritual dimulai dengan mengeluarkan benda-benda pusaka yang ditutupi oleh kain putih. Lalu pusaka-pusaka tersebut dibawa menuju Nusa Gede yang berada di tengan Situ Lengkong (dulunya merupakan Bukit Pasir Jambu). Nusa Gede juga merupakan makam para prabu dan raja serta keturunannya yang terdahulu. Benda-benda pusaka tersebut dibawa beriringan disertai dengan bacaan salawat dan permainan alat musik gembyung. Mereka juga mengambil air dari Situ Lengkong dan beberapa mata air lain. Setelah itu, mereka membawa benda-benda pusaka tersebut ke taman Borosngora. Di tempat itulah pusaka-pusaka tersebut dibersihkan. Acara pembersihan pusaka ini sering kali ditonton oleh warga sekitar. Kebanyakan warga antusias menyambut ritual ini, bahkan beberapa banyak yang berebut air bekas cucian benda pusaka, menurut mereka, air tersebut memiliki banyak manfaat. Namun biasanya, yang dipertontonkan hanyalah pencucian Pedang Zulfikar, Kujang Panjalu, dan Keris Stok Komando. Tiga benda pusaka ini juga sekaligus menjadi lambang simbolis dari ritual ini.</p><br />
                    <p><img src="https://iili.io/ROAV9I.jpg" alt="" /></p><br />
                    <p>Setelah dicuci, benda-benda pusaka ini akan dikeringkan dengan cara diasapi. Kemudian benda-benda pusaka tersebut akan ditutupi lagi dengan kain putih dilengkapi dengan minyak khusus. Benda-benda pusaka akan dikembalikan ke Pasucian Bumi Alit. </p><br />
                    <p><img src="https://iili.io/ROAhtn.jpg" alt="" /></p><br />
                    <p>Siapa sih Prabu Sanghyang Borosngora ini? Kok sampai dibuat ritual tiap tahunnya untuk menghormati beliau? Konon Katanya, beliau merupakan pangeran yang menyebarkan agama Islam di Kerajaan Panjalu. Konon katanya beliau langsung berguru pada Ali bin Abi Thalib di Mekkah, hingga diwarisi pedang Zulfikar. Beliau juga membawa air zam-zam dari Mekkah yang dari air tersebut kini terbentuk Situ Lengkong. Situ Lengkong sendiri dulunya berupa lembah yang mengelilingi bukit yang dinamai Bukit Pasir Jambu. Prabu Sanghyang juga dijuluki sebagai Syeikh Haji Sampulur Sauma Dipa Ulama.</p><br />
                    <p>Menurut para ahli, Prabu Sanghyang ini hidup pada tahun 1400-an. Kurang lebih berada pada waktu yang sama dengan Sunan Gunung Jati dari Kacirebonan. Lalu bagaimana bisa ia bertemu Ali bin Abi Thalib yang hidup di zaman berbeda dengan beliau? Hal ini masih menjadi kontroversial. Namun, apapun kebenarannya, Prabu Sanghyang ini akan tetap dihormati oleh warga Panjalu atas jasanya yang besar. </p><br />
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