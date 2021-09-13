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
import { BsGrid } from "react-icons/bs";
import { HiOutlineSun } from "react-icons/hi";
import { FiMapPin } from "react-icons/fi";
import { Link } from "react-router-dom";
import { BiBookContent } from "react-icons/bi";


const FestivalKrakatau = () => {
    const judul = "Festival Panen Sumbun"

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
                    <p>Sumbun? Sangat asing ditelinga bukan? Sumbun itu apa sih? Nah jadi, sumbun ini biasa juga dikenal dengan nama  kerang bambu,. sumbun atau sejenis kerang bambu  adalah fauna yang jarang ditemukan karena habitat kerang sumbun sendiri berada di daerah yang berpasir dan berlumpur. Jadi kerang sumbun hanya dapat di temukan di daerah tertentu saja. </p><br />
                    <p>Di daerah tanjung jabung timur bumi sepucuk nipah serumpun nibung tepatnya di kelurahan kampung laut, kecamatan kuala jambi, terdapat suatu daerah yang berpasir dan berlumpur yang biasa disebut beting, Daerah ini merupakan habitat dari sumbun tersebut. Sumbun hanya dapat ditemukan pada bulan-bulan tertentu, biasanya bulan maret hingga juni pada setiap tahunnya.</p><br />
                    <p>Pada zaman dahulu suku duano merupakan suku pertama yang memijakkan kaki di tanah kampung laut, untuk bertahan hidup masyarakat suku duano pergi ke beting yang berada di daerah seberang kampung laut, pada saat berada di beting suku duano berhasil menemukan sumbun tersebut dan kemudian di jadikan santapan untuk dapat bertahan hidup.</p><br />
                    <p><img src="https://radarjambi.co.id/foto_berita/2021/03/19/8images-3.jpg" alt="" /></p><br />
                    <p>Pada saat musim sumbun di bulan maret hingga juni, masyarakat kampung laut beramai-ramai pergi ke beting untuk panen sumbun. Biasanya masyarakat suku duano memanen sumbun untuk di konsumsi atau diperjualbelikan.</p><br />
                    <p>Cara mengambil sumbun atau yang dikenal sebagai mutik sumbun oleh masyarakat suku duano terbilang unik, yaitu dengan menggunakan bambu dan kapur sirih. bambu yang sudah dipotong tipis dicelupkan kedalam kapur sirih kemudian bambu tersebut  di tusukkan kedalam lubang yang menjadi tempat persembunyian sumbun tersebut, sumbun akan muncul ke permukaan apabila batang bambu tersebut di tusukkan ke dalam lubang persembunyiannya. Dalam proses pengambilan sumbun, kita harus mengetahui tata letak sumbun itu sendiri agar sumbun tersebut mudah untuk di dapatkan. Sebelum menusukkan bambu  kedalam lubang sumbun, terlebih dahulu kita harus menghentakkan kaki ke pasir supaya dapat terlihat dimana lubang tempat persembunyian sumbun.</p><br />
                    <p>Dengan adanya waktu tertentu untuk muncul, membuat sumbun menjadi keunikan dan daya tarik tersendiri bagi daerah kampung laut. Banyak wisatawan yang tertarik dengan proses panen sumbun.  Sejak beberapa tahun terakhir, oleh Pemkab Tanjung Jabung Timur tradisi menangkap sumbun menjadi festival tahunan. Kebiasaan menangkap sumbun inilah yang menjadi ciri khas Suku Duano dan banyak mendiami pesisir timur Jambi. </p><br />
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