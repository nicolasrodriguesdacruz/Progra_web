import React from 'react';
import ProductCard from '../components/ProductCard';
import products from '../data/products';

const HomePage = () => {
  return (
    <div className="home-page" style={{ backgroundImage: 'url(/images/background.png)' }}>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default HomePage;