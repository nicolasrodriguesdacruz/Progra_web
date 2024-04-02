import React from 'react';

const brands = ['all', 'nike', 'adidas', 'puma'];

function BrandFilter({ setSelectedBrand }) {
  return (
    <select onChange={(e) => setSelectedBrand(e.target.value)}>
      {brands.map(brand => (
        <option key={brand} value={brand}>{brand.toUpperCase()}</option>
      ))}
    </select>
  );
}

export default BrandFilter;
