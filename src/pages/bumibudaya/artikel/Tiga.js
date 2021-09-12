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
    const judul = "Chit Ngiat Phan, Tradisi Solidaritas Masyarakat Bangka"

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
                    <p><img src="https://cdn-2.tstatic.net/tribunnews/foto/images/preview/20130822_ritual-chit-ngiat-pan-di-bangka-belitung_3270.jpg" alt="" /></p><br />
                    <p><em>Ape kabar peradik? Semoga baek-baek bai okk!</em><br /><br />
                    Pada kesempatan kali ini, kita akan mengulik serta mengenal salah satu kebudayaan berbentuk tradisi dari daerah Kepulauan Bangka Belitung yaitu tradisi upacara<em> Chit Ngiat Phan</em>. Tahan dulu semua pertanyaan di pikiran kalian mengenai tradisi upacara <em>Chit Ngiat Phan</em> ini karena kita akan terlebih dahulu  membahas sekilas mengenai apa sih itu kebudayaan? Serta apa itu tradisi? Nah kebudayaan sendiri memiliki definisi berupa konsep atau suatu cara hidup yang berkembang dan dimiliki bersama oleh sebuah kelompok orang dan diwariskan dari generasi ke generasi. Lalu kenapa tradisi tersebut tidak terputuskan atau lekang oleh waktu? Karena tradisi sendiri sangat melekat dan menjadi keyakinan yang mengikat bagi kehidupan kelompok tersebut. Nah beralih ke tradisi yang merupakan salah satu bentuk dari kebudayaan berupa suatu gagasan yang sudah diwariskan pada masa lalu dan sampai sekarang masih benar-benar ada, serta terus dilaksanakan sesuai dengan apa yang sudah pernah dijalankan.</p><br />
                    <p>Selanjutnya kita akan membahas mengenai tradisi upacara<em> Chit Ngiat Phan</em>. Tradisi upacara <em>Chit Ngiat Phan</em> sendiri merupakan kebudayaan khas yang dimiliki masyarakat Kabupaten Bangka (salah satu kabupaten di Kepulauan Bangka Belitung) yang selalu dirayakan oleh warga Tionghoa Bangka pada bulan ke-7 tanggal 15 (penanggalan China) di setiap kelenteng. Tradisi ini bertujuan untuk memberikan penghormatan kepada arwah leluhur mereka. Tradisi ini sendiri didasari oleh kepercayaan warga Tionghoa Bangka bahwa pada bulan ke-7 (penanggalan China) atau disebut dengan Bulan Hantu yang mana dipercayai selama kurun waktu setengah bulan, pintu akhirat terbuka dan seluruh arwah akan turun ke bumi. Di antara arwah tersebut, ada yang bergentayangan dalam keadaan terlantar dan sangat membutuhkan persembahan makanan. Arwah yang terlantar ini disebabkan tidak memiliki keturunan, meninggal secara tidak wajar, dan meninggal dalam kurun waktu yang sudah sangat lama.</p><br />
                    <p><img src="https://cdn-2.tstatic.net/tribunnews/foto/images/preview/20130822_ritual-chit-ngiat-pan-di-bangka-belitung_2497.jpg" alt="" /></p><br />
                    <p>Rangkaian tradisi upacara <em>Chit Ngiat Phan</em> terbagi menjadi tiga kegiatan. Pertama ialah sembahyang di rumah satu hari sebelum malam terakhir. Kedua merupakan prosesi <em>rebut</em>,  merebutkan atau mengambil dengan cepat barang-barang yang disediakan panitia yang meliputi sembako, buah-buahan, sayur-sayuran, serta beberapa alat elektronik. Prosesi <em>rebut</em> bisa diikuti seluruh warga yang menonton tradisi ini dan yang unik dari prosesi ini ialah setiap orang berusaha untuk mendapatkan atau mengambil sesuatu. Bukan dalam artian tamak, namun dipercaya jika tidak memperoleh sesuatu maka akan memperoleh kemalangan di kemudian hari. Dan kegiatan ketiga atau penutup tradisi upacara <em>Chit Ngiat Phan</em> yaitu proses pembakaran replika patung saat jam 12 malam. Mungkin ada yang sedari awal penasaran dengan foto replika patung besar di awal, <em>Nahh..</em> jadi patung besar tersebut disebut dengan patung <em>Thai Tse Ja</em>. <em>Thai Tse Ja</em> sendiri merupakan raja akhirat dalam keyakinan Tionghoa. Dengan penampilan replika patung <em>Thai Tse Ja</em>  dalam keadaan duduk, di tangan kiri memegang buku, dan di tangan kanan memegang pena. Diyakini <em>Thai Tse Ja</em> sedang mencatat arwah gentayangan di Bumi. Prosesi pembakaran replika patung saat jam 12 malam ini memiliki arti bahwa pintu akhirat akan tertutup dan <em>Thai Tse Ja</em> sebagai raja akhirat akan menarik paksa arwah yang bergentayangan tadi kembali ke dunia akhirat.</p><br />
                    <p>Pada saat menjelang perayaan tradisi upacara <em>Chit Ngiat Phan</em>, tidak hanya warga Tionghoa yang mempersiapkan tetapi juga warga non-Tionghoa turut andil bagian. Walaupun ada perbedaan agama, suku, dan ras pada pelaksanaan tradisi ini, namun mereka tetap saling bekerja sama secara harmonis. Tradisi upacara <em>Chit Ngiat Phan</em> memilik makna yang lebih daripada hanya sekadar perayaan suatu etnis. Makna yang lebih tersebut ialah menjadi komunikasi dan tindakan sosial diantara masyarakat bangka yang memiliki perbedaan didalamnya untuk membentuk ikatan solidaritas yang kuat.</p><br />
                    <p><img src="https://cdn-2.tstatic.net/tribunnews/foto/images/preview/20130822_ritual-chit-ngiat-pan-di-bangka-belitung_4571.jpg" alt="" /></p><br />
                    <p>Setelah kita mengenal mengenai tradisi upacara <em>Chit Ngiat Phan</em>, maka kita bisa menentukan pemosisian kebudayaan tersebut (3T) :</p><br />
                    <ol>
                    <li><strong>Tatanan</strong><br />
                    Tradisi upacara <em>Chit Ngiat Phan</em> sebagai suatu bentuk kebudayaan atas kepercayaan masyarakat Tionghoa Bangka yang bertujuan untuk menghormati kepada arwah leluhur mereka.</li><br />
                    <li><strong>Tuntunan</strong><br />
                    Tradisi upacara <em>Chit Ngiat Phan</em> menuntut untuk selalu menghormati mereka yang telah tiada. Selain itu juga sebagai sarana komunikasi dan tindakan sosial bagi seluruh masyarakat bangka terlepas dari perbedaan agama, ras, dan suku yang ada untuk bisa membentuk ikatan solidaritas antar sesama.</li><br />
                    <li><strong>Tontonan</strong><br />
                    Tradisi upacara <em>Chit Ngiat Phan</em> sebagai suatu daya tarik bagi orang-orang dari luar Bangka untuk ikut menyaksikan/menonton rangkaian kegiatan yang diadakan.</li><br />
                    </ol>
                    <p><strong>Referensi:</strong></p>
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