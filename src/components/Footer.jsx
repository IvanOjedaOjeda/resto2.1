// src/components/Footer.js
import React from 'react';
import './Footer.css'; // Importa el archivo CSS para los estilos del footer

const Footer = () => {
  return (
    <footer className="footer">
      <p>Iván Ojeda © {new Date().getFullYear()} FoodDrinks</p>
    </footer>
  );
}

export default Footer;
