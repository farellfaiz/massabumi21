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
    const judul = "Mengenal Suku Kubu di Pedalaman Sumatera"

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
                    <p>Seperti yang kita ketahui, Indonesia merupakan negara kepulauan yang memiliki berbagai macam suku yang sangat banyak jumlahnya. Suku-suku tersebut tersebar di seluruh wilayah Indonesia, mulai dari Sabang sampai Merauke. Menurut sensus penduduk oleh Badan Pusat Statistik (BPS) tahun 2010, Indonesia memiliki sekitar 1.340 suku bangsa. Hal ini menjadikan Indonesia salah satu negara dengan suku dan etnis terbanyak di dunia. Setiap suku di Indonesia memiliki ciri khas dan keunikan masing-masing yang membuat Indonesia kaya akan ragam budaya. Ciri khas dari setiap suku tersebut dapat dilihat dari berberapa aspek seperti contohnya Bahasa, ciri fisik, kebudayaan, kesenian, interaksi sosial, dan cara hidup.</p><br />
                    <p><img src="https://buguruku.com/wp-content/uploads/2020/05/33suku.jpg" alt="" /></p><br />
                    <p>Suku Kubu atau yang biasa disebut Suku Anak Dalam merupakan salah satu dari banyaknya suku yang ada di Indonesia. Suku Kubu tersebar di beberapa wilayah di Pulau Sumatera, khususnya di Provinsi Jambi dan Provinsi Sumatera Selatan. Suku Kubu memiliki populasi sekitar  200.000 jiwa. Tidak mudah untuk bertemu dengan Suku Kubu ini karena lokasi tempat tinggalnya yang cukup terpencil dan berada di hutan belantara. Untuk menemukan Suku Kubu, dibutuhkan perjalanan sekitar enam sampai tujuh jam dari pusat Kota Jambi, medan yang ditempuh juga cukup sulit, anda harus menaiki sepeda motor atau jalan kaki dari kabupaten terdekat.</p><br />
                    <p><img src="https://1.bp.blogspot.com/-NC1V1Af-kHU/XwFJcQbzciI/AAAAAAAABp8/JIOj6pm2zLQBwLmlBiTt4Az3z6JIvsscACK4BGAsYHg/s1280/Anak%2BDalam.jpeg" alt="" /><br /></p>
                    <p>Ada banyak teori tentang dari mana Suku Kubu ini berasal. Teori yang pertama mengatakan bahwa Suku Kubu Berasal dari orang-orang Sumatera Barat yang tidak mau dijajah oleh belanda, mereka mengasingkan diri dan masuk ke dalam hutan untuk menghindari pasukan Belanda, lalu mereka hidup dan memiliki keturunan hingga saat ini. Teori yang kedua mengatakan konon katanya nenek moyang suku ini berasal dari para tantara pagaruyung yang tersesat. Adapun teori yang lain mengatakan bahwa masyarakat Suku Anak Dalam ini berasal dari orang-orang kerajaan sriwijaya yang melarikan diri karena runtuhnya kerajaan sriwijaya, mereka tidak mau tunduk terhadap kekuasaan asing, oleh karena itu mereka memilih untuk tinggal di hutan.</p><br />
                    <p><img src="https://4.bp.blogspot.com/-nzYYskJSVo8/WJSq3SwRgoI/AAAAAAAAfSU/DWw5KCtoySEVkeyTnCAUA3CQBFCynxibQCLcB/s1600/Fakta%2BTentang%2BSuku%2BAnak%2BDalam.jpeg" alt="" /><br /></p>
                    <p>Kehidupan Suku Kubu masih sangat bergantung pada alam di sekitarnya. Mereka memanfaatkan semuanya yang ada di alam untuk membuat makanan, pakaian, tempat tinggal, dan perabotan rumah tangga. Pemimpin dari suku ini disebut “Tumenggung”. Laki-laki Suku Kubu biasanya menggunakan cawat sebagai pakaian dan penutup bawahan untuk perempuan. Sebagian besar masyarakat dari Suku Kubu masih mempertahankan budaya dan adat istiadat dari para leluhurnya. Mereka menjunjung tinggi peraturan yang telah ditetapkan oleh nenek moyang mereka, seperti contohnya larangan berduaan bagi laki-laki dan perempuan. Salah satu budaya dari Suku Kubu adalah hidup secara berpindah pindah atau nomaden, salah satu penyebabnya adalah peraturan yang bernama “melanggun”. Peraturan ini mengharuskan masyarakat berpindah tempat dan mencari tempat baru jika salah satu dari mereka meninggal dunia, hal tersebut bertujuan agar kesedihan cepat berlalu. Mayoritas masyarakat Suku Kubu memiliki kepercayaan Animisme atau kepercayaan kepada makhluk halus dan roh. Mereka juga mempercayai empat elemen seperti api, air, angin, dan tanah sebagai elemen yang dianggap berkuasa. Orang-orang rimba ini membagi zonasi berdasarkan tempat untuk berburu, melakukan ritual adat, dan bercocok tanam. Sistem zonasi ini diharapkan mampu memudahkan mereka untuk melakukan berbagai aktivitas. Masyarakat Suku Kubu memiliki Batasan interaksi dengan masyarakat luar, karena beberapa dari mereka percaya bahwa masyarakat luar merupakan “pemakan manusia”. Mereka menyebut masyarakat dunia luar sebagai “dunia terang”. </p><br />
                    <p><img src="https://media.suara.com/pictures/653x366/2021/02/23/87225-produser-film-jimi-delvia-saat-berkomunikasi-dengan-orang-rimba-ist.jpg" alt="" /><br /></p>
<p>Hidup di tengah hutan membuat sakit menjadi salah satu permasalahan yang dihadapi oleh masyarakat suku ini. Sulitnya akses dan jauhnya jarak membuat mereka tidak bisa menggunakan fasilitas kesehatan yang disediakan oleh pemeritah. Mereka memiliki ramuan obat yang secara turun temurun digunakan untuk mengobati orang yang sakit, tetapi ramuan ini saja tidak cukup untuk mengobati sakit yang cukup parah seperti malaria. Survei dari Lembaga Biologi Molekuler Ejikman menunjukkan prevalensi penyakit malaria masyarakat Suku Kubu sebesar 24,6% sedangkan prevalensi penyakit malaria masyarakat jambi hanya sekitar 0,08%. Artinya, masyarakat Suku Kubu yang terjangkit malaria 300 kali lebih banyak daripada masyarakat Jambi. Masalah lain yang dihadapi Suku Kubu adalah semakin sempitnya lahan tempat tinggal karena penebangan dan pembakaran hutan untuk dijadikan pemukiman masyarakat kota. Sudah seharusnya kita sebagai masyarakat kota sadar dan meminta pemerintah setempat untuk lebih memperhatikan kondisi saudara kita yang berada di pedalaman tersebut, karena mereka adalah bagian dari rakyat Indonesia. Kesejahteraan mereka adalah fokus utama kita. Kita bisa melakukan hal-hal kecil untuk membantuk mereka seperti mengkampanyekan kemakmuran masyarakat yang tinggal di pedalaman. Tentu saja akan sangat luar biasa jika kita bisa membantu mereka secara langsung seperti yang dilakukan oleh Saur Butet Manurung. Pemberian lahan tempat tinggal dan fasilitas kesehatan yang bisa dijangkau oleh suku pedalaman merupakan contoh bantuan yang seharusnya lebih diperhatikan lagi orang pemerintah. Dan dengan sejahteranya kehidupan mereka, suku-suku dan budaya di Indonesia akan lebih terjaga.</p><br />
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