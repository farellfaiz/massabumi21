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
    const judul = "Tego-Tego/Poalo"

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
                    <p><img src="https://iili.io/RVQxWX.jpg" alt="" /></p><br />
                    <p>Tego - tego atau poalo ialah tradisi masyarakat Muna yang dilaksanakan ketika seseorang telah meninggal dunia selama 100 hari. Seseorang yang meninggal pada pukul berapapun, dapat disegerakan untuk melaksanakan tego - tego atau poalo. Tego - tego atau poalo ditemukan pada 600 Sebelum Masehi atau 25 tahun setelah Nabi Muhammad SAW menerima wahyu.</p><br />
                    <p><strong>Latar Belakang Tego - tego / Poalo</strong><br />
                    Awalnya, seorang pemuda yang bernama La Pada bertemu dengan seorang pria yang sedang melaksanakan sholat di atas alang - alang. Pria tersebut tidak diketahui nama dan asalnya. Masyarakat setempat meyakini bahwa pria yang dimaksudkan itu adalah seorang malaikat utusan Allah yang menjelma menjadi seorang wali. Pria itu kemudian mengabdikan diri sebagai guru La Pada. “Manusia terbentuk dari  fase - fase pembelahan. Manusia terbentuk dari pertemuan antara sel sperma dan ovum di dalam rahim, kira - kira sekitar  6 ml. Ibu menjaga anak dalam rahim. Seorang ibu yang melahirkan anaknya adalah rahasia Allah” ujar guru La Pada. La Pada bersama gurunya kemudian melakukan perjalan ke Arab. Suatu ketika, gurunya tiba - tiba meminta La Pada agar menyandarkan pahanya. “Kamu harus siap melaksanakan kewajiban. Antara lahir, sholat, dan mati itu adalah sama. Manusia adalah pilihan. Dari dalam kandungan, manusia telah berjanji untuk melaksanakan sholat. Manusia adalah makhluk islami, berarti harus dilaksanakan secara ketat. Islam adalah agama yang paling diridhoi. Ketika telah berumah tangga berarti manusia sudah diajarkan nilai-nilai keislaman. Maka wajib belajar istinja, dikamatkan bagi bayi perempuan, diazankan bagi bayi laki-laki, dan Ibu adalah paling dihargai.” Guru La Pada meninggal dunia dan meminta kepada La Pada agar melaksanakan syariat tadi. Setelah La Pada telah menjalankan amanat selama 120 hari, gurunya kemudian hidup kembali. “Dalam alam kubur, ada ke akhirat yang sesungguhnya. Kubur adalah rahim, maka kita wajib memperkuat silahturahmi.”Setelah La Pada mendapatkan gelar Haji menjadi Haji La Pada. Maka lahirlah tego- tego / poalo sebagai tradisi wajib yang dilaksanakan secara turun-temurun oleh masyarakat Muna.</p><br />
                    <p><img src="https://iili.io/RVQzsn.jpg" alt="" /></p><br />
                    <p><strong>Pelaksanaan Tego-tego/Poalo</strong><br />
                    Tego - tego atau poalo dilaksanakan ketika seseorang telah meninggal dunia. Dimulai dengan memandikan mayat menggunakan bantuan batang pisang dan cerek berwarna merah. Batang pisang berperan sebagai bantal bagi seorang mayat. Setelah dimandikan, mayat kemudian dikafani dengan tangan hingga siku harus benar – benar dalam keadaan tertutup tanpa cela. Maknanya karena manusia saat sholat  mengucapkan takbirotul ihram. Kemudian, mayat yang telah dikuburkan agar disirami menggunakan cerek, karena islam itu Alif, Ham, Mim, Dal. Maka saat penyiraman kuburan mayat, semburannya membentuk huruf Alif, Ham, Mim, Dal lalu dilanjutkan dengan baca - baca. Penguburan mayat secara gotong – royong dan baca - baca yang dilaksanakan secara ramai - ramai dapat memperkuat tali persaudaraan dan silahturahmi.  Kemudian, dilaksanakan patai tolu atau persiapan empat hari setelah meninggal. Biasanya pada patai tolu, pihak keluarga memanggil anak panti asuhan atau siswa SMA untuk membacakan surah Yasin. Lalu malam harinya dilanjutkan dengan baca - baca yang dipimpin oleh imam atau modhi. Baca - baca ( haroa ) adalah tudung saji berukuran jumbo yang didalamnya terdapat gorengan ayam, ayam parende, lapa-lapa, cucur, waje, ayam kawei, kue bolu, telur goreng, dan telur rebus. Terdapat juga dupa ( sejenis kemenyan ) dalam baca - baca ( haroa ). Baca – baca ( haroa ) bermakna makanan yang dibacakan oleh imam ( modhi ) ialah sebagai ungkapan rasa syukur karena amalan dari seseorang yang telah meninggal dunia telah diterima oleh Allah SWT. Baca – baca ( haroa ) dilaksanakan secara beramai - ramai dengan posisi duduk taseba ( bersila ) . Kemudian masuk pada etolu atau 4 hari. Proses patai tolu dan etolu hampir mirip. Hanya saja, pada etolu anak-anak dari seseorang yang telah meninggal harus dimandikan terlebih dahulu oleh imam ( modhi ) lalu pergi ke kubur pada waktu pagi hari. Pelaksanaan Etolu pada waktu sore menjelang magrib, imam (modhi) melakukan baca-baca ( haroa ) tapi tidak semeriah seperti patai tolu. Biasanya hanya imam, anak - anak, dan saudara kandung. Kemudian dilanjutkan dengan patai ifitu atau malam tujuh harinya. Makna dari patai ifitu ialah selama 7 hari tubuhnya telah rusak dan mulai berpisah dengan raganya. Masuk pada 40 hari, arwah dari mayat hanya bisa datang pada malam senin dan Jumat saja. Oleh karena itu, hanya dilaksanakan baca-baca ( haroa ) begitupun untuk 100 harinya.</p><br />
                    <p><strong>Pemosisian Kebudayaan 3T</strong><br />
                    Dalam tradisi ini terdapat unsur 3T yang dapat kita identifikasi, yaitu:</p><br />
                    <ul>
                    <li><strong>Tatanan</strong>, tego–tego/poalo harus dilaksanakan secara bertahap sesuai arahan imam ( modhi) karena berdasarkan adat Muna, Islam itu ketat karena antara sholat, lahir dan mati itu sama</li>
                    <li><strong>Tuntunan</strong>,  tego-tego/poalo dapat meningkatkan tali persaudaraan, hubungan silahturahmi, menghormati orang yang lebih tua, menjaga etika, dan meningkatkan nilai ketaqwaan</li>
                    <li><strong>Tontonan</strong>, tego-tego/poalo dapat dijumpai di Pulau Muna dan boleh dilakukan ketika seseorang telah dinyatakan meninggal dunia</li>
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