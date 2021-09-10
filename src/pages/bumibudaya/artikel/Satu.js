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
import { BiBookContent } from "react-icons/bi";
import { Link } from "react-router-dom";

const FestivalKrakatau = () => {
    const judul = "Semarak Festival Krakatau"

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
                    <p><img src="http://picture.triptrus.com/image/2019/02/lampung.jpeg" alt="" /></p><br />
                    <p><em>Tabik Pun! Halo seunyinni!</em><br /> <br />
                    Pesona kemilau Sang Bumi Ruwa Jurai terpancar dalam festival terbesar di bumi Lampung, Festival Krakatau. Selengkapnya, <em>kanca – kanca seunyinni</em> dapat membaca ringkasan di bawah ini.</p><br />
                    <p>Festival Krakatau merupakan festival pariwisata terbesar yang diselenggarakan secara tahunan di Provinsi Lampung. Nama festival ini diambil dari nama salah satu gunung yaitu Gunung Krakatau yang terletak di Selat Sunda. Festival ini merupakan festival yang menjadi unggulan Provinsi Lampung. Tujuan diselenggarakan festival ini guna mempromosikan unggulan-unggulan daerah khususnya atraksi sebagai daya tarik wisata di Lampung. Selain itu, diadakannya festival ini sekaligus sebagai pengingat peristiwa bersejarah yang pernah terjadi yaitu meletusnya Gunung Krakatau pada tahun 1883. Bahkan, festival ini sudah menjadi budaya yang dilakukan oleh masyarakat Lampung.</p><br />
                    <p>Festival Krakatau selalu mengusung tema yang berbeda-beda pada setiap pelaksanaannya. Tema-tema tersebut mengandung nilai-nilai yang dapat dijadikan tuntunan bagi masyarakat Lampung. Misalnya, pada tahun 2019 Festival Krakatau mengusung tema pariwisata lingkungan yang aman dan berkelanjutan bertajuk “<strong>Krakatau-Sebesi Safe and Sustainable Eco Tourism</strong>&quot;. Diusungnya tema lingkungan pada tahun tersebut diharapkan menjadi langkah awal pemulihan ekosistem selepas diguncang bencana tsunami pada Desember 2018. Kemudian, pada tahun 2019, Festival Krakatau mengusung tema <strong>Urban Etnik</strong>. Tema ini merupakan sebuah konsep yang memadukan unsur modern perkotaan dengan unsur tradisi yang berakar dari adat istiadat/tradisi budaya masyarakat serta sosial yang unik dan menarik untuk ditampilkan menjadi sebuah sajian seni maupun pertunjukan budaya. </p><br />
                    <p>Berbagai kegiatan dilakukan setiap Festival Krakatau. Pada tahun 2019 festival yang diadakan di Lapangan Saburai Bandar Lampung menampilkan lima kegiatan utama, yaitu, Pesona Kemilau Sai Bumi Ruwa Jurai, Krakatau Expo, Parade Permainan Anak Tradisional , Trip Krakatau dan Parade Budaya Lampung Culture and Tapis Carnival.  Parade Budaya Lampung Culture and Tapis Carnival sangat menarik perhatian. Parade diikuti oleh masyarakat Lampung dengan balutan kostum kreasi yang menonjolkan simbol Provinsi Lampung yaitu siger serta kain khas Lampung yang sudah mendunia yaitu kain tapis.  Setiap kostum yang dipakai memiliki warna yang mencolok. Rangkaian parade budaya merupakan salah satu bagian acara festival yang sangat ditunggu. Adapun Trip Krakatau yang dikemas dalam bentuk perjalanan yang mengandung unsur studi observasi pengetahuan Gunung Anak Krakatau pasca letusan dan tsunami.</p><br />
                    <p>Festival ini setiap tahunnya memiliki rangkaian acara yang sangat padat. Sajian eventnya pun sangat beragam. Tidak hanya acara utama yang ditonjolkan, festival ini juga memiliki serangkaian acara sampingan seperti kunjungan ke tempat wisata, festival musik, festival kuliner, parade budaya, pameran berbagai UKM yang ada di Lampung, dan masih banyak acara sampingan lain yang berbeda tiap tahunnya. Acara-acara di dalam festival ini sudah menjadi tontonan wajib yang dilakukan bukan hanya oleh masyarakat Lampung tetapi juga wisatawan luar Lampung.  Jika ingin menyaksikan festival ini secara langsung, jangan lupa untuk mencari tahu jadwal pelaksanaannya. <em>Kanca-kanca</em> bisa mencari infonya dengan cara mengunjungi website Dinas Kebudayaan dan Pariwisata Provinsi Lampung.</p><br />
                    <p><strong>Catatan:</strong><br />
                    <em>Tabik pun</em>    : Sapaan dalam Bahasa Lampung<br />
                    <em>Seunyinni</em>    : Semuanya <br />
                    <em>Kanca</em>    : Teman<br />
                    <em>Gham</em>    : Saya </p>

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