import React from 'react';

const BrandFilter = ({ setSelectedBrand }) => {
  const brands = ['All', 'Nike', 'Adidas', 'Puma', 'Under Armour']; 

  return (
    <select onChange={(e) => setSelectedBrand(e.target.value)} className="brand-selector">
      {brands.map(brand => (
        <option key={brand} value={brand.toLowerCase()}>{brand}</option>
      ))}
    </select>
  );
};

export default BrandFilter;
