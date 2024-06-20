"use client"
import React from 'react';
import '../styles/Card.css';

function Card({ title, description, imageUrl }:any) {
  const handleButtonClick = () => {
    document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="card-image" />
      <h2>{title}</h2>
      <div className="card-description">
        {description}
        <button className="details-button" onClick={handleButtonClick}>
          Mais detalhes
        </button>
      </div>
    </div>
  );
}

export default Card;
