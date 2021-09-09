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
    const judul = "Sigale-Gale: Patung Mistis dari Sumatera Utara"

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
                    <img src="https://ik.imagekit.io/tripelaketoba/wp-content/uploads/2018/05/kirinhim2ygjxiczivwc.jpg" alt="" /><br />
                    <p>Horas! Mejuah-juah! Yahowu! Ahoi!</p><br />
                    <p>Mengenal kebudayaan Indonesia merupakan suatu hal yang tak akan ada habisnya. Walaupun kebudayaan itu sendiri sudah tidak terintegrasi lagi dengan perkembangan zaman, mengenal kebudayaan tetap bukanlah suatu hal yang kurang relevan untuk dibahas pada masa sekarang ini. </p><br />
                    <p>Kebudayaan itu sendiri mencakup banyak hal seperti lagu daerah, tarian daerah, instrumentasi atau bahkan cerita-cerita mitos yang hidup di daerah itu sendiri. 
                    Di Sumatera Utara, tepatnya di Pulau Samosir. Ada sebuah wujud kebudayaan yang sudah tidak asing lagi di mata turis/wisatawan. Kebudayaan itu adalah Sigale-gale.
                    Sigale-gale adalah sebuah patung kayu mistis yang biasanya digunakan dalam pertunjukan tari saat ritual penguburan mayat suku Batak di Pulau Samosir, Sumatra Utara. Kata Sigale-Gale diambil  dari kata dasar yakni “gale” yang artinya lemah, lesu, lunglai.</p><br />
                    <p>Sesuai dengan namanya, Sigale-gale akan menari dengan gerakan yang lemah, lesu dan lunglai sambil diiringi berbagai lagu daerah Batak Toba dengan menggunakan instrumen musik daerah tersebut.  </p><br />
                    <p>Dahulu, selama Sigale-gale menari-nari, patung ini dikendalikan oleh seorang pemain dari belakang menggunakan tali tersembunyi yang menghubungkan bagian-bagian patung melalui podium kayu berukir tempatnya berdiri. Namun, seiring berkembangnya teknologi, Sigale-gale kini dikendalikan dengan bantuan mesin, yang di mana mesin tersebut juga berfungsi sebagai pelantun lagu tarian, sehingga Sigale-gale dapat menari sesuai tempo yang dilantunkan oleh mesin itu sendiri.</p><br />
                    <p>Patung kayu Sigale gale memiliki anggota badan bersendi yang dipasang di atas podium beroda, sambil meratap, mereka menari-nari selama upacara pemakaman yang disebut papurpur sepata. Sigale gale dibuat secara kompleks menyerupai bentuk manusia, seukuran manusia dan memperlihatkan aktuasi memakai lumut basah atau spons yang bisa diperas untuk membuatnya tampak seperti menangis. Jumlah tali yang digunakan untuk menggerakkan Sigale-gale pun, konon katanya sama dengan jumlah urat yang ada pada lengan manusia.</p><br />
                    <p><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/COLLECTIE_TROPENMUSEUM_Si_gale_gale_dans_te_Simanindo_TMnr_20000329.jpg/220px-COLLECTIE_TROPENMUSEUM_Si_gale_gale_dans_te_Simanindo_TMnr_20000329.jpg" alt="" /></p><br />
                    <p><strong>Asal Mula Munculnya Patung Sigale-gale</strong></p>
                    <p>Awalnya, Sigale-gale sebenarnya diperkirakan berasal dari daerah Toba-Holbung tepatnya di daerah Tapanuli Utara, Sumatera Utara. Namun Sigale-gale perlahan menyebar ke daerah Pulau Samosir dan sehingga populer dan berkembang di sana. Hal itu membuat banyak orang mengira bahwa Sigale-gale itu sendiri lahir di daerah Pulau Samosir. Sampainya di Pulau Samosir, penduduk sekitar menyebut Sigale-gale dengan sebutan Raja Manggale. </p><br />
                    <p>Sigale-gale mulai dipergunakan pada upacara-upacara kematian. Upacara untuk orang-orang yang meninggal tanpa mempunyai anak maupun yang meninggal tanpa meninggalkan keturunan karena semua anaknya telah tiada. Upacara ini diadakan terutama apabila orang yang meninggal itu mempunyai kedudukan tinggi dalam masyarakat, seperti raja-raja, dan para tokoh masyarakat. Hal itu dilakukan dengan maksud menyambung keturunan mereka kelak di alam baka. Pada masyarakat Batak Toba, apabila seseorang yang mempunyai kedudukan meninggal dunia dan ia tidak mempunyai keturunan maka dipandang rendah dan tidak membawa kebaikan. Oleh karena itu, kekayaan yang ditinggalkannya akan dihabiskan untuk mengadakan upacara Sigale gale untuk orang yang meninggal tersebut. Orang lain tidak akan berani mengambil harta benda milik orang tersebut, karena takut tertular atau meninggal seperti pemiliknya. <br />
                    <strong>Cerita legenda Sigale-gale</strong></p>
                    <p>Konon pada zama dahulu, ada seorang Raja (Raja Rahat) yang terkenal di Samosir dan memiliki anak satu-satunya yang menjadi kesayangan bernama Raja manggale.
                    Pada saat itu, terjadi penyerangan di kawasan perbatasan daerah kekuasaan mereka, sehingga Raja tersebut mengutus anaknya Raja Manggale memimpin sebagai Panglima perang pada saat itu.
                    Namun apa yang terjadi ditengah pertempuran, Raja Manggale gugur dan tidak kembali pulang ke rumah sang Raja Rahat. Mendengar kabar tersebut, Sang Raja sangat sedih hingga jatuh sakit.
                    Raja ini merupakan Raja yang sangat dicintai oleh rakyatnya sehingga semua rakyat dan datu (ahli) pada kampung tersebut datang berbondon-bondong dan mengusahakan mendatangkan tabib untuk menyembuhkan sang Raja. Hingga pada suatu waktu datang seorang Sibaso (Datu Perempuan) mengatakan bahwa sang Raja jatuh sakit karena rindu kepada Anaknya.
                    Kemudian Sibaso menyarankan kepada datu untuk membuatkan patung yang mirip dengan anak Raja Rahat tadi yaitu Manggale. Banyak ritual yang terjadi  dalam pembuatan Patung ini, hingga pada suatu saat patung ini dijadikan menjadi media pemanggilan roh anak Raja Rahat dan dinamakan Patung Sigale-gale. Datu Sibaso tadi kemudian melakukan ritual dengan memainkan musik sabangunan untuk memanggil arwah Raja Manggale ke patung Sigale-gale tadi. Melihat patung itu bergerak dan seperti anak sang Raja. Raja Rahat itu pulih dari Sakitnya.</p><br />
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