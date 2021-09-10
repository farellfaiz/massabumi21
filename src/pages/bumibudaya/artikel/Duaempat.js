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
    const judul = "Eksotisme Alam Pulau Biawak Indramayu"

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
                    <p><img src="https://iili.io/RWHr21.jpg" alt="" /></p><br />
                    <p>Kalian tahu komodo? Pasti tahu, <em>dong</em>. Kalau hewan yang satu ini versi mini dari komodo,<em> nih</em>, teman-teman, bernama biawak. </p><br />
                    <p>Wisata yang letaknya tidak jauh dari Jakarta ini memiliki keindahan alam yang tidak kalah dengan Pulau Komodo, <em>loh</em>. Wisata Pulau Biawak berlokasi di sebelah utara Pulau Jawa bagian tengah, tepatnya masuk dalam administrasi wilayah Kabupaten Indramayu, Jawa Barat. Memangnya seindah apa,<em> sih</em>, Pulau Biawak ini? Yuk, simak!</p><br />
                    <p>Dulu, pulau seluas 72 hektar ini bernama Pulau Rakit.<em> Loh</em>, kok beda? Betul, teman-teman, ini umum terjadi. Sama halnya seperti Pulau Komodo di Nusa Tenggara sebagai habitat komodo, disini juga banyak terdapat biawak sehingga masyarakat lebih familiar dengan nama Pulau Biawak. Saking banyaknya, kamu bisa banget foto bersama reptil satu itu.</p><br />
                    <p><img src="https://iili.io/RWH4YF.jpg" alt="" /></p><br />
                    <p>Keeksotisan pulau ini belum terekspos ke dunia luar sehingga alamnya masih terjaga. Pulau biawak mayoritas masih berupa hutan bakau sebagai penyangga ekosistem pantai. Selain itu, keasrian hutannya juga dimanfaatkan masyarakat setempat sebagai kawasan konservasi burung-burung liar. Buat teman-teman yang suka <em>trekking</em>, hutan ini bisa banget kamu jelajahi.</p><br />
                    <p>Sebagai salah satu wisata bahari, teman-teman wajib banget untuk menikmati keindahan alam bawah lautnya. Teman-teman bisa mencoba <em>snorkeling</em>, bermain pasir di pinggir pantai, dan menikmati <em>sunset</em> atau <em>sunrise</em>. Aktivitas menyelam bisa dilakukan dengan nyaman karena ombak yang tidak terlalu besar. Konon katanya, disana teman-teman bisa menemukan ribuan ikan hias, serta beberapa jenis biota laut lainnya.</p><br />
                    <p>Di Pulau Biawak, teman-teman bisa menikmati <em>sunrise</em> atau <em>sunset</em> dari ketinggian juga, <em>loh</em>. Kamu bisa naik ke atas mercusuar setinggi 65 meter dari permukaan air laut. Di atas sana, kamu  bisa melihat dermaga dan pemandangan Pulau Biawak yang tampak dari berbagai sudut pandang penuh kehijauan. </p><br />
                    <p><em>Nah</em>, buat kalian yang ingin menikmati destinasi Pulau Biawak lebih lama, jangan khawatir! Disana ada <em>cottage</em> yang bisa kamu sewa dengan harga yang terjangkau. Untuk sampai ditujuan, kamu harus menyebrangi lautan menggunakan perahu. Perjalanan memakan waktu sekitar 3 sampai 5 jam tergantung dari jenis perahu yang kamu naiki.</p><br />
                    <p>Gimana? Pulau Biawak eksotis banget, <em>kan</em>? Cocok banget, <em>nih</em>, buat kamu masukkan ke dalam daftar wisata yang wajib dikunjungi bersama keluarga, teman, atau orang terdekat.</p><br />
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