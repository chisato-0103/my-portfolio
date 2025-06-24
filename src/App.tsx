import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./styles/globals.css";
import "./styles/navigation.css";
import "./styles/sections.css";

function App() {
  const scrollToSection = (sectionIndex: number) => {
    // スクロール機能は後で実装
    console.log("Scroll to section:", sectionIndex);
  };

  return (
    <div className="app">
      <Header onNavigate={scrollToSection} />
      <Hero onNavigate={scrollToSection} />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
