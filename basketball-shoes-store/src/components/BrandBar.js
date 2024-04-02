import React from 'react';

const brands = ['Nike', 'Adidas', 'Puma', 'Under Armour', 'Reebok']; // Your brands

const BrandBar = ({ setSelectedBrand, selectedBrand }) => {
  return (
    <div className="brand-bar">
      {brands.map((brand) => (
        <div
          key={brand}
          className={`brand-item ${selectedBrand === brand.toLowerCase() ? 'active' : ''}`}
          onClick={() => setSelectedBrand(brand.toLowerCase())}
        >
          {brand}
        </div>
      ))}
    </div>
  );
};

export default BrandBar;