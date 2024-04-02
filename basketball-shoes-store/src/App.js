import React, { useState } from 'react';
import BrandFilter from './components/BrandFilter';
import ShoeList from './components/ShoeList';

function App() {
  const [selectedBrand, setSelectedBrand] = useState('all');

  return (
    <div>
      <BrandFilter setSelectedBrand={setSelectedBrand} />
      <ShoeList selectedBrand={selectedBrand} />
    </div>
  );
}

export default App;
