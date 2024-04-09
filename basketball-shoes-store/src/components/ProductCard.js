import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div style={cardStyle}>
      <img src={product.imageUrl} alt={product.name} style={imageStyle} />
      <img src="../assets/shoe1.jpg" alt="test" />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>${product.price}</p>
      {/* Agregar enlace o botón para detalles o añadir al carrito */}
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
};

const imageStyle = {
  maxWidth: '100%',
  height: 'auto',
  marginBottom: '1rem',
};

export default ProductCard;