import React, { useState } from 'react';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import CartPopUp from './components/CartPopUp';
import ContactPopUp from './components/ContactPopUp';
import Modal from './components/Modal'; // Assuming Modal is the confirmation modal component
import './styles.css';

const App = () => {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [isContactVisible, setIsContactVisible] = useState(false);
  const [isConfirmationVisible, setIsConfirmationVisible] = useState(false);
  const [cartItems, setCartItems] = useState([]); 

  const addToCart = (product) => {
    setCartItems(prevItems => [...prevItems, product]);
  };

  const removeFromCart = id => {
    setCartItems(currentItems => currentItems.filter(item => item.id !== id));
  };

  const handleOrderSubmit = () => {
    setIsConfirmationVisible(true); // Show confirmation modal
    setCartItems([]); // Optionally clear the cart after order submission
  };

  return (
    <>
      <NavBar 
        openCart={() => setIsCartVisible(true)} 
        openContact={() => setIsContactVisible(true)}
      />
      <HomePage addToCart={addToCart} /> 
      
      {isCartVisible && (
        <CartPopUp 
          cartItems={cartItems} 
          removeFromCart={removeFromCart}
          closeCart={() => setIsCartVisible(false)} 
          submitOrder={handleOrderSubmit} // Passing submitOrder to CartPopUp
        />
      )}
      {isContactVisible && (
        <ContactPopUp 
          closeContact={() => setIsContactVisible(false)} 
        />
      )}

      {isConfirmationVisible && (
        <Modal isOpen={isConfirmationVisible} close={() => setIsConfirmationVisible(false)}>
          <p>Your order has been submitted successfully!</p>
          <p>Details: {JSON.stringify(cartItems)}</p>
        </Modal>
      )}

      <Footer />
    </>
  );
};

export default App;
