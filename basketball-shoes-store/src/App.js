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
  const [cartItems, setCartItems] = useState([]); 

  const addToCart = (product) => {
    setCartItems(prevItems => [...prevItems, product]);
  };

  return (
    <>
      <NavBar 
        openCart={() => setIsCartVisible(true)} 
        openContact={() => setIsContactVisible(true)}
        addToCart={addToCart} 
      />
      <HomePage addToCart={addToCart} /> {/* Assuming HomePage will pass addToCart to ProductCard */}
      
      {isCartVisible && <CartPopUp cartItems={cartItems} closeCart={() => setIsCartVisible(false)} />}
      {isContactVisible && <ContactPopUp closeContact={() => setIsContactVisible(false)} />}

      <Footer />
    </>
  );
};

export default App;
