// AboutUsSection.js

import React from 'react';
import '../styles/AboutUsSection.css';

function AboutUsSection({id}:any) {
  return (
    <div id="about-us" className="about-us-section">
      <h2>Sobre nós</h2>
      <img src="https://wow.zamimg.com/uploads/guide/seo/4672.jpg?1478722534" alt="Imagem Sobre Nós" style={{margin:"20px auto"}} />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lacinia ex nec magna molestie, id commodo nulla varius.</p>
    </div>
  );
}

export default AboutUsSection;
