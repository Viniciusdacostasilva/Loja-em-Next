"use client"
import React from 'react';
import { FaArrowUp, FaWhatsapp, FaDiscord } from 'react-icons/fa';
import '../styles/Header.css';

function Header({ visible }:any) {
  const scrollToSection = (sectionId:any) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const handleLoginClick = () => {
    // Redirecionar para a página de login
    window.location.href = "./login";
  };

  return (
    <div className={visible ? 'header' : 'header hidden'}>
      <div className="header-container">
        <div className="header-left">
          <h1 className="header-title">End Gear</h1>
        </div>
        <div className="header-right">
          <button onClick={() => scrollToSection('about-us')}>Sobre nós</button>
          <button onClick={() => scrollToSection('contacts')}>Contatos</button>
          <button className="login-button" onClick={handleLoginClick}>
            Logar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
