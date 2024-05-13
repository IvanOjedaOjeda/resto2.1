// src/App.js
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import NewsletterSection from './components/NewsletterSection';

function App() {
  return (
    <div>
      <Header />       
        <NewsletterSection />      
      <Footer />
    </div >
  );
}

function Menu() {
  return (
    <ul>
      <li>Plato 1</li>
      <li>Plato 2</li>
      <li>Plato 3</li>
      {/* Agrega más elementos <li> según sea necesario para los platos de tu menú */}
    </ul>
  );
}

export default App;
