import React from 'react';
import '../styles/Card.css';

import { motion } from 'framer-motion';
import '../styles/Card.css';

function Card({ title, description, imageUrl }: any) {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleButtonClick = () => {
    document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.div
      className="card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <motion.img
        src={imageUrl}
        alt={title}
        className="card-image"
        animate={{ opacity: isHovered ? 0.3 : 1 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Gradient overlay for better text readability */}
      <div className="card-overlay" />

      <motion.h2
        animate={{ opacity: isHovered ? 0 : 1, y: isHovered ? -20 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {title}
      </motion.h2>

      <motion.div
        className="card-description"
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: isHovered ? "0%" : "100%", opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        {description}
        <motion.button
          className="details-button"
          onClick={handleButtonClick}
          whileHover={{ scale: 1.1, backgroundColor: "#0056b3" }}
          whileTap={{ scale: 0.95 }}
        >
          Mais detalhes
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

export default Card;
