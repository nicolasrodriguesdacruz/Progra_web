import React from 'react';

const NavBar = () => {
  return (
    <nav style={{ 
      display: 'flex', 
      justifyContent: 'space-around', 
      alignItems: 'center', 
      background: 'rgba(0, 0, 0, 0.7)', // semi-transparent black background for readability
      padding: '1rem', 
      color: 'white'
    }}>
      <div>Logo</div>
      <div>
        <a href="#nike" style={{ color: 'white', margin: '0 10px' }}>Nike</a>
        <a href="#adidas" style={{ color: 'white', margin: '0 10px' }}>Adidas</a>
        <a href="#puma" style={{ color: 'white', margin: '0 10px' }}>Puma</a>
        <a href="#under-armour" style={{ color: 'white', margin: '0 10px' }}>Under Armour</a>
        {/* Add more brands as needed */}
      </div>
    </nav>
  );
};

export default NavBar;