import React from 'react';

// Placeholder for shoe data
const shoes = [
  { id: 1, brand: 'nike', name: 'Air Max' },
  { id: 2, brand: 'adidas', name: 'Ultra Boost' },
  { id: 3, brand: 'puma', name: 'Suede Classic' },
  // Add more shoes here
];

function ShoeList({ selectedBrand }) {
  return (
    <ul>
      {shoes.filter(shoe => selectedBrand === 'all' || shoe.brand === selectedBrand)
            .map(shoe => (
              <li key={shoe.id}>{shoe.name} by {shoe.brand.toUpperCase()}</li>
            ))}
    </ul>
  );
}

export default ShoeList;
