import React, { useState } from 'react';

const CartPopUp = ({ closeCart }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [creditCard, setCreditCard] = useState('');

  const popupStyle = {
    background: '#f9f9f9',
    border: '1px solid #ccc',
    padding: '20px',
    borderRadius: '8px',
    width: '300px',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
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
      <button onClick={() => closeCart()} style={sendButtonStyle}>Send</button>
      <button onClick={closeCart} style={cancelButtonStyle}>Cancel</button>
    </div>
  );
};

export default CartPopUp;
