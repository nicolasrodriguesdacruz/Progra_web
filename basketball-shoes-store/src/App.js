import React, { useState } from 'react';
import BrandFilter from './components/BrandFilter';
import ShoeList from './components/ShoeList';
import BrandTable from './components/BrandBar';


function App() {
  const [selectedBrand, setSelectedBrand] = useState('all');

  return (
    <div className="App">
      <header className="App-header">
        {/* Other content */}
        <BrandBar setSelectedBrand={setSelectedBrand} selectedBrand={selectedBrand} />
        {/* Where you display the shoes */}
      </header>
    </div>
  );
}

export default App;
