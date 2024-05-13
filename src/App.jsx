// src/App.js
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import NewsletterSection from './components/NewsletterSection';
import ReviewsSection from './components/ReviewsSection';

function App() {
  return (
    <div>
      <Header />       
       <ReviewsSection /> 
       <NewsletterSection />      
      <Footer />
      
    </div >
  );
}



export default App;
