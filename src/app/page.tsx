"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Card from '../components/Card';
import AboutUsSection from '../components/AboutUsSection';
import { FaArrowUp, FaWhatsapp, FaDiscord } from 'react-icons/fa';
import '../styles/global.css';
import '../styles/Contact.css';
import FAQSection from '../components/FAQSection';

export default function Home() {
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [headerVisible, setHeaderVisible] = useState(true);

  // State para controlar visibilidade do header
  const [isVisibleHeader, setIsVisibleHeader] = useState(true);

  // State para controlar visibilidade da seção Sobre Nós
  const [isVisibleAboutUs, setIsVisibleAboutUs] = useState(false);
  const [hasAnimatedAboutUs, setHasAnimatedAboutUs] = useState(false);
  const aboutUsRef = useRef<HTMLDivElement>(null);

  // State para controlar visibilidade da seção FAQ
  const [isVisibleFAQ, setIsVisibleFAQ] = useState(false);
  const [hasAnimatedFAQ, setHasAnimatedFAQ] = useState(false);
  const faqRef = useRef<HTMLDivElement>(null);

  // State para controlar visibilidade da seção Contatos
  const [isVisibleContacts, setIsVisibleContacts] = useState(false);
  const [hasAnimatedContacts, setHasAnimatedContacts] = useState(false);
  const contactsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setPrevScrollPos(currentScrollPos);
      setShowScrollToTop(currentScrollPos > window.innerHeight / 2);

      // Verificar se estamos nas seções visíveis ou não
      const isOnAboutUsSection = aboutUsRef.current && aboutUsRef.current.getBoundingClientRect().top <= window.innerHeight / 2;
      const isOnFAQSection = faqRef.current && faqRef.current.getBoundingClientRect().top <= window.innerHeight / 2;
      const isOnContactsSection = contactsRef.current && contactsRef.current.getBoundingClientRect().top <= window.innerHeight / 2;

      setIsVisibleHeader(!isOnAboutUsSection && !isOnFAQSection && !isOnContactsSection);
    };

    // Adicionar evento de scroll ao carregar o componente
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  // Função para animar o scroll ao topo da página
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Configurar IntersectionObserver para a seção Sobre Nós
  useEffect(() => {
    const observerAboutUs = new IntersectionObserver(([entry]) => {
      const isVisible = entry.isIntersecting;
      setIsVisibleAboutUs(isVisible);
      if (isVisible && !hasAnimatedAboutUs) {
        setHasAnimatedAboutUs(true);
      }
    }, {
      threshold: 0.1 // Reduzir o threshold para melhorar a detecção
    });

    if (aboutUsRef.current) {
      observerAboutUs.observe(aboutUsRef.current);
    }

    return () => {
      if (aboutUsRef.current) {
        observerAboutUs.unobserve(aboutUsRef.current);
      }
    };
  }, [hasAnimatedAboutUs]);

  // Configurar IntersectionObserver para a seção FAQ
  useEffect(() => {
    const observerFAQ = new IntersectionObserver(([entry]) => {
      const isVisible = entry.isIntersecting;
      setIsVisibleFAQ(isVisible);
      if (isVisible && !hasAnimatedFAQ) {
        setHasAnimatedFAQ(true);
      }
    }, {
      threshold: 0.1 // Reduzir o threshold para melhorar a detecção
    });

    if (faqRef.current) {
      observerFAQ.observe(faqRef.current);
    }

    return () => {
      if (faqRef.current) {
        observerFAQ.unobserve(faqRef.current);
      }
    };
  }, [hasAnimatedFAQ]);

  // Configurar IntersectionObserver para a seção Contatos
  useEffect(() => {
    const observerContacts = new IntersectionObserver(([entry]) => {
      const isVisible = entry.isIntersecting;
      setIsVisibleContacts(isVisible);
      if (isVisible && !hasAnimatedContacts) {
        setHasAnimatedContacts(true);
      }
    }, {
      threshold: 0.1 // Reduzir o threshold para melhorar a detecção
    });

    if (contactsRef.current) {
      observerContacts.observe(contactsRef.current);
    }

    return () => {
      if (contactsRef.current) {
        observerContacts.unobserve(contactsRef.current);
      }
    };
  }, [hasAnimatedContacts]);

  return (
    <div className="app">

      {/* Passando a prop `visible` para o Header com animação */}

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: isVisibleHeader ? 1 : 0 }} transition={{ duration: 0.6 }}>
        <Header visible={isVisibleHeader} />
      </motion.div>

      <div className="content">
        <motion.h2
          className="h2-custom"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Serviços
        </motion.h2>
        <div className="card-container" id="content">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <Card
              title="KSM"
              description={
                <div className='text-hidden'>
                  <p>Keystone Master Season 1</p>
                  <p>R$ 250 ⁰⁰</p>
                  <p>O que vem neste serviço:</p>
                  <ul>
                    <li>Total de 12 pedras M+7</li>
                    <li>Gear '' no fim da dungeon</li>
                    <li>Gear '' no bau semanal</li>
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
                  <p>M+10</p>
                  <p>R$ 150 ⁰⁰</p>
                  <p>O que vem neste serviço:</p>
                  <ul>
                    <li>Total de 12 pedras M+7</li>
                    <li>Gear '' no fim da dungeon</li>
                    <li>Gear '' no bau semanal</li>
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
                <div className="text-hidden">
                  <p>M+ 7</p>
                  <p>R$ 25 ⁰⁰</p>
                  <p>O que vem neste serviço:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Total de 12 pedras M+7</li>
                    <li>Gear '' no fim da dungeon</li>
                    <li>Gear '' no bau semanal</li>
                    <li>Montaria da Season</li>
                  </ul>
                </div>
              }
              imageUrl="https://mythicboost.com/Content/uploaded/services/wow/keystone-master.jpg?cver=17fadf95a30f4d04bf3bc393adb41566"
            />
          </motion.div>
        </div>


        {/* Seção Sobre Nós */}
        <motion.div
          id="about-us"
          ref={aboutUsRef}
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: hasAnimatedAboutUs ? 0 : 200, opacity: hasAnimatedAboutUs ? 1 : 0 }}
          transition={{ duration: 0.8 }}
        >
          <AboutUsSection />
        </motion.div>

        {/* Seção FAQ */}
        <motion.div
          id="faq"
          ref={faqRef}
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: hasAnimatedFAQ ? 0 : -200, opacity: hasAnimatedFAQ ? 1 : 0 }}
          transition={{ duration: 0.8 }}
        >
          <FAQSection />
        </motion.div>

        {/* Seção Contatos */}
        <motion.section
          id='contacts'
          ref={contactsRef}
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: hasAnimatedContacts ? 0 : -200, opacity: hasAnimatedContacts ? 1 : 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="contacts">
            <h2>Contatos</h2>
            <p>Entre em contato conosco pelos seguintes meios:</p>
            <div className="contact-icons">
              <a href="https://api.whatsapp.com/send?phone=557799237302" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className='icones' color='lime' />
                <span>WhatsApp</span>
              </a>
              <a href="https://discord.gg/pT3m2fDj34" target="_blank" rel="noopener noreferrer">
                <FaDiscord className='icones' color='#00a5ff' />
                <span>Discord</span>
              </a>
            </div>
          </div>
        </motion.section>
      </div>

      {/* Footer */}
      <motion.footer initial={{ y: 200, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
        <footer className="footer">
          &copy; {new Date().getFullYear()} End Gear Services. Todos os direitos reservados.
        </footer>
      </motion.footer>

      {/* Botão de voltar ao topo */}
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
