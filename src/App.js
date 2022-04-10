import { BrowserRouter as Router, Route, Switch, useLocation } from "react-router-dom";
import { ChakraProvider, Box } from "@chakra-ui/react"
import React, { useEffect } from "react"

import {
  ScrollToTop,
  InitializeReactGA
} from "./utils/";

import {
  Navigation,
  Footer,
  LaguAksang,
  Medpart,
  Preread
} from "./components/";

import {
  Home,
  Family,
  Contact,
  About,
  MainMenu,
  PetaBudaya,
  Test,
  ComingSoon,
  Guestbook,
  Artikel,
  Hope,
  Satu,
  Dua,
  Tiga,
  Empat,
  Lima,
  Enam,
  Tujuh,
  Delapan,
  Sembilan,
  Sepuluh,
  Sebelas,
  Duabelas,
  Tigabelas,
  Empatbelas,
  Limabelas,
  Enambelas,
  Tujuhbelas,
  Delapanbelas,
  Sembilanbelas,
  Duapuluh,
  Duasatu,
  Duadua,
  Duatiga,
  Duaempat,
  Dualima,
  Duaenam,
  Duatujuh,
  Duadelapan,
  Duasembilan,
  Tigapuluh,
  Tigasatu,
} from "./pages/";

import articles from "./json/artikel.json"
import ReactGA from 'react-ga'
import InfoMhs from "./pages/InfoMhs";
import BeritaFITB from "./pages/BeritaFITB";
import Actmhs from "./pages/Actmhs";
import AgendaMhs from "./pages/AgendaMhs";


function App() {

  ReactGA.initialize('UA-207295183-1');
  ReactGA.pageview(window.location.pathname + window.location.search);
  
  return (
    <ChakraProvider>
      <Router>
        <Navigation />
        {/* <LaguAksang /> */}
        <ScrollToTop />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/family" exact component={() => <Family />} />
          <Route path="/contact" exact component={() => <Contact />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/test" exact component={() => <Test />} />
          <Route path="/comingsoon" exact component={() => <ComingSoon />} />
          <Route path="/infomhs" exact component={() => <InfoMhs />} />
          <Route path="/news" exact component={() => <BeritaFITB />} />
          <Route path="/activity" exact component={() => <Actmhs />} />
          <Route path="/agenda" exact component={() => <AgendaMhs />} />

          <Route path="/bumibudaya" exact component={() => <MainMenu />} />
          <Route path="/bumibudaya/peta" exact component={() => <PetaBudaya />} />
          <Route path="/bumibudaya/bukutamu" exact component={() => <Guestbook />} />
          <Route path="/bumibudaya/artikel" exact component={() => <Artikel />} />
          <Route path="/bumibudaya/harapan" exact component={() => <Hope />} />

          <Route path="/bumibudaya/artikel/semarak-festival-krakatau" exact component={() => <Satu />} />
          <Route path="/bumibudaya/artikel/tradisi-seba" exact component={() => <Dua />} />
          <Route path="/bumibudaya/artikel/ritual-chit-ngiat-phan" exact component={() => <Tiga />} />
          <Route path="/bumibudaya/artikel/pesona-bumi-sriwijaya" exact component={() => <Empat />} />
          <Route path="/bumibudaya/artikel/sistem-kekerabatan-matrilineal" exact component={() => <Lima />} />
          <Route path="/bumibudaya/artikel/festival-religi-tabot" exact component={() => <Enam />} />
          <Route path="/bumibudaya/artikel/anak-gimbal-dari-dieng" exact component={() => <Tujuh />} />
          <Route path="/bumibudaya/artikel/fakta-unik-kepulauan-riau" exact component={() => <Delapan />} />
          <Route path="/bumibudaya/artikel/mengenal-kebudayaan-banten" exact component={() => <Sembilan />} />
          <Route path="/bumibudaya/artikel/misteri-situs-watu-tulis-cipaku" exact component={() => <Sepuluh />} />
          <Route path="/bumibudaya/artikel/mitos-asmara-tempat-wisata-jogja" exact component={() => <Sebelas />} />
          <Route path="/bumibudaya/artikel/ludruk" exact component={() => <Duabelas />} />
          <Route path="/bumibudaya/artikel/malam-satu-suro" exact component={() => <Tigabelas />} />
          <Route path="/bumibudaya/artikel/upacara-ngaben" exact component={() => <Empatbelas />} />
          <Route path="/bumibudaya/artikel/perayaan-obor-pattimura" exact component={() => <Limabelas />} />
          <Route path="/bumibudaya/artikel/ritual-adat-nyangku" exact component={() => <Enambelas />} />
          <Route path="/bumibudaya/artikel/festival-panen-sumbun" exact component={() => <Tujuhbelas />} />
          <Route path="/bumibudaya/artikel/patung-mistis-sigale-gale" exact component={() => <Delapanbelas />} />
          <Route path="/bumibudaya/artikel/kiprah-kiai-hamzanwadi-di-pendidikan" exact component={() => <Sembilanbelas />} />
          <Route path="/bumibudaya/artikel/batik-gajah-oling" exact component={() => <Duapuluh />} />
          <Route path="/bumibudaya/artikel/tego-tego-poalo" exact component={() => <Duasatu />} />
          <Route path="/bumibudaya/artikel/tradisi-peusijuek" exact component={() => <Duadua />} />
          <Route path="/bumibudaya/artikel/bumi-bertuah-negara-beradat" exact component={() => <Duatiga />} />
          <Route path="/bumibudaya/artikel/eksotisme-pulau-biawak" exact component={() => <Duaempat />} />
          <Route path="/bumibudaya/artikel/bali-kedua-di-kaltim" exact component={() => <Dualima />} />
          <Route path="/bumibudaya/artikel/pengikiran-gigi-tadulako" exact component={() => <Duaenam />} />
          <Route path="/bumibudaya/artikel/mitos-lada" exact component={() => <Duatujuh />} />
          <Route path="/bumibudaya/artikel/lebih-dekat-dengan-tugu-jogja" exact component={() => <Duadelapan />} />
          <Route path="/bumibudaya/artikel/mitos-curug-cinulang" exact component={() => <Duasembilan />} />
          <Route path="/bumibudaya/artikel/mengenal-suku-kubu" exact component={() => <Tigapuluh />} />
          <Route path="/bumibudaya/artikel/berkenalan-dengan-pupuh-asmarandana" exact component={() => <Tigasatu />} />

        </Switch>
        <Footer />
      </Router>
    </ChakraProvider>
  );
}

export default App;
