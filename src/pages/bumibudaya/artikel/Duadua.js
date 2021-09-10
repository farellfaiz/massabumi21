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
    const judul = "Peusijuek, Tradisi 'Tepung Tawar' pada Masyarakat Aceh"

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
                    <p><img src="https://steemitimages.com/DQme55cwL46fq8UoZyRPJVkD6TgqqzgcxQogPpKLBfCDNkF/20180208_094623.png" alt="" /></p><br />
                    <p>Lain tempat, lain juga kebudayaannya. Namun siapa sangka, kebudayaan di Aceh ini juga sama dengan kebudayaan di Melayu. Jika di Tanah Melayu disebut dengan tepung tawar, maka di Tanah Aceh hal ini disebut dengan <em>peusijuek</em>. Lalu ada apa dengan perlengkapan di atas? Mengapa menggunakan dedaunan? Mari kita simak artikel berikut!</p><br />
                    <p><em>Peusijuek</em> merupakan suatu prosesi adat dalam kebudayaan masyarakat Aceh yang masih melekat bahkan dipraktekkan hingga saat ini. <em>Peusijuek</em> sendiri dalam bahasa Indonesia berarti &#39;menepung tawari&#39; atau membuat sesuatu menjadi &quot;sejuk atau dingin&quot; (<em>peu</em> berarti membuat atau menjadikan, <em>sijuek </em>berarti sejuk atau dingin) yang mengandung makna bahwa dengan mengadakan <em>peusijuek</em> atau menepung tawari diharapkan akan memperoleh berkah, anugerah, atau berada dalam keadaan yang baik. </p><br />
                    <p>Kebiasaan melakukan <em>peusijuek</em> sudah berlangsung lama dalam masyarakat Aceh. Kebiasaan ini telah dilakukan masyarakat Aceh jauh sebelum Islam datang. Yakni ketika pengaruh agama Hindu masuk ke Aceh, atau lebih jauh sebelum itu, ketika masyarakat masih menganut kepercayaan animisme dan dinamisme. Akhirnya, seiring berjalan zaman, tradisi <em>peusijuk</em> berakulturasi dengan kebudayaan Islam.</p><br />
                    <p>Tradisi ini dilakukan pada hampir semua kegiatan adat dalam kehidupan masyarakat di Aceh tak terkecuali pada pernikahan saja. <em>Peusijuk</em> juga dilakukan ketika membeli kendaraan baru, menyelesaikan persengketaan, memulai membuat usaha, menempati rumah baru, merayakan kelulusan, akan melakukan kurban hewan ternak, kembalinya keluarga dari perantauan, khitanan dan masih banyak lagi.</p><br />
                    <p>Prosesi <em>Peusijuk</em> tidak dilakukan oleh sembarang orang. Diutamakan dilakukan oleh orang yang sangat memahami serta menguasai hukum agama, sebab prosesi ini berlangsungan dengan proses mendoakan keselamatan dan kesejahteraan bersama sesuai ajaran agama yang umum dianut di Aceh, yakni Islam. Apabila orang yang di-<em>peusijuek</em> adalah kaum laki-laki, biasanya dilakukan oleh <em>teungku</em> (ulama) atau orang yang dituakan (majelis adat), sedangkan apabila yang di-<em>peusijuek</em> adalah kaum perempuan, maka akan dilakukan oleh <em>ummi</em> atau seorang wanita yang dituakan oleh masyarakat.</p><br />
                    <p>Terdapat unsur-unsur penting dari <em>peusijuek</em>. Pertama, bahan yang digunakan, dari dedaunan, rerumputan, padi, tepung, air, nasi ketan dan  <em>tumpoe</em>. <em>Tumpoe</em> merupakan sejenis kue di terbuat dari adonan tepung, pisang, santan, gula dan garam dengan takaran tertentu. Kedua, gerakan yang dilakukan pada saat di-<em>peusijuek</em>. Ketiga adalah doa yang dibacakan menurut acara <em>peusijuek</em>. Dan yang terakhir adalah <em>teumutuek</em> (pemberian uang).</p><br />
                    <p>Gerakan-gerakan pada saat prosesi ini sangat unik, gerakan-gerakan ini hampir menyerupai gerakan saat melakukan ritual dalam agama Hindu. Tetapi, gerakan ini terjadi hanya mengikuti arah memercikkan air dari kiri ke kanan dan dari kanan ke kiri dan sesekali disilang. Banyak para <em>teungku</em> berpendapat bahwa adanya kesamaan ritual <em>peusijuek</em> dengan praktik pemujaan dalam agama Hindu bukan berarti bahwa <em>peusijuek</em> tersebut adalah ritual agama Hindu. Karena ritual itu sendiri sangat berbeda baik dari segi tujuan, cara, dan isi dari <em>peusijuek</em> tersebut.</p><br />
                    <p>Di saat ini, Upacara <em>peusijuek</em> sudah dipandang sebagai hal yang tidak lagi memberikan pengaruh bila dilakukan atau tidak dilakukan. Padahal, <em>peusijuek</em> semula mengandung nilai sakral dan dipandang sebagai suatu keharusan. Inilah bentuk pergeseran yang telah terjadi dalam beberapa dasawarsa ini. Semakin modern kehidupan masyarakat Aceh semakin luntur pula pelaksanaan adat peusijuek. Namun hendaknya upacara ini dilestarikan demi keberlangsungan untuk anak cucu nanti.</p><br />
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