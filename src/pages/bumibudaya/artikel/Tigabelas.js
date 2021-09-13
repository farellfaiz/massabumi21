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
    const judul = "Di Balik Malam Satu Suro"

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
                    <p><img src="https://img.okezone.com/content/2021/08/09/406/2453292/sederet-kepercayaan-mistis-di-balik-kesakralan-malam-satu-suro-ADoWVVhJcn.JPG" alt="" /></p><br />
                    <p>Satu suro merupakan penanggalan pertama dalam kalender Jawa yang dimulai dari hari pertama di bulan Sura. Kalender Jawa sendiri merupakan hasil perpaduan selang budaya Islam, Hindu-Buddha, Jawa, dan sedikit budaya barat lebih tepatnya dari zaman Belanda. Pada mulanya, penanggalan ini dimulai dari tahun Saka yang berasal dari India pada zaman Hindu-Buddha di Indonesia. Begitu masuknya agama Islam ke Nusantara, kalender Saka yang saat itu masih digunakan mulai mengalami modifikasi oleh beberapa suku bangsa untuk menyesuaikan dengan adat daerah masing-masing. Ada beberapa pendapat yang mengatakan agar agama islam dapat diterima oleh masyarakat Nusantara pada masa itu, para pemuka agama menggabungkan atau mencocokkan budaya Islam dengan adat setempat. Suatu sumber mengatakan, Sultan Luhur yang saat itu berkuasa pada kesultanan Mataram berupaya keras menyebarkan agama Islam di pulau Jawa mengeluarkan dekrit untuk mengubah penanggalan Saka. Sejak saat itu kalender Jawa versi Mataram mempergunakan sistem kalender kamariah atau lunar, tetapi tidak mempergunakan angka dari tahun Hijriyah (saat itu tahun 1035 H). Angka tahun Saka tetap dipakai dan diteruskan. Hal ini diperagakan demi asas kesinambungan. Sehingga tahun saat itu yang merupakan tahun 1547 Saka, diteruskan menjadi tahun 1547 Jawa. Sehingga itulah sebabnya ditemukan kesamaan yang hampir mirip antara kalender Hijriah dan kalender Saka.</p><br />
                    <p>Perbedaan paling mendasar dari kalender Saka atau Jawa dengan kalender Masehi yang kita gunakan sekarang ini yaitu dari pengambilan waktu terhadap benda langit. Penanggalan Jawa dihitung berdasarkan putaran bulan terhadap bumi, sedangkan penanggalan Masehi dihitung berdasarkan putaran bumi terhadap matahari. Setiap tahunnya, tahun baru Suro selalu bergeser kurang lebih 11 - 13 hari dari kalender Masehi. Selain itu, dalam satu minggu atau yang disebut pasar oleh orang Jawa dalam kalender Suro, hanya mempunyai 5 hari yang terdiri dari Legi, Paing, Pon, Wage, dan Kliwon. Berbeda dengan kalender masehi yang mempunyai 7 hari dalam seminggu.</p><br />
                    <p>Beberapa tatanan ibadah yang harus dilakukan saat 1 Suro berbeda-beda di setiap daerahnya, tergantung adat istiadat yang masih dipegang. Salah satu yang biasa dikenal yaitu dengan berpuasa. Puasa pun macam-macam jenisnya, ada puasa bicara, puasa mutih, puasa ngerowot, puasa pati bening, hingga puasa biasa. Pada saat ini pula orang Jawa biasa menyucikan diri dengan tidak keluar rumah dan hanya berdoa sepanjang hari. Beberapa contoh tradisi adat  yang dilakukan, yaitu tradisi memandikan pusaka seperti keris atau tombak, tradisi sedekah laut di daerah Yogyakarta, tradisi kitab sura di daerah Surakarta, dan masih banyak lagi. Ada pula pantangan 1 Suro yang lagi-lagi beragam di setiap daerah. Paling umumnya, pada 1 Suro orang Jawa punya pantangan untuk tidak boleh mengadakan pesta atau perayaan hura-hura. Kabarnya hal ini karena pada tahun Suro, anaknya Nabi Muhammad meninggal dunia saat perang sehingga untuk menghormati kedukaan itu maka diciptakanlah larangan untuk melakukan perayaan atau pesta pada 1 Suro. </p><br />
                    <p>Di zaman era digital, perayaan 1 Suro masih bisa dijumpai salah satunya di daerah Solo. Biasanya acara perayaan 1 Suro sering dijadikan tontonan saat melakukan parade mengelilingi keraton di malam hari. Daerah Solo mempunyai keunikan dalam perayaannya yaitu adanya kerbau, terutama kerbau albino atau biasa disebut kerbau bule. Zaman dahulu, Belanda memberikan pembelajaran yang menyesuaikan adat Jawa dengan memberikan kerbau albino untuk diikuti orang. Kerbau dianggap sebagai hewan keberuntungan dan serba guna pada masa itu sehingga dipercaya bahwa  orang mengikutinya akan ikut mendapat berkat. Kepercayaan itu masih ada hingga jaman sekarang. Biasanya kerbau akan dibiarkan bebas begitu saja. Kerbau itu bahkan memiliki pengiring pribadi yang akan mengikuti dari belakang. Disaat kerbau memakan sayuran di pasar, tidak akan ada yang marah, justru malah disyukuri karena dipercaya itu akan mendatangkan berkah bagi pemilik warung. Bahkan hingga kotorannya saja akan diperebutkan oleh warga untuk dibungkus kemudian ditaruh di depan rumah untuk dijadikan jimat pembawa berkah. Salah satu narasumber yang tidak ingin disebut namanya, menjadi saksi hidup yang mengakui bahwa berkah kerbau itu benar adanya. Beliau menceritakan pengalamannya saat kecil, di sebuah desa di daerah Klaten, beliau melihat ada seekor kerbau yang makan di sawah. Dalam waktu kurang dari satu tahun, tanah itu ditawar orang dengan harga tidak wajar (di atas pasaran). Beliau mengatakan di tanah itu dibangun sekolah, kemudian tutup, hingga akhirnya dijadikan gedung serbaguna yang masih ada hingga sekarang.</p><br />
                    <p>Uniknya lagi, saat menjelang waktu 1 Suro, kerbau tersebut sudah balik sendiri ke keraton tanpa ada yang menuntun. Dalam parade kerbaulah yang memimpin di depan, sedangkan setiap orang yang di belakang tidak boleh berbicara, harus mengikuti jalannya kerbau. Jika kerbau berhenti, maka rombongan juga harus ikut berhenti. Jika kerbau berjalan, maka rombongan juga harus ikut berjalan. </p><br />
                    <p>Tidak hanya kisah mistis, satu suro juga mengandung makna yang mendalam bagi orang Jawa. Adanya unsur-unsur sejarah, budaya, politik, hingga pendidikan yang sedemikian rupa membuat satu suro menjadi tradisi yang patut kita hormati. Walaupun cara perayaan dan ibadahnya berbeda-beda, tetapi inti dari satu suro ini adalah untuk bersyukur serta berdoa agar diberikan tahun yang penuh rejeki. Satu suro juga kerap dimaknai sebagai acara buka tahun untuk memulai hidup yang lebih baik. Sudah sepatutnya kebudayaan Indonesia yang banyak ragamnya ini dilestarikan dengan baik hingga generasi kita berikutnya. Marilah tunjukkan upaya kita sebagai insan akademis untuk berkontribusi dalam pemberdayaan budaya di Indonesia tercinta. </p><br />

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