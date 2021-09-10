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
    const judul = "Mitos Lada"

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
                    <p><img src="https://media-cdn.tripadvisor.com/media/photo-s/11/81/2c/be/goa-belanda.jpg" alt="" /></p><br />
                    <p><em>Sampurasun</em>,<em> Akang</em> dan <em>Teteh</em>! Siapa, nih, yang percaya sama mitos? Banyak mitos yang berkembang di daerah- daerah Indonesia. Kali ini, kami  akan membagikan salah satu mitos yang tersohor dari Tanah Sunda. Tanah Sunda memiliki beragam mitos, salah satunya adalah larangan atau <em>pamali </em>menyebut kata lada.</p><br />
                    <p>Larangan ini tidak berlaku di seluruh Tanah Sunda, tetapi hanya berlaku di Goa Belanda dan Goa Jepang. Warga Bandung dan sekitarnya pasti sudah hafal dengan kedua tempat tersebut. Goa Belanda dan Goa Jepang berada di kawasan Tahura (Taman Hutan Raya Juanda) yang beralamat di Kompleks Tahura, Jl. Ir. H. Juanda No.99, Ciburial, Kec. Cimenyan, Bandung. Goa Jepang dan Belanda adalah peninggalan pada masa penjajahan Jepang dan Belanda. Goa Belanda sendiri sebenarnya adalah terowongan yang digunakan untuk membendung aliran air Cikapundung. Lalu oleh Belanda dipergunakan sebagai stasiun radio dan digunakan oleh pejuang Indonesia untuk gudang mesiu. Sedangkan, Jepang menggunakannya sebagai markas militer, seperti tempat pengintaian, ruang pertemuan, dan lain – lain.</p><br />
                    <p><img src="https://media-cdn.tripadvisor.com/media/photo-i/0e/1d/7e/3e/goa-jepang-bisa-dimasuki.jpg" alt="" /></p><br />
                    <p>Lantas, apa yang membuat pantangan mengucapkan kata<em> lada</em> di Goa Belanda dan Jepang? Konon, pada zaman dahulu terdapat seorang gubernur bernama Hyang Prabu Jaya Lada Kusumah atau Hyang Lada. Beliau adalah seorang gubernur yang sangat dihormati oleh rakyat setempat karena kebijaksanaan dan kebaikannya. Saking diseganinya, rakyat setempat tidak berani untuk menyebut namanya. Kebiasaan itu diceritakan dari mulut ke mulut dan dilanjutkan penyebarannya dari generasi ke generasi selanjutnya, sehingga menjadi budaya berupa mitos yang masih dianut hingga zaman sekarang. Terdapat juga versi lain yaitu kata <em>lada</em> adalah bagian dari nama leluhur daerah setempat yang sangat dihormati, Eyang Lada Wisesa. Jika mengucapkan kata <em>lada</em> di Goa Jepang atau Goa Belanda, sosok leluhur tersebut akan ikut hadir. Selain itu, para serdadu Belanda dan Jepang akan merasa terusik dan marah sehingga dapat terjadi kejadian yang tidak diinginkan.</p><br />
                    <p>Begitulah, mitos yang dipercaya Warga Bandung, <em>Akang</em> dan <em>Teteh</em>. Dari mitos ini, kita dapat mengambil pelajaran bahwa kita harus menghormati leluhur kita  kalau dari mitos ini sih, dengan cara tidak mengucapkan <em>lada</em> di Goa Jepang dan Belanda. Juga, selain menjadi mitos yang diceritakan secara turun temurun, Goa Belanda dan Jepang juga sering digunakan sebagai sarana uji nyali.</p><br />
                    <p>Walaupun mitos ini cukup dikenal oleh masyarakat sekitar, masih ada orang-orang yang sengaja datang dengan niat membuktikan benar tidaknya mitos <em>lada</em>. Banyak juga yang datang pada malam hari dengan alasan pada malam hari aktivitas mistis lebih sering terjadi. Tak jarang juga, para penguji nyali datang berbekal alat perekam untuk mengabadikan momen keberanian mereka. Bahkan, portal berita hingga stasiun televisi pun turut berpartisipasi. Kalau <em>akang</em> dan <em>teteh</em> bagaimana, nih? Setelah membaca tentang mitos<em> lada</em> apakah berminat untuk menguji nyali juga?</p><br />
                    <p><b>Daftar Pustaka</b></p>
                    <p>Kangsaputra, L. (2019, Agustus 15).<em> Lifestyle Okezone</em>. Retrieved from Misteri Pantangan Ucap Kata &#39;Lada&#39; di Goa Belanda Dago Pakar: <a href="https://lifestyle.okezone.com/read/2019/08/15/612/2092163/misteri-pantangan-ucap-kata-lada-di-goa-belanda-dago-pakar">https://lifestyle.okezone.com/read/2019/08/15/612/2092163/misteri-pantangan-ucap-kata-lada-di-goa-belanda-dago-pakar</a><br /><br />
                    Kurniasih, A. (2020). <em>Mitos 5 Kata Larangan yang Dipercaya &#39;Mengundang&#39; Hantu</em>. Yogyakarta: Urbanasia.<br /><br />
                    Puri, Y. (2017, November 1). <em>Misteri di Balik Pantangan Mengucap Kata &#39;Lada&#39; di Dago Pakar</em>. Retrieved from Dream.co.id: <a href="https://m.dream.co.id/travel/destination/misteri-di-balik-pantangan-mengucap-kata-lada-di-dago-pakar-171101o.html">https://m.dream.co.id/travel/destination/misteri-di-balik-pantangan-mengucap-kata-lada-di-dago-pakar-171101o.html</a></p><br /><br />
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