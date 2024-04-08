import React from 'react';
import ProductCard from '../components/ProductCard';
import products from '../data/products';

const HomePage = () => {
  return (
    <div className="home-page">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default HomePage;
