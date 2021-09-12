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
                    <p><img src="https://i1.wp.com/kuyahejo.com/wp-content/uploads/2016/08/Pupuh-Sunda.jpg?fit=1024%2C576&amp;ssl=1" alt="" /></p><br />
                    <p><em>Sampurasun sadayana</em>! <em>Kumaha damang</em>? Pada kesempatan  kali ini, kita akan berkenalan dengan <em>pupuh asmarandana</em>. <em>Waahhh</em>…. apakah <em>pupuh asmarandana</em> adalah adiknya Happy Asmara? Apa saja nilai-nilai yang bisa kita dapatkan  dari <em>pupuh asmarandana</em>? Dari mana asal <em>pupuh asmarandana</em>? Untuk menjawab pertanyaan kalian mengenai <em>pupuh asmarandana</em>, mari kencangkan sabuk pengaman kalian dan mari kita mulai petualangan kita. </p><br />
                    <p>Sebelum mengenal <em>pupuh asmarandana</em>, mari kita mengenal terlebih dahulu apa itu <em>pupuh</em>. <em>Pupuh</em> adalah salah satu karya sastra masyarakat Sunda yang berbentuk puisi tradisional.  <em>Pupuh</em> menggabungkan seni sastra dan lagu Sunda. Dalam karya sastra Sunda, <em>pupuh</em> terbagi menjadi dua kelompok, yakni <em>sekar ageung</em> dan <em>sekar alit</em>. Perbedaan <em>sekar ageung</em> dengan <em>sekar alit</em> yakni <em>pupuh sekar ageung</em> dapat menggunakan beberapa macam lagu jika dinyanyikan (<em>ditembangkeun</em>), sedangkan <em>sekar alit</em> hanya dapat dinyanyikan (<em>ditembangkeun</em>) dalam satu jenis lagu saja. <em>Nahh</em>… dalam dua  kelompok tersebut, terdapat macam-macam pupuh, yakni….</p><br />
                    <table>
                    <thead>
                    <tr>
                    <th>Sekar Ageung</th>
                    <th>Sekar Alit</th>
                    <th>Sekar Alit</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                    <td>Pupuh Sinom</td>
                    <td>Pupuh Lambang</td>
                    <td>Pupuh Maskumambang</td>
                    </tr>
                    <tr>
                    <td>Pupuh Dangdanggula</td>
                    <td>Pupuh Pucung</td>
                    <td>Pupuh Magatru</td>
                    </tr>
                    <tr>
                    <td>Pupuh Kinanti</td>
                    <td>Pupuh Ladrang</td>
                    <td>Pupuh Juru Demung</td>
                    </tr>
                    <tr>
                    <td>Pupuh Asmarandana</td>
                    <td>Pupuh Balakbak</td>
                    <td>Pupuh Mijil</td>
                    </tr>
                    <tr>
                    <td>-</td>
                    <td>Pupuh Pangkur</td>
                    <td>Pupuh Wirangrong</td>
                    </tr>
                    <tr>
                    <td>-</td>
                    <td>Pupuh Gurisa</td>
                    <td>Pupuh Gambuh</td>
                    </tr>
                    <tr>
                    <td>-</td>
                    <td>Pupuh Durma</td>
                    <td>-</td>
                    </tr>
                    </tbody>
                    </table><br />
                    <p>Setiap <em>pupuh</em> memiliki patokan yang berbeda-beda, baik <em>guru wilangannya</em> (jumlah suku kata (<em>engang</em>) pada setiap baris (<em>padalisan</em>)), <em>guru lagu/sora panungtung</em> (bunyi huruf vokal terakhir pada setiap baris), dan <em>watek</em> (karakter, sifat, atau tema pupuh tersebut).</p><br />
                    <p><img src="https://upload.wikimedia.org/wikipedia/commons/4/4b/Gamelan_Performance_by_Pasinaon_Omah_Kendeng_02.jpg" alt="" /></p><br />
                    <p><em>Nahh</em>…. Seperti yang telah kita ketahui sebelumnya, <em>pupuh asmarandana</em> termasuk ke dalam jenis <em>pupuh sekar ageung</em>. <em>Pupuh asmarandana </em>memiliki <em>watek</em> tentang kehidupan atau pesan-pesan bijak dan perasaan sayang (<em>nyaah</em>), perasaan cinta (<em>deudeuh asih</em>), dan asmara (<em>kabirahian</em>) yang ditunjukkan kepada kekasih, pasangan, keluarga, atau sahabat. <em>Pupuh asmarandana</em> sendiri sering dinyanyikan dalam upacara <em>saweran panganten</em>. Pola guru wilangan dan guru lagu dalam satu bait (<em>pada</em>) <em>pupuh</em>  <em>asmarandana</em> yaitu 8-i, 8-a, 8-o/e, 8-i/a, 7-i/a, 8-u, 8-a. Waduh, kode apa ini ??? Tenang, “kode-kode” ini menunjukkan jumlah suku kata dan bunyi suku kata terakhir pada setiap kata. Daripada tambah bingung, mari kita lihat dua contoh pupuh di bawah ini.</p><br />
                    <p>Contoh 1:</p><br />
                    <table>
                    <thead>
                    <tr>
                    <th>Contoh Pupuh</th>
                    <th>Arti dalam bahasa Indonesia</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                    <td>Aya nu lumpuh musapir ( 8 – i)</td>
                    <td>Ada pengemis yang lumpuh</td>
                    </tr>
                    <tr>
                    <td>Bari sila sisi jalan ( 8 – a )</td>
                    <td>Duduk bersila dipinggir jalan</td>
                    </tr>
                    <tr>
                    <td>Kadupak ku anu lolong ( 8 – o )</td>
                    <td>Tersenggol oleh orang yang tuna netra</td>
                    </tr>
                    <tr>
                    <td>Anu eukeur balang siar ( 8 – a )</td>
                    <td>Yang sedang mencari pekerjaan</td>
                    </tr>
                    <tr>
                    <td>Neangan sandang pangan ( 7 – a )</td>
                    <td>Untuk memenuhi kebutuhan hidup</td>
                    </tr>
                    <tr>
                    <td>Anu lolong gebut labuh  ( 8 – u )</td>
                    <td>Orang tuna netra terjatuh</td>
                    </tr>
                    <tr>
                    <td>Nu kadupak katindihan ( 8 – a )</td>
                    <td>Menindih orang yang tersenggol</td>
                    </tr>
                    </tbody>
                    </table>
                    <p>Contoh 2: </p>
                    <table>
                    <thead>
                    <tr>
                    <th>Contoh Pupuh</th>
                    <th>Arti dalam bahasa Indonesia</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                    <td>Jalma mah geus puguh deui ( 8 – i )</td>
                    <td>Manusia sudah pasti menyayangi anaknya</td>
                    </tr>
                    <tr>
                    <td>Ka anak tangtu nyaahna ( 8 – a )</td>
                    <td>Binatang juga seperti itu</td>
                    </tr>
                    <tr>
                    <td>Malahan apan sato oge ( 8 – e )</td>
                    <td>Tersenggol oleh orang yang tuna netra</td>
                    </tr>
                    <tr>
                    <td>Saupama ditengetan ( 8 – a )</td>
                    <td>Jika di perhatikan</td>
                    </tr>
                    <tr>
                    <td>Hayam nu keur anakan ( 7 – a )</td>
                    <td>Ayam yang sedang beranak</td>
                    </tr>
                    <tr>
                    <td>Lamun anakna diganggu ( 8 – u )</td>
                    <td>Jika anaknya diganggu</td>
                    </tr>
                    <tr>
                    <td>Napsu na estu pohara ( 8 – a )</td>
                    <td>Pasti akan sangat marah</td>
                    </tr>
                    </tbody>
                    </table><br />
                    <p><img src="https://iili.io/Re34p4.jpg" alt="" /></p><br />
                    <p>Setelah kita berkenalan sebentar dengan pupuh asmarandana, kita dapat menentukan pemosisian 3T dari pupuh asmarandana, yakni</p><br />
                    <ul>
                    <li>Tatanan: pupuh asmarandana telah hadir di tengah-tengah masyarakat Sunda sebagai sarana untuk memberikan nasihat-nasihat serta untuk mengekspresikan rasa cinta dan kasih sayang kepada orang yang mereka sayangi. Bahkan pupuh asmarandana dilantunkan pada upacara saweran panganten.</li>
                    <li>Tuntunan: pupuh asmarandana sarat akan pesan-pesan yang dapat menuntun kehidupan kita ke arah yang lebih baik</li>
                    <li>Tontonan: saat pupuh asmarandana dilantuntan di upacara saweran panganten, anak-anak dan orang-orang muda memeriahkan upacara tersebut. Selain itu, terkadang ada pasanggiri (lomba) untuk menyanyikan sebuah pupuh.<br /></li><br />Maka dari itu, pupuh asmarandana merupakan karya sastra masyarakat Sunda dalam bentuk puisi lama. Pupuh asmarandana termasuk ke dalam kelompok pupuh sekar ageung dan bertemakan kehidupan, nasihat-nasihat, dan perasaan kasih sayang.<br />
                    </ul><br />
                    <p><b>Daftar Pustaka</b><br />
                    <a href="https://kuyahejo.com/pupuh-sunda/#Memahami_Pengertian_Padalisan_Pada_Guru_Wilangan_Guru_Lagu_dan_Watek_Watak">https://kuyahejo.com/pupuh-sunda/#Memahami_Pengertian_Padalisan_Pada_Guru_Wilangan_Guru_Lagu_dan_Watek_Watak</a>
                    <a href="https://www.sejarahbogor.com/2019/01/pupuh-asmarandana-musik-dan-lirik.html">https://www.sejarahbogor.com/2019/01/pupuh-asmarandana-musik-dan-lirik.html</a>
                    <a href="http://repository.unj.ac.id/1378/8/BAB%20IV%20fix.pdf">http://repository.unj.ac.id/1378/8/BAB%20IV%20fix.pdf</a></p>

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