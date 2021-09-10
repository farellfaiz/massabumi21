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
    const judul = "Tabot, Festival Religi di Bumi Rafflesia"

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
                    <p><img src="https://seringjalan.com/wp-content/uploads/2020/07/1-upacara-adat-bengkulu-816x581.jpg" alt="" /></p><br />
                    <p>Assalamualaikum Warrahmatullahi Wabarrakatuh. <em>Sanak segalonyo</em>. <em>Cakmano</em> kabar<em>nyo</em>, semoga sehat-sehat <em>yo</em>,<em> ndak</em> itu sehat kantong, sehat badan, <em>kek</em> yang paling penting sehat pikiran.</p><br />
                    <p>Di artikel <em>iko</em>, <em>sayo ndak</em> jelaskan tentang salah satu kebudayaan yang <em>ado</em> di provinsi <em>sayo</em> berasal, yaitu Provinsi Bengkulu. <em>Ndak</em> tau <em>apo</em> kebudayaan-<em>nyo</em>? Cekidot, langsung <em>baco ajo, yo</em>.</p><br />
                    <p>Pulau Sumatra adalah pulau terbesar di Indonesia. Pemerintahan-<em>nyo dewek</em> terdiri dari 10 provinsi yang di dalam-<em>nyo</em> terdapat 120 kabupaten dan 34 kota. Salah satu provinsi yang <em>ado</em> di Sumatra yaitu Provinsi Bengkulu.</p><br />
                    <p>Bengkulu (bahasa Inggris: <em>Bencoolen</em>) adalah sebuah provinsi yang ibu kota-<em>nyo ado</em> di Kota Bengkulu itu sendiri. Provinsi <em>iko</em> terletak di bagian barat daya Pulau Sumatra, yang berbatasan dengan Provinsi Sumatra Barat, Jambi, Sumatra Selatan dan Lampung. Seperti di daerah lain, Provinsi Bengkulu <em>jugo</em> memiliki kebudayaan daerah-<em>nyo</em> sendiri, misal-<em>nyo</em>, tradisi, upacara adat, tarian adat, rumah adat, makanan khas daerah, seni musik, lagu daerah, wisata alam dan wisata budaya serta peninggalan sejarahnya. </p><br />
                    <p>Provinsi Bengkulu atau yang disebut <em>jugo</em> Bumi Rafflesia memiliki tradisi adat yang paling terkenal, yaitu Tabot (Tabut). <em>Apo</em> sih Tabot tu?</p><br />
                    <p>Jadi, Tabot adalah upacara tradisional masyarakat Bengkulu yang <em>diadokan</em> bertujuan untuk mengenang kisah perjuangan dan kematian cucu Nabi Muhammad SAW. Sayidina  Hassan bin Ali  dan Sayidina  Hussein bin Ali R.A. dalam peperangan dengan pasukan Ubaidillah bin Zaid  di Padang  Karbala-Iraq, pada tanggal 10 Muharam 61 Hijrah bersamaan dengan 681 Masehi.</p><br />
                    <p><em>Upayo</em> pemimpin Syiah dan kaum-<em>nyo</em> mengumpulkan potongan tubuh Husein, mengarak dan memakamkannya di Padang Karbala. Istilah Tabut berasal dari kata Arab yang secara harafiah berarti &#39;kotak kayu&#39; atau &#39;peti.&#39; Di dalam surah Al-Quran kata Tabut dikenal sebagai sebuah peti yang berisikan kitab Taurat. Bani Israil pada <em>maso</em> itu <em>percayo</em> bahwa mereka akan mendapatkan kebaikan <em>bilo</em> Tabot <em>ko</em> muncul dan <em>berado</em> di tangan pemimpin mereka. Dan kalau Tabot <em>tu ilang</em>, <em>mako</em> mereka <em>percayo</em> akan <em>dapek malapetako</em>. </p><br />
                    <p><em>Apo bae</em> sih yang diperlukan untuk Upacara Tabot, <em>ko</em>? Nah, di <em>siko sayo jugo</em> jelaskan <em>apo bae</em> yang harus disiapkan:</p><br />
                    <ol>
                    <li><p><strong>PERALATAN-PERALATAN UPACARA TABOT</strong><br />
                    Untuk melaksanakan upacara Tabot, ada beberapa peralatan yang harus disiapkan, di antaranya:</p>
                    <ul>
                    <li><strong>Pembuatan Tabot</strong><br />
                    Kelengkapan alat untuk membuat Tabot antara lain: bambu, rotan, kertas karton, kertas mar-mar, kertas grip, tali, pisau ukir, alat-alat gambar, lampu senter, lampu hias, bunga kertas, bunga plastik, dan lain sebagainya. Jika di-<em>tengok</em> dari banyak-<em>nyo</em> alat yang dibutuhkan, <em>mako</em> biaya yang dibutuhkan untuk membuat Tabot sekitar 5-15 juta rupiah.</li><br />
                    <li><strong>Kenduri dan Sesaji</strong><br />
                    Bahan-bahan yang digunakan untuk membuat kenduri dan sesaji antara lain: beras ketan, pisang emas, tebu, jahe, dadeh, gula aren, gula pasir, kelapa, ayam, daging, bumbu masak, kemenyan, dan lain-lain.</li><br />
                    <li><strong>Perlengkapan Musik Tabot</strong><br />
                    Alat-alat musik yang biasanya digunakan dalam upacara Tabot adalah dol dan tessa. Dol terbuat dari kayu yang tengahnya dilubangi dan kemudian ditutup dengan menggunakan kulit lembu. Dol berbentuk seperti beduk. Garis tengahnya sekitar 70 – 125 cm, dan alat pemukulnya berdiameter 5 cm dan panjangnya 30 cm. Cara menggunakannya dengan cara dipukul-pukul. Sedangkan tessa berbentuk seperti rebana, terbuat dari tembaga, besi plat atau alumunium, dan juga bisa dari kuali yang permukaannya ditutup dengan kulit kambing yang telah dikeringkan.</li><br />
                    <li><p><strong>Kelengkapan lainnya</strong><br />
                    Perlengkapan-perlengkapan lain yang harus dipersiapkan pada setiap unit Tabot adalah: bendera merah putih ukuran rumah tangga berikut tiangnya, bendera panji-panji berwarna hijau atau biru yang ukurannnya lebih besar dari bendera merah putih, bendera putih yang ukurannnya sama dengan panil (beserta tiangnya), tombak bermata ganda di ujungnya digantung, duplikat pedang Zufikar (pedang Rasulullah) dengan ukuran mini.</p><br />
                    <p>Selain perlengkapan yang harus disiapkan, Upacara Tabot <em>ado jugo</em> tahapan-<em>nyo</em>, <em>karno</em> kan <em>segalo sesuatu tu idak basing</em> (sembarangan), <em>apolagi</em> kan <em>iko</em> sifat-<em>nyo</em> religius. </p><br />
                    </li>
                    </ul>
                    </li>
                    <li><p><strong>TAHAPAN-TAHAPAN UPACARA TABOT</strong></p>
                    <ul>
                    <li><p><strong>Mengambik Tanah (Mengambil Tanah)</strong><br />
                    Tanah yang diambil harus mengandung unsur-unsur magis oleh karena itu harus diambil dari tempat keramat. Di Bengkulu, hanya ada dua tempat yang dianggap keramat yaitu di Keramat Tapak Padri yang terletak di tepi laut tidak jauh dari Benteng Marlborough di sudut kanan Pelabuhan Laut Bengkulu dan Keramat Anggut yang terletak di pemakaman umum Pasar Tebek dekat Tugu Hamilton, tidak jauh dari Pantai Nala. Upacara ini berlangsung pada malam tanggal 1 Muharram, sekitar pukul 22.00 WIB.</p><br />
                    <p>Tanah yang diambil disimpan di Gerga (pusat kegiatan/markas kelompok Tabot bersangkutan), dibentuk seperti boneka manusia dan dibungkus dengan kain kafan putih, lalu diletakkan di Gerga. Gerga tertua di Bengkulu hanya ada dua, yaitu Gerga Berkas dan Gerga Bangsal. Keduanya telah direnovasi dan kini berwujud bangunan permanen.</p><br />
                    <p>Di kedua tempat tersebut, mereka memberikan sesajen berupa: bubur merah dan bubur putih, gula merah, sirih 7 subang, rokok nipah 7 batang, kopi pahit 1 cangkir, air serbat 1 cangkir, dadih (susu sapi murni yang mentah) 1 cangkir, air cendana 1 cangkir, air dan selasih 1 cangkir.</p><br />
                    </li>
                    <li><p><strong>Duduk Penja (Mencuci Jari-Jari)</strong><br />
                    Penja adalah benda yang terbuat dari kuningan, perak atau tembaga yang berbentuk telapak tangan manusia lengkap dengan jari-jarinya. Karenanya penja ini disebut juga dengan jari-jari. Menurut keluarga Sipai, Penja adalah benda keramat yang mengandung unsur magis. Ia harus dicuci dengan air limau setiap tahunnya. Upacara mencuci penja ini disebut Duduk Penja, yang dilaksanakan pada tanggal 5 Muharram sekitar pukul 16.00 WIB.</p><br />
                    <p>Pada acara Duduk Penja ini, peralatan yang dibutuhkan adalah: air kembang, air limau nipis, sesajen, dan penja yang akan dicuci. Sesajen yang dipersiapkan terdiri: nasi kebuli 1 porsi, emping beras 1 piring, pisang emas 1 sisir, tebung 1 potong, kopi pahit 1 gelas, air serobat 1 gelas, dan dadih 1 gelas.</p><br />
                    </li>
                    <li><p><strong>Menjara (Mengandung)</strong><br />
                    Menjara adalah berkunjung atau mendatangi kelompok lain untuk beruji/bertanding dol, sejenis beduk yang terbuat dari kayu yang dilubangi tengahnya serta ditutupi dengan kulit lembu.</p><br />
                    <p>Kegiatan ini dilaksanakan pada tanggal 6 dan 7 Muharram mulai pukul 20.00 atau 23.00 WIB. Pada tanggal 6 Muharram, kelompok Tabot Bangsal mendatangi kelompok Tabot Barkas sedangkan pada tanggal 7 Muharram kelompok Tabot Barkas mendatangi kelompok Tabot Bangsal. Kegiatan ini berlangsung di halaman terbuka yang disediakan oleh masing-masing kelompok.</p><br />
                    </li>
                    <li><strong>Meradai (Mengumpulkan Dana)</strong><br />
                    Meradai adalah pengambilan dana oleh Jola (bahasa Melayu artinya orang yang bertugas mengambil dana untuk kegiatan kemasyarakatan) yang terdiri dari anak-anak berusia 10-12 tahun. Acara ini dilakukan pada siang hari tanggal 6 Muharram antara pukul 07.00-17.00 WIB. Lokasi pengambilan dana biasanya sudah disepakati bersama oleh masing-masing kelompok Tabot. Peralatan yang dibutuhkan diantaranya adalah: bendera panji, tombak bermata ganda, tas atau kambut, karung gandum, dan tessa.</li><br />
                    <li><p><strong>Arak Penja (Mengarak Jari-Jari)</strong><br />
                    Arak Penja atau arak jari-jari merupakan acara mengarak jari-jari yang diletakkan di dalam Tabot dengan di jalan-jalan utama di kota Bengkulu. Kegiatan ini dilaksanakan pada malam ke-8 dari bulan Muharram, yaitu sekitar pukul 19.00 WIB dan berakhir sekitar pukul 21.00 WIB.</p><br />
                    <p>Bahan-bahan yang digunakan sebagai bahan sesajen adalah: nasi kebuli 1 porsi, kopi pahit 1 gelas, air serobat 1 gelas, telur dadar 1 buah, lauk pauk 7 piring (7 macam jenis lauk).</p><br />
                    </li>
                    <li><p><strong>Arak Seroban (Mengarak Sorban)</strong><br />
                    Arak Seroban merupakan acara mengarak Penja ditambah dengan serban (sorban) putih dan diletakkan pada Tabot Coki (Tabot Kecil). Tabot Coki ini dilengkapi dengan bendera/panji-panji berwarna putih dan hijau atau biru yang bertuliskan nama “Hasan dan Husain” dengan kaligrafi Arab yang indah. Kegiatan ini diadakan pada malam ke-9 Muharram sekitar pukul 19.00-21.00 WIB. Sebagaimana namanya, maka peralatan yang dibutuhkan dalam acara ini adalah Tabot dan seroban. Selain itu, juga dibutuhkan kain khusus dan Tabot Coki (kursi kerajaan/tahta).</p><br />
                    </li>
                    <li><p><strong>Gam (Tenang/Berkabung)</strong><br />
                    Satu di antara tahapan upacara Tabot yang harus ditaati adalah Gam. Gam adalah waktu yang tidak boleh ada kegiatan apapun. Gam berasal dari kata <em>ghum</em> yang berarti tertutup atau terhalang. Tanggal 9 Muharram merupakan masa gam ini, yakni sejak pukul 07.00 hingga pukul 16.00 WIB, di mana pada waktu tersebut semua kegiatan yang berkaitan dengan upacara Tabot termasuk membunyikan dol dan tassa tidak boleh dilakukan. Jadi, masa Gam dapat juga disebut masa tenang.</p><br />
                    </li>
                    <li><p><strong>Arak Gedang (Taptu Akbar)</strong><br />
                    Pada 9 Muharram malam, sekitar pukul 19.00 WIB dilaksanakan ritual pelepasan Tabot Besanding di Gerga (markas) masing-masing. Selanjutnya, dilanjutkan dengan arak gedang yakni grup Tabot berarak dari markas masing-masing menempuh rute yang ditentukan. Kemudian mereka akan bertemu sehingga membentuk arak gedang (pawai akbar). </p><br />
                    <p>Arak-arakan ini menjadi ramai karena menyatunya grup-grup Tabot, grup-grup hiburan, para pendukung masing-masing serta masyarakat. Acara ini berakhir sekitar pukul 20.00 WIB. Akhir dari acara arak gedang ini adalah seluruh Tabot dan grup penghibur berkumpul di Lapangan Merdeka Bengkulu (sekarang menjadi Lapangan Tugu Provinsi). Tabot dibariskan bershaf istilah lokal disandingkan, karenanya acara ini dinamakan Tabot Besanding. Peralatan yang dibutuhkan dalam kegiatan ini adalah gerobak. Gerobak ini digunakan untuk mengangkut Tabot ke tempat Tabot dikumpulkan.</p><br />
                    </li>
                    <li><p><strong>Tabot Tebuang (Tabot Terbuang)</strong><br />
                    Acara terakhir dari rangkaian upacara Tabot adalah acara Tabot Tebuang yang diadakan pada tanggal 10 Muharram. Pada pukul 09.00 WIB seluruh Tabot telah berkumpul di Lapangan Merdeka dan telah disandingkan sebagaimana malam Tabot besanding. Grup hiburan telah berkumpul pula di sini dan menghibur para pengunjung yang hadir di waktu itu. Pada sekitar pukul 11.00 arak-arakan Tabot bergerak menuju ke Padang Jati dan berakhir di kompleks pemakaman umum Karabela. Tempat ini menjadi lokasi acara ritual Tabot tebuang karena di sini dimakamkan Imam Senggolo (Syekh Burhanuddin) pelopor upacara Tabot di Bengkulu.</p><br />
                    <p>Pada sekitar pukul 12.30 WIB acara Tabot Tebuang di makam Senggolo tersebut. Karena dipandang bernilai magis, acara ini hanya bisa dipimpin oleh Dukun Tabot yang tertua. Selesai acara ritual di atas, barulah bangunan Tabot dibuang ke rawa-rawa yang berdampingan dengan komplek makam tersebut. Dengan terbuangnya Tabot pada sekitar pukul 13.30 WIB, maka selesailah seluruh rangkaian upacara Tabot dimaksud.</p><br />
                    </li>
                    </ul>
                    </li>
                    <li><strong>NILAI DAN PESAN MORAL UPACARA TABOT</strong><br />
                    Nilai agama dalam upacara Tabot di antaranya seperti proses mengambil tanah mengingatkan manusia akan asal penciptaannya. Terlepas dari adanya pandangan bahwa ritual tabot mengandung unsur penyimpangan dalam akidah, seperti penggunaan mantera-mantera dan ayat-ayat suci dalam prosesi mengambik tanah. Namun, esensinya adalah akulturasi tidak bisa dilepaskan dari nilai-nilai budaya lokal. Untuk nilai sejarah yang terkandung dalam budaya tabot adalah, sebagai manifestasi kecintaan dan untuk mengenang wafatnya Husein bin Abi Thalib. Adapun nilai sosial yang terkandung di dalamnya, antara lain mengingatkan manusia akan praktik penghalalan segala cara untuk menuju puncak kekuasaan, serta simbolisasi dari sebuah keprihatinan sosial.  </li><br />
                    </ol>
                    <p>Mungkin, <em>iko</em> lah yang bisa <em>sayo ceritokan</em>. Kalo <em>ado</em> salah <em>kato</em>, kalimat, atau kekurangan yang lain di dalam artikel <em>iko</em> mohon dimaafkan, soal-<em>nyo sayo</em> masih tahap pemula. Sekian dari <em>sayo</em>. Wassalamualaikum Warrahmatullahi Wabarrakatuh.</p><br />
                    <p><strong>Referensi:</strong></p>
                    <ul>
                    <li><a href="https://id.wikipedia.org/wiki/Tabut" target="_blank">Wikipedia - Tabut</a></li>
                    <li><a href="https://id.wikipedia.org/wiki/Bengkulu" target="_blank">Wikipedia - Bengkulu</a></li>
                    <li><a href="https://www.republika.co.id/berita/republikatv/ummat/10/05/03/114095-tabot-akulturasi-budaya-islam-nusantara" target="_blank">Republika - Tabot, Akulturasi Budaya Islam Nusantara</a></li>
                    <li><a href="https://www.tuntasonline.com/2017/09/18/mengulik-makna-upacara-religi-tabot-masyarakat-bengkulu" target="_blank">Tuntas Online - Mengulik Makna Upacara Religi Tabot Masyarakat Bengkulu</a></li>
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