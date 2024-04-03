import "./App.css";
import AdvancedStaticsSection from "./Components/AdvancedStaticsSection/AdvancedStaticsSection";
import Footer from "./Components/Footer/Footer";
import FooterBoostSection from "./Components/FooterBoostSection/FooterBoostSection";
import Hero from "./Components/Hero/Hero";
import NavBar from "./Components/NavBar/NavBar";
import ShorterSectionForm from "./Components/ShorterSectionForm/ShorterSection";
import Container from "./Layout/Container";
import { ShortedLinks } from "./Contexts/ShortedLinks";
import { useState } from "react";
import ShortedResult from "./Components/ShortedResult/ShortedResult";
import ShortedLinksList from "./Components/ShortedLinksList/ShortedLinksList";

function App() {
  const [shortedLinksArr, setShortedLinksArr] = useState([]);
  return (
    <>
      <ShortedLinks.Provider value={{ shortedLinksArr, setShortedLinksArr }}>
        <header>
          <NavBar />
        </header>
        <main>
          <Container maxWidth={1200}>
            <Hero />
            <ShorterSectionForm />
          </Container>
          <ShortedLinksList />

          <AdvancedStaticsSection />
          <FooterBoostSection />
        </main>
        <Footer />
      </ShortedLinks.Provider>
    </>
  );
}

export default App;
