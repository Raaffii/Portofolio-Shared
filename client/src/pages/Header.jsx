import React, { useState, useEffect } from "react";

export default function Header() {
  const [activeLink, setActiveLink] = useState("#home");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const handleScroll = () => {
    const sections = ["#home", "#about", "#skills", "#works", "#experience", "#contact"];
    let currentSection = "";

    sections.forEach((section) => {
      const sectionElement = document.querySelector(section);
      if (sectionElement) {
        const rect = sectionElement.getBoundingClientRect();
        // Memeriksa jika bagian tersebut berada di tengah viewport
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          currentSection = section;
        }
      }
    });

    if (currentSection !== activeLink) {
      setActiveLink(currentSection); // Perbarui activeLink jika bagian yang berbeda terdeteksi
    }
  };

  useEffect(() => {
    // Menambahkan event listener scroll
    window.addEventListener("scroll", handleScroll);

    // Membersihkan event listener saat komponen tidak digunakan
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeLink]); // Menambahkan activeLink ke array dependensi

  return (
    <header className='l-header'>
      <nav className='nav bd-grid'>
        <div>
          <a href='#' className='nav__logo'>
            Rafi
          </a>
        </div>

        <div className='nav__menu' id='nav-menu'>
          <ul className='nav__list'>
            <li className='nav__item'>
              <a href='#home' className={`nav__link ${activeLink === "#home" ? "active-link" : ""}`} onClick={() => handleLinkClick("#home")}>
                Home
              </a>
            </li>
            <li className='nav__item'>
              <a href='#about' className={`nav__link ${activeLink === "#about" ? "active-link" : ""}`} onClick={() => handleLinkClick("#about")}>
                About
              </a>
            </li>
            <li className='nav__item'>
              <a href='#skills' className={`nav__link ${activeLink === "#skills" ? "active-link" : ""}`} onClick={() => handleLinkClick("#skills")}>
                Skills
              </a>
            </li>
            <li className='nav__item'>
              <a href='#works' className={`nav__link ${activeLink === "#works" ? "active-link" : ""}`} onClick={() => handleLinkClick("#work")}>
                Work
              </a>
            </li>
            <li className='nav__item'>
              <a href='#experience' className={`nav__link ${activeLink === "#experience" ? "active-link" : ""}`} onClick={() => handleLinkClick("#contact")}>
                Experience
              </a>
            </li>
            <li className='nav__item'>
              <a href='#contact' className={`nav__link ${activeLink === "#contact" ? "active-link" : ""}`} onClick={() => handleLinkClick("#contact")}>
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className='nav__toggle' id='nav-toggle'>
          <i className='bx bx-menu'></i>
        </div>
      </nav>
    </header>
  );
}
