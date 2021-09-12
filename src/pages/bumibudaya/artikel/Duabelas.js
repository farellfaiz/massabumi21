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
    const judul = "Ludruk"

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
                    <p><img src="https://indonesiakaya.com/wp-content/uploads/2020/10/4__Tidak_hanya_bahasa_verbal_guyonan_dalam_ludruk_pun_disampaikan_melalui_gerak_-_sehingga_bisa_dimengerti_oleh_masyarakat_luas.jpg" alt="" /></p><br />
                    <p>Ludruk merupakan salah satu kesenian yang sangat terkenal di Jawa Timur. Sebagai seni peran, ludruk biasanya mengangkat cerita dengan tema kehidupan sehari-hari atau cerita kepahlawanan yang dibumbui dengan humor dan kritik sosial. Banyak yang mengatakan bahwa ludruk berasal dari Surabaya, namun pada Musyawarah Ludruk se-Jawa Timur yang berlangsung di Surabaya pada tanggal 21-22 Juni 1968 dirumuskan bahwa ludruk berasal dari daerah Jombang, Jawa Timur. </p><br />
                    <p>Berbicara soal Ludruk, tentu kita tidak akan lepas dari sosok Cak Durasim. Memiliki nama asli Gondo Durasim, beliau lahir di Jombang, Jawa Timur. Pada tahun 1933, Cak Durasim mendirikan Ludruk Organisatie (LO), sebuah kelompok ludruk di Surabaya dimana beliau disponsori oleh salah satu tokoh perintis kemerdekaan Indonesia, yaitu Dr. Soetomo. Dr. Soetomo melihat peluang ludruk untuk mengedukasi masyarakat dari golongan kecil mengenai semangat nasionalisme kemerdekaan. Cak Durasim mengorganisir ludruk gaya baru yang berbeda dengan ludruk-ludruk yang ada sebelumnya. Di samping menceritakan cerita-cerita legendaris Surabaya, Cak Durasim mengkritik kebijakan pemerintah kolonial, menggambarkan bagaimana keadaan rakyat yang sengsara, dan perjuangan rakyat Jawa Timur lewat pentasnya. Salah satu kidung beliau yang terkenal adalah Jula-Juli, yang dipentaskan di Keputran Kejambon, Surabaya. Pada kesempatan tersebut beliau melantunkan “Pagupon omahe doro, melok Nippon saya soro. Tuku klepon ndhu stasiun, melok Nippon gak oleh pensiun”, yang artinya “Bekupon sangkar burung dara, ikut Nippon (Jepang) bertambah sengsara. Beli kue klepon di stasiun, ikut Nippon (Jepang) tidak boleh pensiun (istirahat)”. Akibat sepenggal kalimat tersebut, Cak Durasim dan kawan-kawan ditangkap dan dipenjara oleh Jepang hingga beliau wafat. </p><br />
                    <p>Jika ditarik lebih jauh lagi perkembangan ludruk dimulai pada tahun 1907, dimana Pak Santik yang merupakan seorang tokoh masyarakat dari Desa Ceweng, Kecamatan Diwek, Jombang ingin menambah penghasilan lewat mengamen. Baliau mengamen dengan menari dan berbicara sendiri mengungkapkan isi hatinya (ngidung). Karena keunikan gaya mengamen beliau banyak masyarakat yang menyukainya. Setelah dikenal banyak orang beliau mengajak kedua temannya yaitu Pak Amir dan Pak Pono untuk ikut bergabung. Saat mengamen ketiganya memoles wajah mereka dengan bedak putih agar sulit dikenali dan tampak lucu. Penggunaan bedak yang tidak merata oleh mereka biasa dikenal dengan lerok. Dalam perkembangannya mereka sering diundang untuk mengisi acara hajatan dan bertambahlah anggota kelompok pengamen Pak Santik. Dari sinilah istilah lerok  kemudian berganti dengan“Besutan”. Besut sendiri merupakan tokoh utama dalam pertunjukan mereka yang dikenal sebagai cikal bakal ludruk. Ludruk yang berada di Surabaya, Mojokerto, Malang, dan daerah di Jawa Timur lainnya sejatinya merupakan ekspansi ludruk dari Jombang. </p><br />
                    <p><img src="https://indonesiakaya.com/wp-content/uploads/2020/10/1__Seperti_halnya_ketoprak_dari_Jawa_Tengah_ludruk_dari_Jawa_Timur_juga_merupakan_pertunjukan_yang_menghibur.jpg" alt="" /></p><br />
                    <p>Dalam pertunjukannya, ludruk biasa diawali dengan tari remo dengan iringan alat musik kendang, gamelan, pelog, dan laras slendro.  Pertunjukan ini biasanya dipentaskan mulai pukul 8 atau 9 malam hingga fajar. Sehingga mayoritas lakonnya adalah laki-laki dan transvestite (laki-laki yang memerankan tokoh perempuan). Dilanjutkan dengan atraksi yang riang, ludruk biasa dibagi menjadi beberapa babak. Di setiap babak terdapat adegan yang seringkali diselingi dengan lagu atau tembang. Penggunanan bahasa Jawa dalam pertunjukan ludruk  terkadang ditemui perbedaan dialek apabila terdapat perbedaan asal daerah lakon. Meskipun demikian, ludruk masih mendapat antusiasme yang baik dari penonton. Ditambah isi ceritanya yang mudah dicerna oleh masyarakat. </p><br />
                    <p><img src="https://www.goodnewsfromindonesia.id/wp-content/uploads/images/source/wihdiluthfi/20192112704237_1200.jpg" alt="" /></p><br />
                    <p>Pemosisian kebudayaan ludruk:</p>
                    <ol>
                    <li>Tatanan: Ludruk sebagai seni pentas di Jawa Timur yang mengangkat tema kehidupan sehari-hari.</li>
                    <li>Tuntunan: Ludruk berperan dalam menyuarakan kebutuhan dan keinginan rakyat, menggambarkan kesederhanaan hidup, dan nilai moral kehidupan.</li>
                    <li>Tontonan: Menjadi tontonan yang digemari semua lapisan masyarakat. Tidak hanya berisi guyonan namun juga pesan yang kritis dan faktual.</li><br />
                    </ol>
                    <p>Masih banyak kelompok ludruk yang bertahan hingga saat ini. Sebagai generasi penerus bangsa kita harus melestarikan kebudayaan ini agar tak lekang oleh waktu. Mahasiswa yang sejatinya merupakan bagian dari kebudayaan masyarakat itu sendiri, harus berperan dalam menjaga kebudayaan ini. </p><br />
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