// src/components/Header.js
import React from 'react';
import './Header.css'; // Importa el archivo CSS para los estilos del header

const Header = () => {
  return (
    <header className="header">
      <h1>¡Bienvenido a mi sitio web!</h1>
      <nav>
        <ul>
          <li><a href="/">Inicio</a></li>
          <li><a href="/acerca-de">Acerca de</a></li>
          <li><a href="/contacto">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;