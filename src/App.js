import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react"

import {
  ScrollToTop,
} from "./utils/";

import {
  Navigation,
  Footer,
} from "./components/";

import {
  Home,
  Family,
  Contact,
  About,
  MainMenu,
  PetaBudaya,
  Test,
  Guestbook,
  Artikel,
  Hope,
  Satu,
  Dua,
  Tiga,
} from "./pages/";

import articles from "./json/artikel.json"

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Navigation />
        <ScrollToTop />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/family" exact component={() => <Family />} />
          <Route path="/contact" exact component={() => <Contact />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/test" exact component={() => <Test />} />

          <Route path="/bumibudaya" exact component={() => <MainMenu />} />
          <Route path="/bumibudaya/peta" exact component={() => <PetaBudaya />} />
          <Route path="/bumibudaya/guestbook" exact component={() => <Guestbook />} />
          <Route path="/bumibudaya/artikel" exact component={() => <Artikel />} />
          <Route path="/bumibudaya/hope" exact component={() => <Hope />} />

          <Route path="/bumibudaya/artikel/semarak-festival-krakatau" exact component={() => <Satu />} />
          <Route path="/bumibudaya/artikel/tradisi-seba" exact component={() => <Dua />} />
          <Route path="/bumibudaya/artikel/ritual-chit-ngiat-phan" exact component={() => <Tiga />} />

        </Switch>
        <Footer />
      </Router>
    </ChakraProvider>
  );
}

export default App;
