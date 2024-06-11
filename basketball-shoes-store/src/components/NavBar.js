import React from 'react';
import logo from '../assets/logo.png';  

const NavBar = ({ openCart, openContact }) => {
    return (
        <nav style={navStyle}>
            <div style={logoContainerStyle}>
                <img src={logo} alt="BasketKicks Logo" style={logoStyle} />
                <span style={titleStyle}>BasketKicks</span>
            </div>
            <div>
                <button className="nav-button" onClick={openCart}>Cart</button>
                <button className="nav-button" onClick={openContact}>Contact us</button>
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
  background: 'rgba(0, 0, 0, 0)',
  height: '50px',
  marginRight: '10px',
};

const titleStyle = {
  fontWeight: 'bold',
  fontSize: '1.5rem',
  color: 'white',
};

export default NavBar;