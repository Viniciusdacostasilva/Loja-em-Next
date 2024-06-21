"use client";
import React, { useState } from 'react';
import { FaArrowUp, FaWhatsapp, FaDiscord, FaBars, FaTimes } from 'react-icons/fa';
import '../styles/Header.css';

function Header({ visible }: any) {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (sectionId: any) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const handleLoginClick = () => {
    window.location.href = "./login";
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <div className={visible ? 'header' : 'header hidden'}>
        <div className="header-container">
          <div className="header-left">
            <img src="https://cdn.discordapp.com/attachments/928007050439561256/1253507392658870374/end_gay_1.png?ex=6676c3fb&is=6675727b&hm=f23ce6c33ef8dce31c89fd6b956c2c37e0360e7503978aaaee83bfdbb0d6baa6&" alt="End Gear Icon" className="header-icon" />
            <h1 className="header-title">End Gear</h1>
          </div>
          <div className="header-right">
            <button onClick={() => scrollToSection('about-us')}>Sobre nós</button>
            <button onClick={() => scrollToSection('faq')}>FAQ</button>
            <button onClick={() => scrollToSection('contacts')}>Contatos</button>
            <button className="login-button" onClick={handleLoginClick}>
              Logar
            </button>
          </div>
          <div className="header-menu-icon" onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>
      <div className={`header-mobile-menu ${menuOpen ? 'open' : ''}`}>
        <button onClick={() => scrollToSection('about-us')}>Sobre nós</button>
        <button onClick={() => scrollToSection('faq')}>FAQ</button>
        <button onClick={() => scrollToSection('contacts')}>Contatos</button>
        <button className="login-button" onClick={handleLoginClick}>
          Logar
        </button>
      </div>
    </div>
  );
}

export default Header;
