// src/App.js
import React from 'react';
import Header from './components/Header';
import StorySection from './components/StorySection';
import ReviewsSection from './components/ReviewsSection';
import NewsletterSection from './components/NewsletterSection';
import Footer from './components/Footer';
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';





function App() {
  return (
    <div>
      <Header />
      <StorySection />
      <ReviewsSection />
      <NewsletterSection />
      <Footer />


    </div >
  );
}

const firebaseConfig = {
  apiKey: "AIzaSyBvDTFRDY34N0aslMGwlpfAIAZ9sZMuE4Y",
  authDomain: "formulario-de-reserva-ad982.firebaseapp.com",
  projectId: "formulario-de-reserva-ad982",
  storageBucket: "formulario-de-reserva-ad982.appspot.com",
  messagingSenderId: "359614704391",
  appId: "1:359614704391:web:073d52012c5303960db3a2"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default App;
