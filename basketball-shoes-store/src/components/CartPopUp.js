import React, { useState } from 'react';

const CartPopUp = ({ cartItems, removeFromCart, closeCart }) => {
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
    maxHeight: '80vh', // Limita la altura máxima del popup
    overflow: 'auto' // Añade desplazamiento si el contenido excede la altura máxima
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

  const removeButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#f44336',
    color: 'white',
    border: 'none'
  };

  const handleSubmitOrder = () => {
    // You can add any validation or processing here before showing the alert
    console.log("Order submitted", { name, email, creditCard, cartItems });
    alert(`Thank you, ${name}! Your order has been submitted successfully.`);
    closeCart(); // Close the cart popup after submitting
  };

  return (
    <div style={popupStyle}>
      <h3>Your Cart</h3>
      <div style={{ maxHeight: '40vh', overflowY: 'auto', marginBottom: '20px' }}>
        {cartItems.length > 0 ? (
          cartItems.map(item => (
            <div key={item.id} style={{ marginBottom: '10px' }}>
              <p>{item.name} - ${item.price}</p>
              <button onClick={() => removeFromCart(item.id)} style={removeButtonStyle}>Remove</button>
            </div>
          ))
        ) : <p>Your cart is empty.</p>}
      </div>
      <h3>Enter your details:</h3>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
        style={inputStyle}
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        style={inputStyle}
      />
      <input
        type="text"
        value={creditCard}
        onChange={(e) => setCreditCard(e.target.value)}
        placeholder="Enter your credit card number"
        style={inputStyle}
      />
      <button onClick={handleSubmitOrder} style={buttonStyle}>Submit Order</button>
      <button onClick={closeCart} style={buttonStyle}>Cancel</button>
    </div>
  );
};

export default CartPopUp;
