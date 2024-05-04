import React, { useState } from 'react';

const CartPopUp = ({ closeCart }) => {
  // State to store input values
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [creditCard, setCreditCard] = useState('');

  // Function to handle sending data
  const handleSend = () => {
    // Implement what should happen when data is sent
    console.log('Sending data:', { name, email, creditCard });
    // You might want to close the cart or clear the form here
    closeCart();
  };

  return (
    <div className="popup">
      {/* Input for name */}
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />

      {/* Input for email */}
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />

      {/* Input for credit card */}
      <input
        type="text"
        value={creditCard}
        onChange={(e) => setCreditCard(e.target.value)}
        placeholder="Enter your credit card number"
      />

      {/* Button to send the purchase data */}
      <button onClick={handleSend}>Send</button>

      {/* Button to close the popup */}
      <button onClick={closeCart}>Cancel</button>
    </div>
  );
};

export default CartPopUp;