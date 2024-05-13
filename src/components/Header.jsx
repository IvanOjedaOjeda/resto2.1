// src/components/Header.js
import React from 'react';
import './Header.css'; // Importa el archivo CSS para los estilos del header
import logo from '../assets/logo.jpg'; // Importa la imagen del logo

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Logo del restaurante" className="logo" />
      <h1>¡Bienvenidos al placer de comer!</h1>
      <nav>
        <ul>
          <li><a href="/">Inicio</a></li>
          <li><a href="/Menu">Menu</a></li>
          <li><a href="/Reservas">Reservas</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
