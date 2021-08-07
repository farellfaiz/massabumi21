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
} from "./pages/";

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
        </Switch>
        <Footer />
      </Router>
    </ChakraProvider>
  );
}

export default App;
