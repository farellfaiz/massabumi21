import { 
    Box, 
    Heading, 
    Flex, 
    Button, 
} from "@chakra-ui/react"
import React from "react"
import { SmallTab } from "../../../components"
import { ArrowBackIcon } from '@chakra-ui/icons'
import { BsFileText, BsGrid } from "react-icons/bs";
import { HiOutlineSun } from "react-icons/hi";
import { FiMapPin } from "react-icons/fi";
import { Link } from "react-router-dom";

const FestivalKrakatau = () => {
    const judul = "Mitos Curug Cinulang"

    return (
        <Box w="100%" minHeight="1200px" paddingY={8} bg="gray.50" marginBottom="-50px" display="flex" justifyContent="center">
            
            <Box display="flex" flexDir="column" width="80%" alignItems="center" position="relative">
                <Flex width="100%" flexDir="column" justifyContent="center" alignItems="center" marginTop={3}>
                    <Heading fontFamily="Mick Kelly" fontWeight="bold" marginBottom={2} size="2xl" bgGradient="linear(to-r, #85665e, #B4887C)" bgClip="text" lineHeight="65px" textAlign="center">
                        {judul}
                    </Heading>
                </Flex>
                <Box alignSelf="flex-start">
                    <Link to="/bumibudaya/artikel">
                        <SmallTab icon={<ArrowBackIcon />} text="Back" variant="ghost" />
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
                    <p><img src="https://travelspromo.com/wp-content/uploads/2019/11/Keindahan-Curug-Cinulang.-Foto-Gmap-Bayu-Suseno-e1573089277819.jpg" alt="" /></p><br />
                    <p>Halo, Minbum di sini. Minbum adalah kependekan dari Mimin Kebumian. Kali ini kita akan membahas mengenai sebuah wisata yang ada di Jawa Barat. Wisata yang akan kita bahas adalah sebuah air terjun, kalau dalam Bahasa Sunda biasanya disebut ‘curug’. Untuk Sobum (Sobat Kebumian) yang pernah nih atau mungkin tinggal di Kabupaten Bandung dan sekitarnya tentu sudah tidak asing lagi dengan tempat ini dong. Ya, tempat yang dimaksud adalah Curug Cinulang.</p><br />
                    <p>Curug Cinulang merupakan sebuah air terjun yang berlokasikan di perbatasan Kabupaten Bandung dan Kabupaten Sumedang, tepatnya di Desa Sindulang, Kecamatan Cimanggung, Kabupaten Sumedang. Di antara Sobum semua mungkin ada yang pernah ke sini ? kalau Minbum sih belum hiks. Waktu itu pernah sebenarnya Minbum mengajak teman Minbum pergi, tapi dia malah berkunjung ke sana bersama orang lain dan tidak mengajak Minbum huhuhu (curhat dikit tidak apa-apa ya). </p><br />
                    <p>Curug Cinulang ini katanya sangat indah dan menyejukkan hati. Pemandangan yang menakjubkan membuat air terjun ini memiliki daya tarik tersendiri bagi pengunjungnya. Tinggi dari air terjun ini berkisar antara 20-30 meter <em>nih</em> Sobum. Sungai Citarik yang berhulu di Gunung Kareumbi merupakan aliran dari air terjun ini. Lokasi Gunung Kareumbi pun tidak jauh dari Curug Cinulang. Dan mesti kalian tahu, curug ini masih dikelola secara tradisional lho, hebat bukan.</p><br />
                    <p>Nah, tadi kita sudah berkenalan ya dengan Curug Cinulang. Namun, yang indah tidaklah selalu indah dan yang cantik tidaklah selalu cantik pula. Dibalik keindahan dari Curug Cinulang ini terdapat mitos yang sudah beredar luas ke penjuru Jawa Barat dan sekitarnya. Hah mitos apa <em>tuh</em> Minbum ? Jadi, mitosnya itu untuk siapa pun yang mempunyai pasangan kemudian datang bersama ke tempat ini konon katanya hubungan mereka akan berakhir. Serem banget gak sih dengernya. Denger-denger temennya Ibu Minbum ada yang putus juga setelah berkunjung ke sana <em>weh</em>, apakah mitos ini benar adanya ya. Belum tentu juga, banyak juga kok pasangan yang datang ke curug ini berakhir bahagia. Aaaa so sweet banget. Kalau Minbum sih jomblo ya jadi tidak terlalu memikirkan mitos itu juga wkwkwwk.</p><br />
                    <p>Kalau tadi bahas pasangan nih, sekarang giliran para jomblo yang akan dibahas. Sobum juga banyak kan yang jomblo ngaku deh. Mitos lainnya mengatakan kalau jomblo yang datang ke sini sendiri kemudian berkenalan dengan lawan jenisnya, konon akan menjadi jodohnya bahkan hingga menikah. Jadi, untuk para jomblo jangan lupa deh untuk berkunjung ke Curug Cinulang ini. Siapa tahu bisa mendapat jodoh sebenarnya ya kan usaha dulu aja.</p><br />
                    <p>Oh satu lagi, kalian juga harus tahu kalau Curug Cinulang ini juga dibuat lagu<em> lho</em>. Lagunya berjudul Curug Cinulang yang dinyanyikan oleh salah satu penyanyi pop Sunda, yaitu Darso. </p><br />
                    <p>Itu dia Curug Cinulang dan mitos-mitos yang ada di sana. Jadikan ini sebagai hiburan aja ya jangan terlalu dianggap serius, namanya juga mitos. <br /><br />
                    Sekian dari Minbum, dadah Sobum-Sobumku.</p>

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
                            <Link to="/bumibudaya/artikel">
                                <Button 
                                    leftIcon={<BsFileText />} 
                                    variant="solid"
                                    shadow="md"
                                    bgColor="white"
                                    fontFamily="Mick Kelly"
                                    fontSize="13px"
                                    fontWeight="200"
                                    width="100%"
                                >
                                    Article
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
                                    Culture Map
                                </Button>
                            </Link>
                        </Box>
                        <Box width="48%">
                            <Link to="/bumibudaya/hope">
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
                                    Hope
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