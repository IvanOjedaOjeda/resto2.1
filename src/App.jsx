import { useEffect, useState } from 'react'

import './App.css'

import Header from './components/Header';
import StorySection from './components/StorySection';
import ReviewsSection from './components/ReviewsSection';
import NewsletterSection from './components/NewsletterSection';
import Footer from './components/Footer';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { collection, addDoc } from 'firebase/firestore';
import Reserva from './components/Reserva';

function App() {
  const [count, setCount] = useState("");
  const [count2, setCount2] = useState("");

  const [reservas, setReservas] = useState ();

  const [nombre, setNombre]= useState("");
  const [email, setEmail]= useState("");
  const [fecha, setFecha]= useState("");

  const cambioValor = () => {
    setCount(1 + 1);
  }

  return (
    <div>
      <Header />
      <StorySection />
      <Reserva />
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

/* console.log({db}); */

const docRef = async (e)=> {
  e.preventDefault();
  const respuesta = await addDoc(collection(db, "reserva"), {
    nombre: nombre,
    email: email,
    fecha: fecha,
   });

  
  /* console.log("El documento ingresado es: ", res.id) */
};

const listaReservas = async ()=>{
  const reservaCol = collection(db, "reserva");
  const reservaSnapshot = await getDocs(reservaCol);
  const reservaLista = reservaSnapshot.docs.map((doc)=> doc.data());
  setReservas(reservaLista);
};

useEffect(()=>{
  listaReservas();

}, [])








<Reserva
docRef={docRef}
nombre={nombre}
email={email}
fecha={fecha}
setNombre={setNombre}
setEmail={setEmail}
setFecha={setFecha}
/>

<div>
  {reservas?.map((reserva)=>(
    <>
    <h1>Datos:</h1>
    <p>Nombre: {reserva.nombre}</p>
    </>
  ))}
</div>

export default App;