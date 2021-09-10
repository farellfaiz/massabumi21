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
    const judul = "Anak Gimbal dari Dieng"

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
                    <p>Ruwatan ialah salah satu acara budaya unik di Dieng, Jawa Tengah. Anak-anak berambut gimbal yang sudah mengucapkan kemauannya untuk memotong rambut gimbal mereka dikumpulkan. Mereka akan mengikuti acara ruwatan untuk memotong rambut gimbal yang selama ini menempel di kepala mereka. Bersamaan dengan dipotongnya rambut gimbal tersebut, masyarakat Dieng pun memanjatkan doa dan mengharap kesejahteraan bagi mereka. Pemberian sesaji dimaksudkan agar acara ruwatan dapat berjalan lancar dan membawa keberkahan ke anak berambut gimbal serta masyarakat Dieng Sendang Sedayu dan Dharmasala menjadi tempat penyucian anak-anak berambut gimbal sebelum rambut mereka dipotong. </p><br />
                    <p><a href=""><img src="https://jateng.garudacitizen.com/wp-content/uploads/2019/01/255-contoh_anak_berambut_gimbal_di_dataran_tinggi_dieng.jpg" alt="" /></a></p><br />
                    <p>Rambut gimbal yang sudah dipotong kemudian dilarungkan. Pelarungan biasanya dilakukan di Telaga Warna, Telaga Balaikambang, atau Sungai Serayu. Acara ini akan diadakan jika si anak menyatakan keinginannya memotong rambut gimbal. </p><br />
                    <p>Acara ruwatan anak berambut gimbal yang dilakukan secara massal akan dipimpin oleh ketua adat desa setempatDomas (wanita pengiring) membawa berbagai jenis makanan yang menjadi sesaji dalam proses ruwatan. Sesaji ini akan dibawa keliling desaPemotongan rambut gimbal diadakan di Kompleks Candi Arjuna. Pemotongan bisa dilakukan oleh orangtua maupun orang yang diingini oleh si anak.</p><br />
                    <p>Ruwatan anak berambut gimbal biasanya diadakan pada Bulan Juni, Juli, atau Agustus, menyesuaikan dengan saat libur sekolah. Beberapa hari sebelum ruwatan, tetua desa akan membawa sesaji ke tempat-tempat yang dianggap sakral. Ada 21 tempat yang diberikan sesaji. Berbagai kelompok kesenian tradisional juga menjadi bagian dalam pawai mengelilingi desa. Pawai ini akan berakhir di Kompleks Candi Arjuna. Diadakannya ruwatan massal anak berambut gimbal menjadi daya tarik wisata di Dataran Tinggi Dieng. Acara ini juga meringankan beban orangtua. </p><br />
                    <p>Selain anak-anak rambut gimbal, di acara ini juga berkumpul wanita pengiring yang membawa berbagai makanan persembahan atau biasa disebut dengan nama domas. </p><br />
                    <p><a href=""><img src="https://asset.kompas.com/crops/867whIKEjoRF49j-y5w0CD8V1N8=/53x0:1000x631/750x500/data/photo/2017/08/03/9037073281.jpg" alt="" /></a></p><br />
                    <p>Kelompok-kelompok kesenian, serta para tetua adat. Rombongan ini kemudian akan berkeliling kampung. Setelah berkeliling kampung, arak-arakan akan menuju Kompleks Candi Arjuna. Tempat pertama yang didatangi adalah Sedang Sedayu. Di sumber mata air ini, anak-anak berambut gimbal akan melalui ritual pensucian atau dikenal dengan nama penjamasan. Setelah itu, ke Dharmasala untuk merapikan pakaian mereka. Acara lalu dilanjutkan ke salah satu candi yang ada di Kompleks Candi Arjuna. Di candi ini, dilakukan pemotongan rambut gimbal. Rambut gimbal yang telah dipotong kemudian akan dilarung di sumber air yang ada di Dieng. Tempat yang biasanya dijadikan tempat pelarungan adalah Telaga Warna, Telaga Balaikambang, atau Sungai Serayu. Setelah melalui prosesi ini, rambut gimbal pada anak tersebut tidak akan tumbuh kembali.</p><br />

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