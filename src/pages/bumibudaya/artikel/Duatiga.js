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
    const judul = "Bumi Bertuah Negeri Beradat"

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
                    <p><img src="https://iili.io/RWHb4I.jpg" alt="" /></p><br />
                    <p>Sejak dahulu, Riau dikenal sebagai negeri Melayu yang memiliki kekhasan dalam budaya dan adat istiadatnya. Nilai-nilai keislaman begitu tertanam dalam kehidupan masyarakatnya. Budaya Melayu Riau juga merupakan budaya yang terbuka. Keterbukaan Melayu berdampak dengan berkembangnya kemajemukan masyarakat dan budayanya. Kemajemukan ini menjadi salah satu kekayaan budaya Melayu yang tangguh serta sarat akan keberagaman. Salah satu kekayaan budaya Melayu yang paling sarat dengan nilai-nilai utama sebagai jati diri kemelayuan itu adalah adat istiadatnya, yang disebut adat resam.</p><br />
                    <p>Melalui proses keterbukaan itu, adat resam Melayu menjadi kaya dengan variasi serta sarat dengan simbol dan falsafah. Kekayaan nilai itu dapat terlihat mulai dari keberagaman alat dan kelengkapan upacara adat, kelengkapan pakaian pakaian adat, ragam hias rumah, kelengkapan rumah tangga, upacara-upacara adat dan tradisi, hingga  ungkapan-ungkapan adat (pepatah petitih, bidal, ibarat, perumpamaan, pantun, gurindam, seloka, syair, dll), yang diwarisi turun temurun. Karenanya, tidaklah salah bila ada yang berpendapat, bahwa khazanah budaya Melayu merupakan samudera budaya dunia karena di dalam budaya Melayu memang terdapat berbagai unsur budaya dunia.</p><br />
                    <p>Masyarakat Melayu menurunkan nilai integritas (kejujuran, konsistensi, dan keberanian) dengan cara adat budaya melayu, yaitu menunjuk ajarannya kepada anak cucu melalui tutur kata dan perilaku sehari baik dalam kehidupan keluarga dan lingkungan sekitarnya. Secara historis dan tertulis, nilai-nilai tersebut tertuang dalam “Tunjuk Ajar Melayu” dan “Gurindam Dua Belas”. Hal terpenting dalam pewarisan Budaya Melayu di Provinsi Riau yaitu dengan memegang teguh sumber-sumber adat. Budaya Melayu bersumber dari adat sebenar adat, adat yang diadatkan, dan adat yang teradat.</p><br />
                    <p><strong>1. Adat sebenar adat</strong></p>
                    <p>Adat sebenar adat adalah prinsip adat Melayu yang tidak dapat diubah-ubah. Prinsip tersebut tersimpul dalam landasan “adat bersendikan syara’ dan syara’ bersendikan kitabullah”. Ketentuan-ketentuan adat yang bertentangan dengan hukum syariat tidak boleh dipakai lagi dan hukum syariat lah yang dominan. Dalam ungkapan dinyatakan:</p><br />
                    <p><em>Adat berwaris kepada Nabi<br />
                    Adat berkhalifah kepada Adam<br />
                    Adat berinduk ke ulama<br />
                    Adat bersurat dalam kertas<br />
                    Adat tersirat dalam sunah<br />
                    Adat dikungkung kitabullah</em></p><br />
                    <p><em>Itulah adat yang tahan banding<br />
                    Itulah adat yang tahan asak</em></p><br />
                    <p>Dari ungkapan di atas jelas terlihat bahwa adat istiadat Melayu didasari pada ajaran agama Islam. Dasar adat istiadat Melayu menghendaki sunah Nabi dan Al Quran sebagai pedoman dalam setiap tindakan. Prinsip itu tidak dapat diubah, tidak dapat dibuang, apalagi dihilangkan. Itulah yang disebut adat sebenar adat.</p><br />
                    <p><strong>2. Adat yang diadatkan</strong></p>
                    <p>Adat yang diadatkan adalah adat yang dibuat oleh penguasa pada suatu kurun waktu dan adat itu terus berlaku selama tidak diubah oleh penguasa berikutnya. Adat ini dapat berubah-ubah sesuai dengan situasi dan keadaan, sehingga dapat disamakan dengan peraturan pelaksanaan dari suatu ketentuan adat. Perubahan terjadi untuk menyesuaikan diri dengan perkembangan zaman dan perkembangan pandangan pihak penguasa, seperti kata pepatah Sekali air bah, sekali tepian beralih. Dalam ungkapan disebutkan:</p><br />
                    <p><em>Adat yang diadatkan<br />
                    Adat yang turun dari raja<br />
                    Adat yang datang dari datuk<br />
                    Adat yang cucur dari penghulu<br />
                    Adat yang dibuat kemudian</em></p><br />
                    <p>Ungkapan di atas, memberikan tunjuk ajar bahwa nilai adat yang turun dari raja, datuk, penghulu yang diadatkan merupakan pedoman dalam kehidupan sehari-hari. Oleh karena itu, seorang pemimpin harus memiliki nilai kejujuran, konsistensi dan keberanian sesuai dengan adat istiadat Budaya Melayu. Sebelum membuat perintah, pemimpin harus mempertimbangkan berbagai nilai-nilai tersebut agar bisa menjadi pedoman yang bagi bagi orang-orang yang ada di bawahnya.</p><br />
                    <p><strong>3. Adat yang teradat</strong></p>
                    <p>Adat ini merupakan keputusan bersama yang dirasakan baik, sebagai pedoman dalam menentukan sikap dan tindakan untuk menghadapi setiap peristiwa dan masalah-masalah yang dihadapi. Keputusan itu dijadikan sebagai pegangan bersama, sehingga menjadi kebiasaan turun-temurun. Oleh karena itu, adat yang teradat ini pun dapat berubah sesuai dengan nilai-nilai baru yang berkembang. Ketentuan adat ini biasanya tidak tertulis, sehingga pengukuhannya dilestarikan dalam “pepatah adat” atau “undang adat”. Hal ini dijelaskan dalam ungkapan berikut:</p><br />
                    <p><em>Rumah ada adatnya<br />
                    Tepian ada bahasanya<br />
                    Tebing ditingkat dengan undang<br />
                    Negeri dihuni dengan lembaga<br />
                    Kampung dikungkung dengan adat</em></p><br />
                    <p>Ungkapan di atas, menjelaskan bahwa adat telah mengajarkan setiap tempat memiliki kebiasaan, komunikasi, peraturan dan nilai. Orang yang tinggal di tempat tersebut harus patuh terhadap peraturan yang ada. Nilai yang baik haruslah diimplementasikan oleh orang tersebut.</p><br />
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