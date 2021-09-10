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
    const judul = "Pesona Surga Bumi Sriwijaya"

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
                    <p><img src="https://cdn-2.tstatic.net/palembang/foto/bank/images/gunung-dempo_20170819_202052.jpg" alt="" /></p><br />
                    <p>Gunung Dempo, puncak tertinggi di Sumatra Selatan. Gunung Dempo terletak di perbatasan Provinsi Sumatra Selatan dan Provinsi Bengkulu tepatnya di kota dingin penghasil kopi robusta yaitu Kota Pagaralam. Kota Pagaralam, sesuai dengan namanya, kota ini jelas dikelilingi oleh pegunungan Bukit Barisan dan yang tertinggi dari barisan tersebut adalah Gunung Dempo. Kota Pagaralam berjarak sekitar 300 km dari pusat Kota Palembang atau membutuhkan waktu sekitar 8 jam perjalanan darat.</p><br />
                    <p>Gunung Dempo kerap dijuluki “<strong>Surga Bumi Sriwijaya.</strong>” Tidak hanya gunungnya, hamparan perkebunan teh yang terdapat di kaki gunung juga memanjakan mata. Balutan nuansa hijau sejauh mata memandang sangat menyejukkan. Keindahan perkebunan tehnya boleh diadu dengan Puncak, Bogor atau bahkan Tobasari di Simalungun. Pagaralam memang sungguh cantik, bukan?</p><br />
                    <p><img src="https://2.bp.blogspot.com/-N1woGswAwaA/WA6coB7FEYI/AAAAAAAAClA/SItebupijPgwdodJFIyaqnVJg_uLamcrwCLcB/s640/GUNUNG-DEMPO.jpg" alt="" /></p><br />
                    <p>Gunung Dempo setinggi 3.159 mdpl juga merupakan salah satu favorit pendaki. Pendakian ke puncak utama tidak terlalu sulit. Lerengnya terdiri dari kerikil dan batu-batu dengan kemiringan lereng sekitar 40°. Kawah yang indah terdapat pada puncak utama Gunung Dempo, 3159 mdpl. Kawah gunung berapi yang masih bergejolak dengan diameter sekitar seratus meter persegi. Dinding kawah cukup terjal dan tidak mungkin dapat dituruni tanpa bantuan tali temali. Pemandangan dari puncak sangat indah. Selain kawah yang memberikan bekas tersendiri di dalam hati, tampak juga hamparan Provinsi Bengkulu dengan Lautan Hindia dengan hamparan lembah yang sunyi dan hening.</p><br />
                    <p>Hutan di Gunung Dempo termasuk hutan heterogen. Beragam tumbuhan hidup di sana. Demikian pula dengan satwanya. Bahkan menurut warga, harimau sumatra pun masih terlihat di sana. Pada tahun 2019, pendaki asal Sumatra Selatan, berhasil merekam penampakan hewan langka. Hewan ini merupakan kambing hutan sumatra <em>(Capricornis sumatraensis)</em>. Kambing hutan sumatra hidup di alam bebas dan hanya terdapat di hutan Sumatra. Keberadaan kambing hutan ini sudah sangat langka. Bahkan oleh International Union for the Conservation of Nature and Natural Resources (IUCN), kambing ini sudah dinyatakan terancam punah. </p><br />
                    <p>Gunung Dempo menyuguhkan banyak pemandangan alam yang indah. Hamparan kebun teh yang luas, hutan yang asri, kawah yang indah, dan kekayaan alam lainnya. Tak hanya masyarakat sekitar yang ingin menyaksikan keindahannya tetapi juga banyak wisatawan dari luar kota bahkan luar provinsi serta luar pulau. Keindahan dari sumber daya alam ini sudah sepatutnya dilestarikan bersama-sama.</p><br />

                    <b>Referensi</b>
                    <ul>
                    <li>Theo, Rika dan Fennie Lie. Kisah Kultur dan Tradisi Tionghoa Bangka. Penerbit Buku Kompas. Jakarta. (2014).</li>
                    <li>Oqtavia, Mentari. (2015). Tradisi Upacara “Chit Ngiat Phan”, 1-6. Diakses 27 Agustus 2021, dari Universitas Multimedia Nusantara.</li>
                    <li>Tan, Shirley. (2014). Celebrate Chinese Culture : Chinese Literature. (Li En dan Chan Ying Kit, Terjemahan). Jakarta : PT. Elex Media Komputindo.</li>
                    </ul>
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