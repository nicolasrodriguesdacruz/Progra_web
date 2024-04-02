import React, { useState } from 'react';
import BrandFilter from './components/BrandFilter';
import ShoeList from './components/ShoeList';

function App() {
  const [selectedBrand, setSelectedBrand] = useState('all');

  return (
    <div className="App">
      <header className="App-header">
        {/* Other content */}
        <BrandFilter setSelectedBrand={setSelectedBrand} />
        {/* Where you display the shoes */}
      </header>
    </div>
  );
}

export default App;
