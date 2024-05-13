// src/components/NewsletterSection.js
import React from 'react';
import './NewsletterSection.css'; // Importa el archivo CSS para los estilos de la sección

const NewsletterSection = () => {
  return (
    <section className="newsletter-section">
      <h2>Suscríbete a nuestro Newsletter</h2>
      <form>
        <input type="email" placeholder="Ingresa tu correo electrónico" />
        <button type="submit">Suscribirse</button>
      </form>
    </section>
  );
}

export default NewsletterSection;
