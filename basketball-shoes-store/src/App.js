import React, { useState } from 'react';
import BrandFilter from './components/BrandFilter';
import ShoeList from './components/ShoeList';
import BrandBar from './components/BrandBar';


function App() {
  const [selectedBrand, setSelectedBrand] = useState('all');

  return (
    <div className="App">
      <img src={process.env.PUBLIC_URL + '/background.png'} alt="Background" className="background-image"/>
      <header className="App-header">
        {/* Other content */}
        <BrandBar setSelectedBrand={setSelectedBrand} selectedBrand={selectedBrand} />
        {/* Where you display the shoes */}
      </header>
    </div>
  );
}

export default App;
