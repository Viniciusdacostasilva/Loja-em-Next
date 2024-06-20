"use client"
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // Importar motion do framer-motion
import Header from '../components/Header';
import Card from '../components/Card';
import AboutUsSection from '../components/AboutUsSection';
import { FaArrowUp, FaWhatsapp, FaDiscord } from 'react-icons/fa';
import '../styles/global.css';
import '../styles/Contact.css';

export default function Home() {
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [headerVisible, setHeaderVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        const currentScrollPos = window.pageYOffset;
        const isScrollingDown = currentScrollPos > prevScrollPos;
  
        // Ocultar o header se estiver descendo
        if (isScrollingDown && headerVisible) {
          setHeaderVisible(false);
        }
  
        // Mostrar o header se estiver subindo e passar do ponto dos cartões
        const cardSectionTop = document.getElementById('about-us')?.offsetTop || 0;
        const isPastCardSection = currentScrollPos > cardSectionTop || currentScrollPos === 0; // Mostrar quando voltar ao topo
  
        if (!isScrollingDown && isPastCardSection && !headerVisible) {
          setHeaderVisible(true);
        }
  
        setPrevScrollPos(currentScrollPos);
        setShowScrollToTop(currentScrollPos > window.innerHeight / 2);
      }
    };
  
    // Adicionar evento de scroll ao carregar o componente
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [prevScrollPos, headerVisible]);
  
  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };
  

  return (
    <div className="app">
      {/* Passando a prop `visible` para o Header com animação */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
        <Header visible={headerVisible} />
      </motion.div>

      <div className="content">
      <motion.h2
        className="h2-custom" // Adicione a classe aqui
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Serviços
      </motion.h2>
        <div className="card-container">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <Card
              title="KSM"
              description={
                <div className='text-hidden'>
                  <p>Keystone Master Season 4</p>
                  <p>R$ -- ⁰⁰</p>
                  <p>Compre o Dragonflight Keystone Master:</p>
                  <p>O que vem neste serviço:</p>
                  <ul>
                    <li>Total de 12 pedras M+16</li>
                    <li>Gear 463 no fim da dungeon</li>
                    <li>Gear 476 no bau semanal</li>
                    <li>Montaria da Season</li>
                  </ul>
                </div>
              }
              imageUrl="https://mythicboost.com/Content/uploaded/services/wow/keystone-master.jpg?cver=17fadf95a30f4d04bf3bc393adb41566"
            />
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }}>
            <Card
              title="M+ 10"
              description={
                <div className='text-hidden'>
                  <p>Keystone Master Season 3</p>
                  <p>R$ -- ⁰⁰</p>
                  <p>Compre o Dragonflight Keystone Master:</p>
                  <p>O que vem neste serviço:</p>
                  <ul>
                    <li>Total de 12 pedras M+16</li>
                    <li>Gear 463 no fim da dungeon</li>
                    <li>Gear 476 no bau semanal</li>
                    <li>Montaria da Season</li>
                  </ul>
                </div>
              }
              imageUrl="https://mythicboost.com/Content/uploaded/services/wow/keystone-master.jpg?cver=17fadf95a30f4d04bf3bc393adb41566"
            />
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.6 }}>
            <Card
              title="M+ 8"
              description={
                <div className='text-hidden'>
                  <p>Keystone Master Season 3</p>
                  <p>R$ -- ⁰⁰</p>
                  <p>Compre o Dragonflight Keystone Master:</p>
                  <p>O que vem neste serviço:</p>
                  <ul>
                    <li>Total de 12 pedras M+16</li>
                    <li>Gear 463 no fim da dungeon</li>
                    <li>Gear 476 no bau semanal</li>
                    <li>Montaria da Season</li>
                  </ul>
                </div>
              }
              imageUrl="https://mythicboost.com/Content/uploaded/services/wow/keystone-master.jpg?cver=17fadf95a30f4d04bf3bc393adb41566"
            />
          </motion.div>
        </div>

        <motion.div initial={{ x: 200, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
          <AboutUsSection id="about-us" />
        </motion.div>

        <motion.section initial={{ x: -200, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
          <div id="contacts" className="contacts">
            <h2>Contatos</h2>
            <p>Entre em contato conosco pelos seguintes meios:</p>
            <div className="contact-icons">
              <a href="https://api.whatsapp.com/send?phone=557799237302" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp />
                <span>WhatsApp</span>
              </a>
              <a href="https://discord.gg/pT3m2fDj34" target="_blank" rel="noopener noreferrer">
                <FaDiscord />
                <span>Discord</span>
              </a>
            </div>
          </div>
        </motion.section>
      </div>

      <motion.footer initial={{ y: 200, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
        <footer className="footer">
          &copy; {new Date().getFullYear()} End Gear Services. Todos os direitos reservados.
        </footer>
      </motion.footer>

      {showScrollToTop && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="scroll-to-top"
          onClick={scrollToTop}
        >
          <FaArrowUp />
        </motion.button>
      )}
    </div>
  );
}