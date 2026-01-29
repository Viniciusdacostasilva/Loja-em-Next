// AboutUsSection.js

import React from 'react';
import '../styles/AboutUsSection.css';
import Image from 'next/image';
import aboutImg from '../img/about.jpg'; // Certifique-se de que o caminho está correto

function AboutUsSection({id}:any) {
  return (
    <div id="about-us" className="about-us-section">
      <h2>Sobre nós</h2>
      <Image src={aboutImg} alt="Imagem Sobre Nós" style={{margin:"20px auto"}} />
      <p>Somos uma equipe dedicada de aventureiros virtuais apaixonados pelo desafio e pela excelência. No coração de Azeroth, nos destacamos não apenas pelo nosso desempenho excepcional, mas também pelo compromisso com a qualidade e a satisfação do cliente. Com anos de experiência em World of Warcraft, oferecemos serviços de boost de M+ que são tanto eficientes quanto acessíveis, garantindo que você possa alcançar suas metas no jogo sem complicações.</p>
    </div>
  );
}

export default AboutUsSection;
