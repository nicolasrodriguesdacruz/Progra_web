import React from 'react';

const NavBar = ({ openCart, openContact }) => {
  return (
    <nav style={navStyle}>
      <div style={logoContainerStyle}>
        <span style={titleStyle}>BasketKicks</span>
      </div>
      <div>
        {/* Removed Link and replaced with button or div that calls the appropriate function on click */}
        <button style={linkStyle} onClick={() => openCart()}>Carrito</button>
        <button style={linkStyle} onClick={() => openContact()}>Contáctenos</button>
      </div>
    </nav>
  );
};

const navStyle = {
  display: 'flex',
  justifyContent: 'space-between', 
  alignItems: 'center',
  background: 'rgba(0, 0, 0, 0.8)',
  padding: '1rem',
};

const logoContainerStyle = {
  display: 'flex',
  alignItems: 'center',
};

const logoStyle = {
  height: '50px', 
  marginRight: '10px', 
};

const titleStyle = {
  fontWeight: 'bold',
  fontSize: '1.5rem',
  color: 'white',
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  margin: '0 10px',
  padding: '5px 10px',
  borderRadius: '5px',
  transition: 'background-color 0.3s',
};

export default NavBar;
