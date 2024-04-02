import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card" style={{ background: 'rgba(255, 255, 255, 0.9)' }}>
      <img src={`/images/${product.imageUrl}`} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>${product.price}</p>
    </div>
  );
};

export default ProductCard;