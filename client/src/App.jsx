import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Pengalaman from "./pages/pengalaman/Pengalaman";
import Proyek from "./pages/proyek/Proyek";
import Skills from "./pages/skills/Skills";
import Aboutme from "./pages/Aboutme/Aboutme";
import Hero from "./pages/Hero/Hero";
import Kontak from "./pages/Kontak/Kontak";
import Djo from "./pages/AI/Djo";
import { CSSTransition } from "react-transition-group";
function App() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <Header />
      <Djo />
      {isOpen && (
        <div className='modal-overlay' onClick={() => setIsOpen(false)}>
          <div className='modal-content'>
            <button className='close-button' onClick={() => setIsOpen(false)}>
              &times;
            </button>
            <h2>Welcome</h2>
            <p>This website is currently under development</p>
            <button className='ok-button' onClick={() => setIsOpen(false)}>
              OK
            </button>
          </div>
        </div>
      )}
      <main className='l-main'>
        <Hero />
        <Aboutme />
        <Skills />
        <Proyek />
        <Pengalaman />
      </main>
      <Kontak />
      <Footer />
    </>
  );
}

export default App;
