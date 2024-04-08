import React from 'react';

const NavBar = () => {
  return (
    <nav style={navStyle}>
      <div style={logoContainerStyle}>
        <span style={titleStyle}>BasketKicks</span>

      </div>
      <div>
        <a href="#nike" style={linkStyle}>Nike</a>
        <a href="#adidas" style={linkStyle}>Adidas</a>
        <a href="#puma" style={linkStyle}>Puma</a>
        <a href="#under-armour" style={linkStyle}>Under Armour</a>
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
