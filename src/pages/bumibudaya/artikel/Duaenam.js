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
    const judul = "Pengikiran Gigi, Adat Masyarakat Tanah Tadulako"

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
                    <p><img src="https://gasbanter.com/wp-content/uploads/2020/08/upacara-adat-sulawesi-tengah-2.jpg" alt="" /></p><br />
                    <p>Sulawesi Tengah atau yang lebih akrab disebut Tanah Tadulako oleh masyarakat setempat merupakan provinsi dengan beragam kesenian dan kebudayaan. Hal ini disebabkan karena banyaknya suku yang ada di Sulawesi Tengah membuat kebudayaan yang ada juga sangat beragam. Sejauh ini tercatat terdapat 15 suku bangsa yang menempati provinsi ini.</p><br />
                    <p>Berbicara tentang kebudayaan, ada salah satu upacara adat yang sangat khas dimiliki oleh masyarakat Sulawesi Tengah, upacara ini menjadi tradisi beberapa suku besar tanah Kaili. Meratakan atau mengikir gigi menjadi tradisi yang dilakukan kepada anak-anak setempat ketika usianya menginjak remaja. Upacara ini memiliki nama dan prosesi yang berbeda-beda di tiap suku.</p><br />
                    <p>Suku Kaili Unde menyebut upacara ini sebagai prosesi <em>Nokeso</em>. Anak remaja yang akan melakukan prosesi ini adalah seorang perempuan yang telah menjelang usia baligh (disebut <em>Nabalego</em>) dan dilakukan dengan menggosok gigi bagian depan hingga rata. Upacara ini dimaksudkan untuk mengantarkan anak perempuan memasuki masa <em>karandaa</em> (gadis), diharapkan perempuan yang telah melakukan upacara ini dapat selalu menjaga dirinya, tutur kata, serta adat istiadat leluhurnya.</p><br />
                    <p>Bagi Suku Kulawi, upacara seperti ini diberi nama Rakeho bagi laki-laki dan Ratompo bagi perempuan. Upacara ini dimaksudkan untuk menyambut peralihan masa remaja ke masa dewasa. Prosesi Rakeho dan Ratompo dilakukan oleh seorang <em>topekeho/topetompo</em> (dukun) dengan meratakan gigi bagian depan hingga rata dengan gusi, baik gigi atas maupun gigi bawah untuk laki-laki dan pengikiran gigi untuk perempuan. Hal ini dimaksudkan agar mencegah terjadinya hal-hal yang tidak diinginkan yang berkaitan dengan keharmonisan hubungan rumah tangga. Biasanya, upacara ini dilaksanakan pada siang hari di sebuah rumah kosong yang jauh dari keramaian atau di bawah pohon rindang di tengah hutan.</p><br />
                    <p><img src="https://galeriwisata.files.wordpress.com/2012/03/kulawi2.jpg?w=497&amp;h=331&amp;zoom=2" alt="" /></p><br />
                    <p>Hal-hal diatas merupakan salah satu bukti bahwa kebudayaan serta suku bangsa yang ada di Indonesia sangatlah beragam, contohnya di Sulawesi Tengah. Beberapa budaya memiliki kemiripan tetapi dikemas dengan prosesi dan adat yang berbeda tergantung dengan daerah dan kebiasaan masyarakat sekitar.</p><br />
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