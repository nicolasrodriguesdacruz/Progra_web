import React from 'react';

// Sample brands, you can add more or fetch these from an API
const brands = ['Nike', 'Adidas', 'Puma', 'Under Armour', 'Reebok'];

const BrandTable = ({ setSelectedBrand }) => {
  return (
    <div className="brand-table">
      {brands.map((brand) => (
        <div
          key={brand}
          className="brand-item"
          onClick={() => setSelectedBrand(brand.toLowerCase())}
        >
          {brand}
        </div>
      ))}
    </div>
  );
};

export default BrandTable;
