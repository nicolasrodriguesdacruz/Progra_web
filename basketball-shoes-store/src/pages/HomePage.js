import React from 'react';
import ProductCard from '../components/ProductCard';
import products from '../data/products';
import background from './assets/background';

const HomePage = () => {
  return (
    <div className="home-page" style={{ backgroundImage: `url(${background})` }}>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default HomePage;
