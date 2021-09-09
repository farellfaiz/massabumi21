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
    const judul = "Mengenal Seba, Tradisi Unik dari Suku Baduy"

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
                    <p><img src="https://www.goodnewsfromindonesia.id/wp-content/uploads/images/source/asriyati/20191009baduy.jpg" alt="" /></p><br />
                    <p><em>Sampurasun sadayana!</em> <br /><br />
                    Sebagai negara yang terkenal akan keanekaragaman budayanya, Indonesia dihuni oleh beragam suku yang tersebar di seluruh penjuru 34 provinsi di Indonesia. Pada kesempatan ini, kita akan membahas salah satu tradisi unik dari suatu suku yang ada di pedalaman Kabupaten Lebak, yaitu suku Baduy. Mungkin nama Baduy sudah cukup familiar di telinga kita semua sebagai masyarakat Indonesia. Terlebih lagi, baru-baru ini presiden kita, Bapak Joko Widodo terlihat mengenakan pakaian adat dari suku Baduy pada saat menyampaikan Pidato Kenegaraan pada Sidang Tahunan MPR dan Sidang Bersama DPR dan DPD di Gedung Parlemen, Senin (16/8/2021).</p><br /><br />
                    <p><img src="https://akcdn.detik.net.id/visual/2021/08/16/pidato-kenegaraan-presiden-ri-joko-widodo-pada-sidang-tahunan-mpr-ri-dan-sidang-bersama-dpr-ri-dpd-ri-dok-biro-pers-sekretaria-9.jpeg?w=1000&amp;q=80" alt="" /></p><br />
                    <p>Masyarakat suku Baduy atau orang Baduy merupakan salah satu bagian dari kelompok etnis Sunda yang hidup berdampingan langsung dengan alam di Pegunungan Kendeng, Desa Kanekes, Kecamatan Leuwidamar, Kabupaten Lebak, Banten. Alam tempat perkampungan suku Baduy yang masih alami dan kesempatan untuk melihat langsung budaya lokal pun menjadi daya tarik wisata tersendiri bagi daerah ini.</p><br />
                    <p>Suku Baduy sendiri terbagi ke dalam 2 golongan, yaitu yang biasa disebut dengan Baduy Luar dan Baduy Dalam. Perbedaan yang paling mendasar dari kedua kelompok suku ini adalah dalam menjalankan aturan adat di kesehariannya. Kelompok Baduy Dalam masih sangat memegang teguh adat dan menjalankan aturan adatnya dengan baik, sementara itu kelompok Baduy Luar sudah sedikit lebih longgar dalam menjalankan aturan adat di kesehariannya.</p><br />
                    <p>Dari segi penampilan, kedua kelompok ini pun memiliki perbedaan. Cara berpakaian kelompok Baduy Dalam masih didominasi oleh balutan warna putih, terkadang hanya bagian celananya saja yang berwarna hitam atau biru tua. Berbeda dengan kelompok Baduy Dalam, kelompok Baduy Luar terlihat mengenakan pakaian serba hitam atau biru tua saat melakukan aktivitas di kesehariannya.</p><br />
                    <p>Umumnya, masyarakat suku Baduy memiliki mata pencaharian berladang dan bertani untuk memenuhi kebutuhan hidupnya. Tanahnya yang subur mempermudah suku Baduy dalam menghasilkan berbagai kebutuhan sehari-harinya. Sebagai wujud rasa syukur setelah panen hasil bumi selama setahun, suku Baduy melaksanakan Tradisi Seba. Biasanya, Tradisi Seba digelar setelah musim panen ladang huma, tradisi ini sudah berlangsung selama ratusan tahun sejak zaman Kesultanan Banten di Kabupaten Serang.</p><br />
                    <p><img src="https://www.goodnewsfromindonesia.id/wp-content/uploads/images/source/asriyati/20191009tradisi-seba-masyarakat-baduy-05.jpg" alt="" /></p><br />
                    <p>Tradisi Seba dilaksanakan dengan warga Baduy menempuh perjalanan ke kota dengan membawa seserahan hasil bumi untuk diserahkan kepada kepala daerah yang kerap disebut Bapak Gede sebagai bentuk ketulusan dan keikhlasan yang diungkapkan setiap tahun. Warga Baduy Dalam yang mengenakan pakaian serba putih datang berjalan kaki selama kurang lebih 12 jam dan menempuh jarak lebih dari 100 KM, sedangkan warga Baduy Luar yang mengenakan pakaian serba hitam diperbolehkan untuk naik kendaraan.</p><br />
                    <p><img src="https://www.goodnewsfromindonesia.id/wp-content/uploads/images/source/asriyati/20191009pelaksanaan-dimajukan-seba-baduy-2019-berlangsung-kurang-meriah.jpg" alt="" /></p><br />
                    <p>Ribuan masyarakat suku Baduy bersama-sama berangkat dari kampungnya menuju ke kantor Ibu Gede atau Bupati Lebak di Rangkasbitung dan dilanjutkan ke kantor Bapak Gede atau Gubernur Banten yang terletak di Serang. Dalam tradisi ini, selain menyerahkan seserahan berupa hasil bumi kepada kepala daerah, terjadi pula dialog antara masyarakat suku Baduy dengan para kepala daerah yang hadir. Dalam dialog tersebut, masyarakat adat suku Baduy berpesan kepada pemerintah untuk terus menjaga kelestarian alam, hutan, dan lingkungan.</p><br />
                    <p>Nah, setelah kita mengenal Tradisi Seba Baduy yang unik ini, maka kita dapat melihat bagaimana pemosisian kebudayaan berdasarkan 3T (Tatanan, Tuntunan, dan Tontonan) dari tradisi ini, yaitu antara lain:</p><br />
                    <ol>
                    <li><strong>Tatanan</strong><br />
                    Tradisi Seba Baduy merupakan tradisi yang dilakukan sebagai ungkapan rasa syukur masyarakat suku Baduy karena telah mendapatkan hasil panen yang melimpah selama setahun dengan cara membawa seserahan hasil bumi untuk diserahkan kepada kepala daerah setempat.</li><br />
                    <li><strong>Tuntunan</strong><br />
                    Dalam Tradisi Seba Baduy, selain menyerahkan seserahan berupa hasil bumi kepada kepala daerah, terjadi pula dialog antara masyarakat suku Baduy dengan para kepala daerah yang hadir. Dalam dialog tersebut, masyarakat adat suku Baduy berpesan kepada pemerintah untuk terus menjaga kelestarian alam, hutan, dan lingkungan. Tradisi ini juga menjadi ajang untuk menyambung silaturahmi antara suku Baduy dengan kepala daerah atau pemerintah.</li><br />
                    <li><strong>Tontonan</strong><br />
                    Seluruh penduduk Rangkasbitung, Serang, dan sekitarnya atau bahkan wisatawan dari luar daerah dapat melihat ribuan warga Baduy berbondong-bondong melaksanakan perjalanan jauh dari Desa Kanekes tempat mereka tinggal menuju ke kantor Ibu Gede atau Bupati Lebak di Rangkasbitung dan dilanjutkan ke kantor Bapak Gede atau Gubernur Banten yang terletak di Serang dengan membawa hasil taninya kepada Pemerintah.</li><br />
                    </ol>
                    <p>Dari penjelasan di atas, semoga kita semua dapat lebih banyak mengenal budaya-budaya yang ada di Indonesia dan terus menjaga serta melestarikannya. <em>Hatur nuhun sadayana!</em></p><br />
                    <p><strong>Referensi:</strong></p>
                    <ul>
                    <li><a href="https://www.cnbcindonesia.com/news/20210816135905-7-268795/gaya-jokowi-sampaikan-pidato-kenegaraan-berpakaian-adat-baduy/7" target="_blank">CNBC Indonesia - Gaya Jokowi Sampaikan Pidato Kenegaraan Berpakaian Adat Baduy</a></li>
                    <li><a href="https://indonesiakaya.com/pustaka-indonesia/suku-baduy-bersinergi-dengan-alam-menjaga-aturan-adat/" target="_blank">Indonesia Kaya - Suku Baduy, Bersinergi Dengan Alam Menjaga Aturan Adat</a></li>
                    <li><a href="https://tirto.id/tradisi-seba-masyarakat-seba-baduy-87o" target="_blank">Tirto.ID - Tradisi Seba Masyarakat Seba Baduy</a></li>
                    <li><a href="https://www.goodnewsfromindonesia.id/2019/09/10/tradisi-seba-baduy-dan-hukum-adat-leluhur-banten" target="_blank">GNFI - Tradisi &quot;Seba Baduy&quot; dan Hukum Adat Leluhur Banten</a></li>
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