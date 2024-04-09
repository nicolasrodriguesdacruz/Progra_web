import React from 'react';
import HomePage from './pages/HomePage';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import './styles.css'; // Assuming you have an App.css for general styles

const App = () => {
  return (
    <>
      <NavBar />
      <main>
        <HomePage />
      </main>
      <Footer />
    </>
  );
};

export default App;
