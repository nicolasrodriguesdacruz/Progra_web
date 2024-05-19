import React, { useState } from 'react';

const ProductCard = ({ product, addToCart }) => {
  const [size, setSize] = useState('');

  const handleAddToCart = () => {
    if (size) {
      addToCart({ ...product, size });
    } else {
      alert('Please select a size');
    }
  };

  return (
    <div style={cardStyle}>
      <img src={product.imageUrl} alt={product.name} style={imageStyle} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <select value={size} onChange={(e) => setSize(e.target.value)} style={selectStyle}>
        <option value="">Select Size</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
      </select>
      <button onClick={handleAddToCart} style={buttonStyle}>Add to Cart</button>
    </div>
  );
};

const cardStyle = {
  background: 'white',
  border: '1px solid #ddd',
  borderRadius: '8px',
  padding: '1rem',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s, box-shadow 0.3s',
  display: 'flex', 
  flexDirection: 'column',
  alignItems: 'center',
  maxWidth: '300px', 
  margin: 'auto', 
  textAlign: 'center',
  overflow: 'hidden', 
};

const imageStyle = {
  maxWidth: '100%',
  height: 'auto',
  marginBottom: '1rem',
};

const buttonStyle = {
  padding: '10px 20px',
  backgroundColor: '#4CAF50',
  color: 'white',
  border: 'none',
  cursor: 'pointer',
  borderRadius: '5px',
};

const selectStyle = {
  padding: '10px',
  margin: '10px 0',
  width: '100%',
  boxSizing: 'border-box',
};

export default ProductCard;
