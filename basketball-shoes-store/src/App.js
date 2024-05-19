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
  const [confirmationMessage, setConfirmationMessage] = useState('');

  const addToCart = (product) => {
    setCartItems(prevItems => [...prevItems, product]);
    setConfirmationMessage(`${product.name} has been added to the cart!`);
    setTimeout(() => {
      setConfirmationMessage('');
    }, 3000); // Hide the message after 3 seconds
  };

  const removeFromCart = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  return (
    <>
      <NavBar 
        openCart={() => setIsCartVisible(true)} 
        openContact={() => setIsContactVisible(true)} 
      />
      {confirmationMessage && (
        <div className="confirmation-message">
          {confirmationMessage}
        </div>
      )}
      <HomePage addToCart={addToCart} />
      
      {isCartVisible && <CartPopUp cartItems={cartItems} removeFromCart={removeFromCart} closeCart={() => setIsCartVisible(false)} />}
      {isContactVisible && <ContactPopUp closeContact={() => setIsContactVisible(false)} />}

      <Footer />
    </>
  );
};

export default App;


