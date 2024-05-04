import React, { useState } from 'react';

const ContactPopUp = ({ closeContact }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Email submitted:", email);
    closeContact(); 
  };

  return (
    <div className="popup" style={{ padding: '20px', background: '#f9f9f9', border: '1px solid #ccc', borderRadius: '8px' }}>
      <p>Please enter your email address. We will use it to contact you directly.</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          style={{ padding: '8px', margin: '10px 0', display: 'block', width: 'calc(100% - 16px)', boxSizing: 'border-box' }}
        />
        <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer' }}>
          Send
        </button>
      </form>
      <button onClick={closeContact} style={{ padding: '10px 20px', backgroundColor: '#f44336', color: 'white', border: 'none', cursor: 'pointer', marginTop: '10px' }}>
        Close Contact Form
      </button>
    </div>
  );
};

export default ContactPopUp;

