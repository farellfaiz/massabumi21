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
    const judul = "Perayaan Obor Pattimura"

    return (
        <Box w="100%" minHeight="1200px" paddingY={8} bg="gray.50" marginBottom="-50px" display="flex" justifyContent="center">
            <Image src="/img/bg.png" position="fixed" top="0" right={["-200px", "-200px", "-200px", "0"]} alt="" />
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
                    padding="40px"
                    marginTop="10px"
                    textAlign="justify"
                    className="artikel"
                >
                    <p><img src="http://photos1.blogger.com/blogger/278/1433/320/Walikota-dan-Obor__P2.jpg" alt="" /></p><br />
                    <p>Peringatan Hari Pattimura yang jatuh pada tanggal 15 Mei setiap tahun identik dan sangat erat berhubungan dengan prosesi Obor Pattimura yang dilaksanakan sehari sebelumnya.</p><br />
                    <p>Sekitar pukul 14.00 WIT tanggal 14 Mei. Dari Baileo Tuhaha, obor yang belum nyala dibawa ke Gunung Saniri oleh Raja Negeri Tuhaha dan masyarakat Tuhaha dengan diiringi tarian cakalele (tarian perang) pemuda Negeri Tuhaha. Pada masa penjajahan Belanda, Gunung Saniri merupakan tempat yang digunakan oleh Kapitan Pattimura dan beberapa pemimpin negeri di Saparua untuk berunding dan merancang strategi menyerang Belanda di Benteng Duurstede.</p><br />
                    <p>Di Gunung Saniri, berbagai perlengkapan digelar di tanah dengan beralaskan kain merah yang melambangkan keberanian. Kemudian dilakukan upacara doa menurut ajaran Islam dan Kristen untuk meminta tolong kepada Pencipta Tuhan YME agar upacara berjalan dengan lancar.</p><br />
                    <p>Selanjutnya, dua orang dewan adat akan menggosokan dua bilah bulu (bambu) kering yang dalam Bahasa Maluku disebut iris unar hingga menghasilkan percikan api yang digunakan untuk membakar serabut kelapa yang telah dihaluskan dan diletakkan pada bulu.</p><br />
                    <p>Saat obor menyala, masyarakat akan memekikkan sorak-sorai bersama tarian cakalele untuk menyulut semangat mereka. Lalu obor akan dibawa turun dari Gunung Saniri dan diarak menuju Baileo Saparua.
                    Di Baileo Saparua, obor akan diterima oleh Raja Saparua yang selanjutnya diarak keliling Negeri Saparua bersama masyarakat Saparua. Dari Saparua, obor diarak menuju Negeri Tiow, diterima oleh pemuda Negeri Tiow yang kemudian diarak lagi mengelilingi seluruh Negeri Tiow.
                    Obor kemudian akan diarak menuju Pantai Waisisil, tempat Tugu Pattimura terletak. Suasana gempita dan sakral juga terasa di Pantai Waisisil.
                    Dari sana, obor kemudian diarak ke Baileo Negeri Porto dan diterima oleh Raja Negeri Porto. Dengan tetap diiringi tarian cakalele para pemuda, obor diarak mengelilingi Negeri Porto.
                    Setelah itu, obor kemudian diarak menuju Baileo Negeri Haria, tempat kelahiran Kapitan Pattimura. Di sana, obor akan diterima oleh Upulatu Haria atau Raja Haria. Dalam upacara ini, Proklamasi Negeri Haria dibacakan, yaitu proklamasi rakyat Haria yang berisi penolakan rakyat Negeri Haria terhadap penindasan Belanda. Proklamasi Haria dibacakan dalam bahasa asli Maluku (bahasa Tana).</p><br />
                    <p>Begitu upacara di Baileo Haria selesai, obor diarak mengelilingi Negeri Haria kemudian menuju kediaman Pattimura dengan tetap diiringi oleh para penari cakalele yang mengenakan celana merah, ikat kepala merah, dan membawa tombak dan parang salawaku yang merupakan senjata tradisional Maluku.
                    Dari Negeri Haria, obor akan diarak kembali menuju ke Tugu Pattimura di Pantai Waisisil. Sepanjang malam obor akan dijaga bergilir oleh para pemuda dari seluruh negeri Saparua dan sekitarnya.
                    Keesokan harinya, pada tanggal 15 Mei, obor diarak ke Lapangan Merdeka Saparua yang terletak di samping Benteng Duurstede. Di sana akan dilangsungkan upacara kenegaraan memperingati Hari Pattimura.
                    Sedikit kilas balik, sebelum tragedi kemanusiaan di Maluku pada tahun 1999, Obor Pattimura dari Negeri Haria akan dibawa menyebrangi lautan menuju Negeri Tulehu dan akan diarak ke Lapangan Merdeka Ambon.
                    Perayaan Obor Pattimura mengajarkan semangat berjuang bagi generasi muda penerus perjuangan Pattimura untuk berjuang membangun bangsa dan negara Indonesia tercinta.</p>
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