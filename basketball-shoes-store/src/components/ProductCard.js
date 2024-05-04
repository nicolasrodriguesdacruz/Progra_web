import React from 'react';

const ProductCard = ({ product }) => {
  console.log(product.imageUrl);

  return (
    <div style={cardStyle}>
      <img src={product.imageUrl} alt={product.name} style={imageStyle} />
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

export default ProductCard;