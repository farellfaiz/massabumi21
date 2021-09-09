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
    const judul = "Mengenal Ngaben, Upacara Pembakaran Jenazah Umat Hindu di Bali"

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
                    <p><img src="https://www.asuransi-jiwa.org/wp-content/uploads/2018/01/Upacara-Ngaben-Itu-Mahal.jpg" alt="" /></p><br />
                    <p>Selamat pagi, siang, sore, dan malam teman-teman! Kali ini kita akan berkenalan dengan salah satu kebudayaan di Bali nih, yaitu upacara ngaben. Pulau Bali atau yang sering kita kenal dengan julukan Pulau Dewata, menjadi pulau yang memiliki tradisi kebudayaan yang unik dan tidak lepas dari tradisi agama Hindu. Kebudayaan atau tradisi agama Hindu ini kian meluas di masyarakat Bali karena faktor sejarah yang juga akhirnya membuat penduduk di Pulau Bali mayoritas beragama Hindu. Oleh karena hal tersebut, terdapat banyak kebudayaan di Bali yang berkaitan dengan tradisi agama Hindu, salah satunya upacara ngaben yang akan kita bahas pada kesempatan ini.</p><br />
                    <p>Jadi sebenarnya apa sih upacara ngaben itu? Upacara ngaben adalah upacara pembakaran jenazah yang dilakukan oleh masyarakat Hindu di Bali. Pada dasarnya ada beberapa pandangan dari arti kata ngaben itu sendiri, ada yang mengartikannya dari kata asalnya yaitu beya yang artinya bekal, ada yang mengatakan dari kata ngabu yang artinya menjadi abu, dan ada juga yang beranggapan bahwa ngaben berarti proses penyucian roh orang (anggota keluarga) yang telah meninggal dengan cara dibakar sebagai jalan menuju nirwana. Api yang membakar dipercaya sebagai Dewa Brahma, di mana api akan membakar segala kekotoran yang ada pada jasad dan roh orang yang meninggal. Upacara ngaben ini menjadi tradisi yang sudah mengakar kuat dan tetap dilakukan sebagai wujud penghormatan dan keikhlasan anggota keluarga mereka yang telah meninggal, di mana upacara ngaben ini dilakukan dengan semarak karena masyarakat Hindu Bali percaya bahwa jika menangisi kematian seseorang, maka itu akan menghambat perjalanan arwah menuju nirwana. </p><br />
                    <p><img src="https://kabare.id/uploads/article/20200103104841_5e0eb9994b95d_photo.jpg" alt="" /></p><br />
                    <p>Dalam pelaksanaannya, upacara ngaben menjadi upacara yang sakral sehingga upacara ini harus dilakukan meskipun harus memakan waktu yang agak lama. Umumnya, pelaksaan upacara ini dibagi berdasarkan kasta yang ada di dalam agama Hindu di Bali karena upacara ini membutuhkan biaya yang cukup besar untuk pembuatan sesajen dan perlengkapan lainnya sehingga terdapat berbagai jenis ngaben berdasarkan tata cara dan ketentuannya mulai dari ngaben sawa wedana sampai warak kruron. Oleh karena upacara ini sakral dan harus dilakukan, maka upacara ngaben boleh dilakukan beberapa tahun kemudian sampai keluarga mempunyai dana yang cukup, tetapi tidak dalam rentang waktu yang terlalu lama karena masyarakat Hindu Bali memercayai bahwa roh orang yang meninggal akan gentayangan dan menjadi bhuta cuwil. Apabila keluarga belum memiliki dana, ngaben bisa ditangguhkan dan jenazah dapat dititip dahulu. Konteks dititip dalam hal ini bisa dilakukan dengan dua acara yakni dititip dengan dikubur atau dengan dikremasi, di mana dikremasi artinya abu jenazah dititip di tempat ibadah sampai tiba saatnya upacara ngaben. Ngaben massal biasanya dilakukan di saat seperti ini, di mana ngaben dilaksanakan bersama-sama dengan jenazah lain agar lebih mengirit biaya.</p><br />
                    <p>Prosesi upacara ngaben tidaklah singkat karena upacara ngaben merupakan rangkaian kegiatan yang berlangsung dalam beberapa hari. Upacara ngaben akan dimulai dengan arak-arakan, di mana masing-masing keluarga membawa foto mendiang yang akan diaben dengan diiringi oleh rombongan yang membunyikan gamelan Bali sampai ke lokasi upacara. Setelah jasad diaben, sisa abu dari pembakaran dimasukkan ke dalam kelapa gading untuk dibuang ke laut yang dianggap suci. Upacara ngaben ini dipimpin oleh pemangku, dalam hal ini pemangku adalah orang yang memimpin ibadah termasuk upacara ngaben. Pemangku juga berperan dalam menentukan waktu pelaksanaan ngaben berdasarkan hari baik menurut kalender Hindu Bali. Selain pemangku, seluruh penghuni banjar (setingkat rukun warga) juga harus membantu dalam persiapan prosesi upacara. </p><br />
                    <p><img src="https://myallisya.files.wordpress.com/2017/12/ngaben-puri-ubud-011113-nym-03.jpg?w=2172" alt="" /></p><br />
                    <p>Nah, setelah kita kenal dengan kebudayaan Bali yang satu ini, maka kita dapat menentukan pemosisian 3T (Tatanan, Tuntunan, dan Tontonan) dari upacara ngaben, yang antara lain:</p><br />
                    <ol>
                    <li>Tatanan, upacara ngaben merupakan tradisi sakral umat Hindu di Bali yang dilakukan apabila ada kerabat atau keluarga yang meninggal, di mana prosesi upacara kematian ini dilakukan dengan pembakaran jenazah.</li>
                    <li>Tuntunan, masyarakat Hindu di Bali percaya bahwa mereka melakukan upacara ngaben sebagai wujud penghormatan dan keikhlasan anggota keluarga yang telah meninggal. Selain itu, upacara ngaben juga memberikan pesan seperti kepergian kerabat yang meninggal seharusnya tidak disikapi dengan isak tangis tetapi harus dengan penuh semarak.</li>
                    <li>Tontonan, seluruh penduduk Bali dapat melihat prosesi arak-arakan dalam upacara ngaben sebagai hal atau budaya yang umum yang ada di Bali dan penduduk Bali diharapkan menjaga toleransi serta tidak mengganggu jalannya prosesi arak-arakan tersebut agar terciptanya kedamaian di Pulau Bali.
                    Dari penjelasan upacara ngaben tersebut, diharapkan teman-teman dapat mengetahui eksistensi budaya Indonesia khususnya yang ada di Pulau Bali. Semoga bermanfaat!</li>
                    </ol>

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