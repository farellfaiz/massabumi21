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
    const judul = "Gabungan dari Beberapa Kebudayaan yang Berbeda, Budaya Banten Sebenarnya Apa?"

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
                    <p>Jika mendengar kata “Aceh”, budaya Tari Saman terlintas di kepala. Jika mendengar  kata “Sumatra Barat”, Rumah Gadang atau Tari Piring terlintas di kepala. Namun, jika  mendengar kata “Banten”, apa yang terlintas di kepala kita? </p><br />
                    <p>Topik ‘Budaya Banten’ sering sekali membuat kita berpikir dua kali sebelum  akhirnya kita mencari di google mengenai apa sebenarnya budaya yang ada di Banten? Padahal Banten merupakan daerah yang telah lama berdiri dan berevolusi. Dari kerajaan,  penjajahan Belanda, ikut merdeka menjadi bagian dari Indonesia, menjadi bagian dari  provinsi Jawa Barat, sampai akhirnya berdiri sendiri menjadi provinsi Banten pada tahun  2000. Evolusi tersebut bisa menjadi alasan mengapa Banten memiliki campuran budaya dari  Jawa, Sunda, Betawi, Tionghoa, dan mayoritas budaya Islam. </p><br />
                    <p><a href=""><img src="data:image/jpeg;base64,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" alt="" /></a></p><br />
                    <p>Akulturasi budaya Banten dapat terlihat di bangunan Masjid Agung Banten yang  dibangun tahun 1552-1570. Salah satu peninggalan kerajaan Islam tersebut membuktikan budaya Islam yang sangat melekat di Banten. Dari menara, hiasan, motif, serta ukiran masjid  tersebut merupakan perpaduan budaya dari peninggalan Belanda, Jawa, Sunda, serta  Tionghoa. Selain itu, budaya pencak silat dan debus mungkin tidak terlalu asing di telinga kita. Kedua budaya tersebut merupakan bagian dari Banten. Ada banyak kebudayaan Banten,  ada banyak juga yang sudah terlupakan. Adu Bedug, Bendrong Lesung, Calung, Dodod,  Gacle, Mawalan, Dzikir Saman, Terbang Genjring, nama-nama asing tersebut adalah  kebudayaan Banten yang nyaris punah.  </p><br />
                    <p>Tanpa disadari, ditemukan kesenjangan di provinsi Banten. Banten Timur yang  meliputi Kota Tangerang, Kota Tangerang Selatan, dan Kabupaten Tangerang cenderung  lebih berkembang pesat dibanding Banten Barat yang meliputi Serang, Cilegon, dan  Pandeglang. Kesenjangan ini pula dapat menjadi alasan mengapa kebudayaan Banten cukup  asing di telinga kita. Modernisasi yang sering disebut sebagai perkembangan industri dan  ekonomi menggeser kecantikan budaya Indonesia. </p><br />
                    <p> <a href=""><img src="https://i1.wp.com/jybmedia.com/wp-content/uploads/2020/07/Suku-Baduy.jpg?fit=750%2C422&amp;ssl=1" alt="" /></a></p><br />
                    <p>Mungkin krisis budaya Banten ini adalah salah satu alasan suku Baduy menolak  modernisasi. Masyarakat suku Baduy berpengang erat pada tradisi dan adat istiadat mereka,  serta menolak segala pengaruh dari budaya luar. Mungkin kita harus berterima kasih kepada  masyarakat suku Baduy yang setia dalam menjaga kelestarian budayanya. </p><br />
                    <p>Saat ini, tradisi yang masih tersisa dan masih sering dilakukan oleh warga Banten  tidak jauh dari kelekatan budaya Islam. Ngariung, atau pengajian dilakukan sebagai ucapan  rasa syukur. Ngeropok, merupakan salah satu tradisi unik untuk memperingati hari kelahiran  Nabi Muhammad SAW. Biasanya tradisi ini berlangsung di Kota Serang, Kabupaten Serang,  dan Kota Madya Cilegon dengan membuat hantaran atau parsel berukuran besar yang disebut  panjang mulud. Ziarah, tradisi berkunjung ke makam raja dan syekh penyebar ajaran agama  Islam. Meskipun budaya tersebut tidak berlangsung secara merata di seluruh daerah Banten,  namun rasanya melegakan untuk mengetahui ada budaya Banten yang masih tersisa.</p><br />
                    <p>Dengan membangun kesadaran terhadap krisis budaya Banten diharapkan kita sebagai  anak muda dapat ikut turun tangan untuk melestarikan budaya masing-masing. Mempelajari  budaya Indonesia, ikut andil dalam kegiatan budaya asal, serta menyaring informasi budaya  luar yang berpotensi mengalihkan pandangan kita dari budaya sendiri merupakan beberapa  cara sederhana untuk berupaya melestarikan apa yang kita punya.</p><br />
                    <p> <b>Referensi</b> <br />
                    <a href="https://bobo.grid.id/read/082124441/bagaimana-akulturasi-budaya-yang-terlihat-di">https://bobo.grid.id/read/082124441/bagaimana-akulturasi-budaya-yang-terlihat-di-bangunan-masjid-agung-banten-cari-tahu-yuk?page=all</a><br />
                    <a href="https://travel.okezone.com/read/2021/08/27/25/2462219/menarik-ini-tradisi-unik-budaya">https://travel.okezone.com/read/2021/08/27/25/2462219/menarik-ini-tradisi-unik-budayamasyarakat-banten</a><br />
                    <a href="https://fitriananggunxoxo.wordpress.com/2016/10/06/kebudayaan-banten-yang-nyaris-punah/">https://fitriananggunxoxo.wordpress.com/2016/10/06/kebudayaan-banten-yang-nyaris-punah/</a></p>

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