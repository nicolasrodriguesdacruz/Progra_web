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
  display: 'flex', // This will allow you to structure the content using flexbox.
  flexDirection: 'column', // Aligns children (img, h3, p) in a column.
  alignItems: 'center', // Centers children along the cross axis (horizontal, since direction is column).
  maxWidth: '300px', // Sets a maximum width for the card.
  margin: 'auto', // This will center the card in its container if the container is flex as well.
  textAlign: 'center', // Centers the text inside each child.
  overflow: 'hidden', // Prevents content from overflowing the set dimensions of the card.
};


const imageStyle = {
  maxWidth: '100%',
  height: 'auto',
  marginBottom: '1rem',
};

export default ProductCard;