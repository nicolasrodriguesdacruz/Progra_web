import React from 'react';
import ProductCard from '../components/ProductCard';
import products from '../data/products';
import '../styles.css'; 

const HomePage = ({ addToCart }) => {
  return (
    <div className="product-list">
      {products.map(product => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default HomePage;
