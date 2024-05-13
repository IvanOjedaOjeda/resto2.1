// src/components/StorySection.js
import React from 'react';
import './StorySection.css'; // Importa el archivo CSS para los estilos de la sección
import plateImage from '../assets/plate.jpg'; // Importa la imagen del plato de comida
import sideImageLeft from '../assets/side-image-left.jpg'; // Importa la imagen izquierda
import sideImageRight from '../assets/side-image-right.jpg'; // Importa la imagen derecha

const StorySection = () => {
  return (
    <section className="story-section">
      <div className="image-container">
        <img src={sideImageLeft} alt="Imagen izquierda" className="side-image" />
        <img src={plateImage} alt="Plato de comida" className="main-image" />
        <img src={sideImageRight} alt="Imagen derecha" className="side-image" />
      </div>
      <div className="content">
        <h2>Nuestra historia</h2>
        <p>
        En el corazón de la comuna de San Miguel, en una tranquila calle bordeada de árboles y casas antiguas, se encuentra un pequeño restaurante con un encanto único. Se llama "El Rincón de San Miguel" y su historia es tan deliciosa como sus platos.
                    Hace muchos años, en ese mismo lugar, se encontraba una modesta panadería atendida por una pareja de ancianos, Don José y Doña Carmen. Su pan era famoso en todo el barrio por su aroma y sabor incomparables. Sin embargo, con el paso del tiempo, la edad avanzada les dificultaba continuar con el negocio.
                    Un día, una joven pareja, Marta y Pablo, paseaba por las calles de San Miguel y se detuvieron frente a la vieja panadería. Al ver el letrero de "Se Vende", sus ojos brillaron con emoción. Marta, que había estudiado cocina en el extranjero, siempre había soñado con tener su propio restaurante. Pablo, por su parte, era un habilidoso empresario con un corazón generoso.
                    Decidieron comprar el local y, con mucho amor y dedicación, lo transformaron en un acogedor restaurante. Mantuvieron el espíritu familiar y tradicional del lugar, conservando la esencia de la antigua panadería. Decoraron el interior con muebles rústicos y detalles que recordaban la historia del barrio.
                    El aroma de pan recién horneado todavía llenaba el aire, pero ahora se mezclaba con fragancias de hierbas frescas y especias exóticas. El menú ofrecía una fusión de sabores locales e internacionales, con platos que deleitaban los paladares más exigentes.
                    Pronto, "El Rincón de San Miguel" se convirtió en un punto de encuentro para vecinos y visitantes. Las mesas siempre estaban llenas de risas y conversaciones animadas. Marta y Pablo no solo ofrecían deliciosos platillos, sino también calidez y hospitalidad, haciendo que cada cliente se sintiera como en casa.
                    Con el tiempo, el restaurante se convirtió en un símbolo de la comunidad de San Miguel. Marta y Pablo no solo habían creado un negocio exitoso, sino también un lugar donde la gente podía compartir momentos especiales, celebrar ocasiones importantes y disfrutar de la buena comida en un ambiente familiar y acogedor.
                    Y así, la historia de "El Rincón de San Miguel" continúa, escribiendo nuevos capítulos de amor, amistad y sabores inolvidables en el corazón de la comuna de San Miguel.

        </p>
      </div>
    </section>
  );
}

export default StorySection;
