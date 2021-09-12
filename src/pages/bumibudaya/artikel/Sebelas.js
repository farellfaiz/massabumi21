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
    const judul = "4 Mitos Kandasnya Asmara Setelah Mendatangi Tempat Wisata di Yogyakarta Ini, Sudah Pernah Ke Sana?"

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
                    <p><a href=""><img src="https://iili.io/ROMF9a.jpg" alt="" /></a></p><br />
                    <p>Yogyakarta, Si Kota Romansa berbalut budaya ini memang memiliki banyak sekali kenangan di hati para pengunjungnya. Bagaimana tidak, keramahan, kesederhanaan, serta keunikan budaya yang berkembang di tengah – tengah penduduknya menjadi salah satu hal yang paling ikonik di mata pengunjung. Selain itu, banyaknya wisata dengan harga tiket masuk yang sangat terjangkau juga menjadi alasan banyaknya wisatawan asing maupun lokal di kota cantik ini. </p><br />
                    <p>Nah, di antara banyak wisata yang ada di Yogyakarta tersebut, pastinya terselip mitos– mitos yang mungkin beberapa dari kanca – kanca1 sudah pernah mendengarnya. Yap, salah satunya, mitos tentang kandasnya asmara ketika mengunjungi beberapa tempat wisata ini. </p><br />
                    <p>Waduh, nggak terbayang deh jika hubungan kita dengan pasangan harus kandas akibat mendatangi tempat – tempat yang memiliki mitos putus cinta ini! Mau tahu di mana aja tempatnya? Simak di bawah ini ya, kanca – kanca!</p><br />
                    <p>1. Pastinya kalian sudah kenal sama mitos putusnya cinta di Candi Prambanan yang megah ini!<br /><br />
                    <a href=""><img src="https://iili.io/ROhnbs.jpg" alt="" /></a></p><br />
                    <p>Saya yakin banyak dari kanca – kanca sudah mengetahui mitos kandasnya asmara ketika mengunjungi Candi Prambanan ini, benar bukan? Jadi mitos ini bermula dengan adanya legenda putri Raja Boko, yakni Roro Jonggrang yang meminta dibuatkan sewu2 candi dalam waktu semalam kepada Pangeran Bandung sebagai syarat untuk menerima pinangannya. </p><br />
                    <p>Nah, ketika pembuatan candi sudah mendekati rampung3, Putri Roro yang enggan dipinang, dibantu dengan dayang – dayangnya, pun memukul – mukul lesung agar ayam berkokok yang pada akhirnya membuat pengerjaan candi itu pun terhenti dan candi yang dibuat kurang satu buah. </p><br />
                    <p>Karena Pangeran Bandung tahu bahwa kegagalan pembuatan candi tersebut merupakan akal – akalan dari Putri Roro, ia pun marah dan mengutuk Putri Roro menjadi arca untuk  menggenapi seribu candi tersebut, serta mengutuk para dayang Roro Jonggrang agar sulit untuk menemukan jodoh di usia muda mereka. </p><br />
                    <p>Legenda itulah yang kemudian berkembang menjadi mitos yang menyatakan bahwa setiap pasangan kekasih yang datang ke Candi Prambanan akan putus dikarenakan kutukan Pangeran Bandung yang masih bekerja hingga saat ini. Semoga hal ini nggak benar – benar terjadi ya, kanca!</p><br />
                    <p>2. Mitos Si Cantik Candi Ratu Boko ini bikin yang jomblo makin ngenes nih!<br /><br />
                    <a href=""><img src="https://iili.io/ROhRgS.jpg" alt="" /></a><br />
                    Candi Prambanan yang terletak di atas bukit Boko, Bokoharjo, Sleman, Yogyakarta. Legenda mengatakan bahwa tempat ini merupakan pusat dari Kerajaan Boko yang menjadi tempat tinggal Raja dan putrinya, yakni Putri Roro Jonggrang. </p><br />
                    <p>Mitos yang sama dengan Candi Prambanan juga berkembang di tempat ini, yakni pasangan kekasih yang datang ke tempat ini akan kurang langgeng4 hubungannya, serta ditambah mitos bahwa pengunjung wanita yang datang sendirian ke tempat ini akan terlambat menemukan jodohnya.  Jadi, pastikan untuk ciwi – ciwi5  yang mau liburan ke tempat ini untuk minimal membawa seorang teman agar tidak terjadi hal yang diinginkan ya, kanca!</p><br />
                    <ol>
                    3. Si Ringin Kembar ini punya mitos mistis layaknya love tester loh!<br /><br />
                    <a href=""><img src="https://iili.io/ROhELx.jpg" alt="" /></a><br />
                    </ol>
                    <p>Ngga menyangka bukan, kanca - kanca, kalau ternyata spot wisata kali ini memiliki mitos yang bisa mengandaskan asmara kalian! Hal ini rupanya benar – benar terjadi loh, kanca. Pasalnya pada zaman dahulu sekali, ketika Raja Hamengkubuwana pertama bertakhta, putri Raja HB I dijodohkan dengan salah seorang pria pilihan ayahnya. Karena putri raja tersebut merasa tidak cocok dan enggan dijodohkan, ia pun memberikan tantangan kepada calon tunangannya tersebut untuk melewati Ringin Kembar dengan mata tertutup. </p><br />
                    <p>Eh, ternyata pria tersebut gagal loh kanca! Raja HB I pun menganggap bahwa seseorang yang berhati tulus dan bersih sajalah yang dapat melewati Ringin Kembar tersebut. Pada akhirnya, seorang pria dari Kerajaan Siliwangi berhasil dalam tantangan tersebut. Lalu putri Raja HB I itu pun akhirnya menikah dan hidup bahagia dengan pria tersebut. </p><br />
                    <p>Sejak saat itu berkembang mitos jika suatu pasangan gagal melewati Ringin Kembar dengan mata tertutup, bisa dipastikan mereka tidak berjodoh dan tidak akan sampai pada tahap pernikahan! Ngeri – ngeri  keren ya, kanca! </p><br />
                    <ol>
                    4. Pasti kalian kaget kalau Si Manis Parangtritis ini masuk ke dalam list pantangan wisata bagi pasangan kekasih nih!<br /><br />
                    <a href=""><img src="https://iili.io/ROhxzG.jpg" alt="" /></a><br />
                    </ol>
                    <p>Selain menggunakan pakaian berwarna hijau di sekitar wilayah pantai ini, ternyata di pantai cantik ini terdapat mitos kandasnya asmara juga loh! Konon, pasangan kekasih yang mengunjungi Pantai Parangtritis dipercaya akan segera putus. Saya ulangi, akan segera putus! Entah hal apa yang melatarbekalangi mitos ini. Namun, menurut masyarakat setempat, hal tersebut tidak hanya belaku di Pantai Parangtritis saja, melainkan di seluruh garis pantai di Laut Selatan. Wah, jangan sampai hal ini terjadi di cerita cinta kalian ya, kanca – kanca!</p><br />
                    <p>Nah, itu tadi 4 tempat wisata di Yogyakarta dengan mitos yang dapat membuat hubungan asmara kalian kandas di tengah jalan, alias nggak sampai ke pelaminan. <br /><br />
                    Mitos – mitos yang sudah disebutkan di atas kembali lagi tergantung pada diri kita masing – masing untuk mempercayainya ataupun tidak. Satu hal yang pasti, jodoh berada di tangan Yang Mahakuasa bukan? </p><br />
                    <p>Mungkin di wilayah tempat tinggal kanca juga ada mitos – mitos asmara? Atau malah kanca - kanca sudah membuktikannya? ^^</p><br />
                    <p><b>Referensi</b><br />
                    <a href="https://kumparan.com/kumparantravel/5-destinasi-wisata-di-indonesia-ini-konon-bisa-bikin-putus-cinta-percaya-1voSZefl9IC">https://kumparan.com/kumparantravel/5-destinasi-wisata-di-indonesia-ini-konon-bisa-bikin-putus-cinta-percaya-1voSZefl9IC</a><br />
                    <a href="https://www.brilio.net/news/10-tempat-wisata-dengan-mitos-bikin-putus-cinta-berani-ke-sini-151216p.html">https://www.brilio.net/news/10-tempat-wisata-dengan-mitos-bikin-putus-cinta-berani-ke-sini-151216p.html</a><br />
                    <a href="https://dolandolen.com/10-tempat-wisata-terkutuk-yang-membuatmu-bisa-putus-dengan-pacar-mitos-atau-fakta/">https://dolandolen.com/10-tempat-wisata-terkutuk-yang-membuatmu-bisa-putus-dengan-pacar-mitos-atau-fakta/</a></p><br />

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