// src/components/ReviewsSection.js
import React from 'react';
import './ReviewsSection.css'; // Importa el archivo CSS para los estilos de la sección

const ReviewsSection = () => {
  return (
    <section className="reviews-section">
      <div className="content">
        <h2>Escribe una reseña</h2>
        <form>
          <label htmlFor="name">Nombre:</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="review">Reseña:</label>
          <textarea id="review" name="review" rows="4" required></textarea>
          <button type="submit">Enviar reseña</button>
        </form>
      </div>
    </section>
  );
}

export default ReviewsSection;
