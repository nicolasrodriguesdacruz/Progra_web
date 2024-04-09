import React from 'react';
import ProductCard from './ProductCard';
import products from '../data/products';
import './styles.css'; 

const HomePage = () => {
  return (
    <div className="product-list">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default HomePage;
