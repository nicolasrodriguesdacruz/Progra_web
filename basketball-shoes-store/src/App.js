import React, { useState } from 'react';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import CartPopUp from './components/CartPopUp';
import ContactPopUp from './components/ContactPopUp';
import './styles.css';

const App = () => {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [isContactVisible, setIsContactVisible] = useState(false);

  return (
    <>
      <NavBar 
        openCart={() => setIsCartVisible(true)} 
        openContact={() => setIsContactVisible(true)} 
      />
      <HomePage />
      
      {isCartVisible && <CartPopUp closeCart={() => setIsCartVisible(false)} />}
      {isContactVisible && <ContactPopUp closeContact={() => setIsContactVisible(false)} />}

      <Footer />
    </>
  );
};

export default App;