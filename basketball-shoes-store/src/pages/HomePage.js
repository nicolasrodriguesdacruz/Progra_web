import backgroundImage from '../assets/images/background.png';

import React from 'react';
import ProductCard from '../components/ProductCard';
import products from '../data/products';

const HomePage = () => {
  return (
    <div className="home-page" style={{ backgroundImage: `url(${backgroundImage})` }}>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default HomePage;
