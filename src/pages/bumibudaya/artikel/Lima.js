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
    const judul = "Sistem Kekerabatan Matrilineal di Sumatra Barat"

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
                    <p><img src="https://i1.wp.com/www.nesabamedia.com/wp-content/uploads/2019/05/Keunikan-Rumah-Adat-Minangkabau-e1557061441228.jpg?resize=600%2C400&amp;ssl=1" alt="" /></p><br />
                    <p>Mendengar kata <strong>Minangkabau</strong> atau lebih biasa disebut dengan <strong>Minang</strong> maka pikiran kita akan langsung terbang melayang ke negeri nan elok penuh pesona, Sumatra Barat, walaupun sebenarnya kekuasaan Minangkabau bukan hanya Sumatra Barat tapi juga meliputi separuh daratan Riau, bagian utara Bengkulu, bagian barat Jambi, bagian selatan Sumatra Utara, barat daya Aceh, dan juga Negeri Sembilan di Malaysia.</p><br />
                    <p>Provinsi Sumatra Barat bagi segelintir orang lebih diidentikkan dengan Padang, Ya memang, Padang merupakan Ibukota Provinsi Sumatra Barat. Selain itu, mendengar kata Padang atau Sumatra Barat tak lain masyarakat akan berpikir tentang masakan Padang atau lebih khususnya <strong>Rendang</strong> atau <strong>Randang</strong>. Makanan khas Sumatra Barat yang cita rasanya diakui dunia.</p><br />
                    <p>Terlepas dari semua itu ada yang juga menarik dari Sumatra Barat yaitu sistem kekerabatan di Minangkabau (Sumatra Barat). Minangkabau atau Sumatra Barat khususnya menganut <strong>sistem kekerabatan matrilineal</strong> yaitu <strong>sistem kekerabatan berdasarkan garis keturunan ibu</strong>. Setiap anak yang lahir dalam sebuah keluarga Minangkabau akan menjadi kerabat keluarga ibunya, bukan kerabat ayahnya yang biasa terjadi di suku-suku lain di Indonesia. Hal ini menjadikan ciri khas tersendiri bagi Minangkabau yang membedakannya dengan suku lain di Indonesia.</p><br />
                    <p>Adapun ciri-ciri dari sistem matrilineal yaitu sebagai berikut:</p>
                    <ol>
                    <li>Keturunan dihitung menurut garis ibu.</li>
                    <li>Suku terbentuk menurut garis ibu</li>
                    <li>Tiap orang diharuskan <em>kimpoi</em> (kawin/nikah) dengan orang luar sukunya atau eksogami karena di Minangkabau dilarang <em>kimpoi</em> sesuku.</li>
                    <li>Pembalasan dendam merupakan satu kewajiban bagi seluruh suku.</li>
                    <li><em>Perkimpoian</em> bersifat matrilokal, yaitu suami mengunjungi dan tinggal dirumah istrinya.</li>
                    <li>Hak-hak dan pusaka diwariskan oleh mamak kepada kemenakannya dan dari saudara laki-laki ibu kepada anak dari saudara perempuan.</li><br />
                    </ol>
                    <p>Di dunia hanya beberapa suku saja yang menggunakan sistem matrilineal ini, yakni:</p>
                    <ul>
                    <li>Suku Minangkabau di Sumatra Barat, Indonesia</li>
                    <li>Suku Indian di Apache Barat</li>
                    <li>Suku Navajo, sebagian besar suku Pueblo, suku Crow, di Amerika Serikat</li>
                    <li>Suku Khasi di Meghalaya, India Timur Laut</li>
                    <li>Suku Nakhi di Provinsi Sichuan dan Yunnan, Tiongkok</li>
                    <li>Beberapa suku kecil di kepulauan Asia Pasifik</li>
                    </ul><br />
                    <p>Dari beberapa suku tersebut diatas, suku Minangkabau merupakan suku terbesar penganut sistem kekerabatan yang menurut garis keturunan ibu ini.<br />
                    Matrilineal merupakan salah satu aspek dalam menentukan dan mendefinisikan identitas masyarakat Minang. Kaum perempuan di Minangkabau memiliki kedudukan yang istimewa. Adat dan budaya di Minangkabau menempatkan pihak perempuan bertindak sebagai pewaris harta pusaka dan kekerabatan.</p><br />
                    <p>Sampai detik ini sistem kekerabatan matrilineal masih tetap dipertahankan masyarakat Minangkabau. Pada setiap individu Minang, memiliki kecenderungan untuk menyerahkan harta pusaka yang seharusnya dibagi kepada setiap anak menurut hukum <em>faraidh</em> dalam Islam hanya kepada anak perempuannya. Anak perempuan itu nanti menyerahkan pula kepada anak perempuannya pula. Dan anak laki-laki tidak mendapat bagian harta pusaka.</p><br />
                    <p>Dalam sistem keturunan matrilineal Minangkabau ini, ayah bukanlah anggota dari garis keturunan anak-anaknya. Dia dipandang tamu dan diperlakukan sebagai tamu dalam keluarga. Secara tradisi, setidak-tidaknya, tanggung jawabnya sebagai wali dari garis keturunannya dan pelindung atas harta benda garis keturunan itu sekalipun dia harus menahan dirinya dari menikmati hasil tanah dan harta pusaka kaumnya istrinya. Itu sebabnya lelaki Minang banyak yang hidup merantau ke daerah lain di luar Sumatra Barat.</p><br />

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