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
    const judul = "Inilah Fakta-Fakta Unik Tentang Kepulauan Riau yang Perlu Kalian  Ketahui!"

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
                    padding="20px"
                    marginTop="10px"
                    textAlign="justify"
                    className="artikel"
                >
                    <p>Kepulauan Riau (disingkat Kepri) adalah sebuah provinsi yang ada di Indonesia. Provinsi Kepulauan Riau merupakan provinsi yang penuh dengan limpahan rahmat dari Tuhan Yang Maha Esa. Selain letak geografisnya yang sangat strategis karena berada pada pintu masuk Selat Malaka dari sebelah Timur juga berbatasan dengan pusat bisnis dan keuangan di Asia Pasifik yakni Singapura. Disamping itu Provinsi ini juga berbatasan langsung dengan Malaysia. </p><br />
                    <p>Karena letak geografisnya yang sangat strategis sehingga Provinsi Kepri ini termasuk kedalam Zona Perdagangan Bebas atau biasa disebut Free Trade Zone. Hal ini merupakan salah satu keunikan dari Provinsi Kepri. Nah, Provinsi Kepri ini masih memiliki banyak fakta uniknya lho. Mau tau? Yuk simak!</p><br />
                    <p><b>1. Kepulauan Riau Merupakan Provinsi dengan Pulau Terbanyak di Indonesia<br /></b>
                    Indonesia sebagai negara kepulauan tentu saja memiliki jumlah pulau yang jumlahnya ratusan ribu, akan tetapi dari jumlah pulau itu sendiri provinsi dengan Kepulauan terbanyak di Indonesia adalah Kepulauan Riau. </p><br />
                    <p><a href=""><img src="https://iili.io/RVmQ0F.jpg" alt="" /></a></p><br />
                    <p>Kepulauan Riau pun dijuluki Bumi Segantang Lada, karena pulau-pulaunya memang bertaburan seperti lada, dari kawasan Anambas, Natuna, hingga Batam dan Bintan. Tapi, berapakah jumlah pulau di Kepri sebenarnya?<br />
                    Menurut Badan Pusat Statistik (BPS), Kepri mengoleksi 2.408 pulau mewakili 14% total pulau di Indonesia. Dengan catatan ini, Kepri pun bertengger sebagai provinsi dengan pulau terbanyak di Indonesia. </p><br />
                    <p><b>2. Masyarakat Kepulauan Riau Lebih Murah Wisata di Luar Negeri daripada di Jakarta</b></p><br />
                    <p><a href=""><img src="https://iili.io/RVmDJa.jpg" alt="" /></a></p><br />
                    <p>Jakarta sebagai Ibukota Indonesia memang memiliki daya tarik tersendiri untuk berwisata, akan tetapi perlu dipahami bahwa biaya untuk wisata di DKI Jakarta dan di luar negeri menurut masyarakat Kepri lebih murah di luar negeri. Karena letak Kepri sangat dekat dengan negara asing sehingga biaya yang diperlukan hanya berkisar Rp250.000</p><br />
                    <b><p>3. Memiliki Banyak Tempat Wisata</p></b>
                    <p>-<a href=""><img src="https://iili.io/RVmmOv.jpg" alt="" /></a></p><br />
                    <p>Provinsi Kepri ini memiliki potensi wisata terutama wisata kepulauan. Provinsi ini memiliki karakteristik yang berbeda-beda untuk dijadikan kawasan destinasi wisata terpadu, diantaranya wisata alam atau bahari, wisata religi, wisata belanja, wisata agro, wisata MICE, wisata kuliner, wisata olahraga,dan wisata sejarah. </p><br />
                    <p>Tidak heran provinsi ini memiliki banyak destinasi wisata karena memiliki letak geografis yang sangat strategis sebagai pertemuan tiga negara, yaitu Indonesia, Malaysia, dan Singapura. Sehingga banyak wisatawan asing yang berkunjung ke destinasi wisata di Provinsi Kepri. Beberapa diantaranya ialah Pulau Ranoh, Batu Lepe, Pulau Bawah Anambas, Pulau Mubut, Jembatan Barelang Batam, Gurun Telaga Biru, dan masih banyak lagi wisata lainnya. Pastikan kalau mau liburan ke Kepri briefing dulu karena banyak wisatanya, kalau tidak nanti malah bingung mau berkunjung ke yang mana satu.</p><br />
                    <b><p>4. Surganya Barang Branded Berharga Miring</p><br /></b>
                    <p><a href=""><img src="https://iili.io/RVmb5J.jpg" alt="" /></a></p><br />
                    <p>Batam yang merupakan salah satu kota di Provinsi Kepri juga terkenal dengan black market-nya. Namun, konsumen harus benar-benar teliti saat membelinya agar tidak bermasalah di kemudian hari. Batam juga menjadi rumah bagi barang-barang branded dengan harga lebih miring. Tas-tas bermerek dijajakan di sejumlah toko yang tersebar di pusat kota, seperti keluaran Gucci, Bonia, atau Braun Buffel. Bukan hanya tas-tas saja </p><br />
                    <p>lho, tapi jualan HP di Batam juga murah-murah sampai masuk Youtube Gadgetin lagi, keren bukan?<br />
                    Fenomena unik ini lantaran disebabkan karena penetapan kota ini sebagai area perdagangan bebas pajak. Semua kegiatan ekspor dan impor serta aktivitas pelabuhan tidak dipungut pajak. Akibatnya, harga barang lebih murah dibanding kota lainnya di Indonesia. Mau punya barang branded tapi murah? Yuk, ke Batam!</p><br />
                    <p>Nah, sekarang kalian sudah tahu kan fakta-fakta unik apa aja yang ada di provinsi Kepulauan Riau. Pastinya kalian sangat ingin wisata ke Kepri kan? Atau kalian mau ke Batam karena barang-barang branded disana murah-murah? Pasti dong, kalau tidak rugi bangetkan.</p><br />

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