import React, { useState } from 'react';

const CartPopUp = ({ cartItems, closeCart }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [creditCard, setCreditCard] = useState('');

  const popupStyle = {
    background: '#f9f9f9',
    border: '1px solid #ccc',
    padding: '20px',
    borderRadius: '8px',
    width: '90%',
    maxWidth: '600px', 
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    zIndex: 1000, 
  };

  const inputStyle = {
    padding: '10px',
    margin: '10px 0',
    width: '100%',
    boxSizing: 'border-box'
  };

  const buttonStyle = {
    padding: '10px 20px',
    margin: '10px 10px 10px 0',
    cursor: 'pointer'
  };

  const sendButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none'
  };

  const cancelButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#f44336',
    color: 'white',
    border: 'none'
  };

  return (
    <div style={popupStyle}>
      <h3>Your Cart</h3>
      {cartItems.length > 0 ? (
        cartItems.map(item => (
          <div key={item.id}>
            <p>{item.name} - ${item.price}</p>
          </div>
        ))
      ) : <p>Your cart is empty.</p>}

      <h3>Enter your details:</h3>
      <input
        type="text"
        value={name}
        style={inputStyle}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <input
        type="email"
        value={email}
        style={inputStyle}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />
      <input
        type="text"
        value={creditCard}
        style={inputStyle}
        onChange={(e) => setCreditCard(e.target.value)}
        placeholder="Enter your credit card number"
      />
      <button onClick={() => {
          console.log("Order submitted", { name, email, creditCard, cartItems });
          closeCart();
      }} style={sendButtonStyle}>Submit Order</button>
      <button onClick={closeCart} style={cancelButtonStyle}>Cancel</button>
    </div>
  );
};

export default CartPopUp;
