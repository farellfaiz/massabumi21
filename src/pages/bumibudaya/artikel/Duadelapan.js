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
    const judul = "Lebih Dekat dengan Tugu Jogja"

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
                    <p><img src="https://iili.io/RedCv4.jpg" alt="" /></p><br />
                    <p>Halo Semua, Pada kesempatan kali ini kita akan berkenalan dan lebih dekat dengan salah satu ikon dari Kota Jogjakarta. Apalagi kalau bukan Tugu Jogja. Seperti kata para turis, tidaklah lengkap rasanya datang ke Jogja tanpa mampir dan belanja di Malioboro dan berfoto di Tugu Jogja. Pasti kalian sudah sering sekali kan mendengar tentang tugu yang satu ini ? Kalau belum, ini adalah saat yang tepat untuk kalian mengenal Tugu Ikonik yang satu ini. Tanpa banyak berbasa-basi lagi mari kita mulai...</p><br />
                    <p>Tugu Jogja adalah monumen ikonik yang ada di Daerah Istimewa Yogyakarta. Tugu Jogja sering sekali menjadi simbol yang mewakili kota Yogyakarta itu sendiri. Tugu yang berada tepat ditengah perempatan yang menghubungkan 4 jalan utama yakni Jalan Pangeran Mangkubumi, Jalan Jendral Soedirman, Jalan A.M.Sangaji, dan Jalan Diponegoro ini menjadi saksi bisu mengenai sejarah yang terjadi di Yogyakarta pada masa lampau.</p><br />
                    <p>Tugu Jogja dibangun pada tahun 1756 yakni 1 tahun setelah berdirinya Yogyakarta. Pada awal pembangunan tugu, Bangunan berbentuk silinder (<em>golong</em>) yang menjulang ke atas, dengan bagian dasar berbentuk pagar, dan pada bagian atas berbentuk bulatan (<em>gilig</em>). Karena bentuknya yang unik, dikenallah tugu dengan sebutan Tugu Golong Gilig. Pada bangunan ini tersimpan maksud berupa bentuk dari semangat persatuan antara rakyat dengan Raja dalam melawan Penjajah. Dalam filosofi Jawa yakni merepresentasikan <em>Manunggaling Kawula Gusti</em> yang bermakna Bukan hanya menyatukan rakyat dengan penguasa tetapi juga menyatukan manusia dengan kehendak Tuhan Yang Maha Kuasa. Konon katanya, Bulatan (<em>gilig</em>) yang ada pada puncak tugu digunakan sebagai titik pandang untuk fokus dalam meditasi (<em>sinawaka</em>) oleh para Sri Sultan di Bangsal Manguntur Tangkil yang terletak di <em>Siti Hinggil Lor</em>, ruang tahkta yang ada di Keraton Yogyakarta.</p><br />
                    <p>Namun Musibah besar melanda Yogyakarta terjadi pada tanggal 10 Juni 1867. Gempa menguncangkan Yogyakarta dan merusak beberapa bangunan salah satunya Tugu Golong Gilig. Berdasarkan Sejarah yang tercatat, Pilar Tugu patah dan hanya tersisa kurang dari sepertiga tinggi Tugu Golong Gilig yang semula memiliki tinggi 25 Meter. Tugu ini sempat terbengkalai beberapa tahun karena masa Transisi hingga pada masa Sri Sultan Hamengku Buwono VII, tugu ini kembali dibangun dan diresmikan tanggal 3 Oktober 1889. Pada pembangunan kali ini terjadi sedikit perubahan pada tugu, dimana yang semula berupa <em>golong</em> dan <em>gilig</em> berubah menjadi bentuk persegi dengan ujung yang lancip seperti masa sekarang. Perubahan lain yakni yang semula memiliki tinggi 25 meter diubah menjadi tinggal 15 meter saja. Sejak saat itu tugu dikenal sebagai <em>De Witt Paal</em> atau Tugu Pal Putih. Perubahan yang terjadi ini memiliki maksud tersirat yang direncanakan oleh Belanda  dimana mereka berusaha untuk menghilangkan makna simbol yang terkandung pada tugu yakni kebersamaan antara rakyat dengan raja.<br />
                    Pada Tugu terdapat 4 prasasti yang tertulis di setiap sisinya. Dimana prasasti ini berisi tentang hal-hal yang berkaitan pada saat proses rekonstruksi Tugu Golong Gilig. Prasasti itu berupa:</p><br />
                    <ol>
                    <li><p>Prasasti pada sisi barat bertuliskan “YASAN DALEM INGKANG SINUHUN KANJENG SULTAN HAMENGKUBUWONO KAPING VII”. Pernyataan tersebut menginformasikan bahwa pembangunan kembali tugu tersebut terjadi pada zaman kesultanan Sri Sultan Hamengku Buwanan VII.</p><br />
                    </li>
                    <li><p>Prasasti pada sisi timur bertuliskan “INGKANG MANGAYUBAGYA KARSA DALEM KANJENG TUWAN RESIDHEN Y. MULLEMESTER”. Pernyataan tersebut menginformasikan bahwa Residen Yogyakarta pada waktu itu, yakni Y. Mullemester menyambut dengan baik pembangunan kembali Tugu Golong Gilig.</p><br />
                    </li>
                    <li><p>Prasasti pada sisi selatan bertuliskan “WIWARA HARJA MANGGALA PRAJA, KAPING VII SAPAR ALIP 1819”. Pernyataan tersebut menginformasikan selesainya rekonstruksi Tugu Golong Gilig. Kata Wiwara bermakna gerbang,sebagai perwakilan angka 9. Kata Harja bermakna kemakmuran,sebagai perwakilan dari angka 1. Kata Manggala bermakna pemimpin,sebagai perwakilan angka 8. Kata Praja bermakna negara,sebagai perwakilan angka 1. Sehingga dapat diartikan perjalanan menuju gerbang kemakmuran yang dimulai dari pemimpin dan angka 1819 tertulis sebagai tahun selesainya di bangun kembali.</p><br />
                    </li>
                    <li><p>Prasasti pada sisi utara bertuliskan “PAKARYANIPUN SINEMBADAN PATIH DALEM KANJENG RADEN ADIPATI DANUREJA INGKANG KAPING V. KAUDHAGEN DENING TUWAN YPF VAN BRUSSEL. OPSIHTER WATERSTAAT”. Pernyatan tersebut menginformasikan pembangunan tugu dipimpin oleh Patih Danurejo V, Arsitektur tugu dirancang oleh YPF Van Brussel yang bekerja sebagai petugas pengairan di Yogyakarta kala itu.</p><br />
                    </li>
                    </ol>
                    <p>Di masa sekarang ini, Tugu Jogja telah diperindah dengan menyingkirkan kabel-kabel listrik yang dahulu berada diatas tugu menjadi ada dibawah tanah sehingga tidak menghalangi pesona dari Tugu Jogja itu sendiri. Tugu Golong Gilig sudah menjadi kebanggaan bagi masyarakat Yogyakarta. Tugu Golong Gilig telah menjadi daya tarik bagi wisatawan lokal maupun mancanegara. Tugu Jogja menjadi bagian dari sejarah perkembangan Daerah Istimewa Yogyakarta sehingga saat ini Tugu Golong Gilig ditetapkan sebagai cagar budaya yang patut dijaga dan dilestarikan.</p><br />
                    <p><img src="https://c0.wallpaperflare.com/preview/165/286/478/indonesia-jalan-yogyakarta-monument-building.jpg" alt="" /></p>
                    <i><center>(Sumber: wallpaperflare.com)</center></i>
                    <p>Sekian informasi mengenai Tugu Jogja pada kesempatan kali ini, jangan lupa untuk mampir ke Jogja ya dan jangan lupa untuk berfoto di Tugu Jogja yang Ikonik ini. Sampai jumpa di kesempatan berikutnya...<br />
                    <em>Matur Nuwun</em></p><br />
                    <p><b>Daftar Pustaka</b><br />
                    (kratonjogja.id, 2018) Tugu Golong Gilig, Simbol Persatuan Raja dan Rakyat<br />
                    (UTOMO, 2021) TUGU JOGJA Landmark Kota Jogja yang Paling Terkenal<br />
                    (Admin, 2017) Tugu Jogja, Simbol Kota Yogyakarta</p>
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