import React, { useState } from 'react';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
//import CartPage from './pages/CartPage';
//import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';
import './styles.css'; // Ensure you import your stylesheet


const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      //case 'cart':
        //return <CartPage />;
      //case 'contact':
        //return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <>
      <NavBar changePage={setCurrentPage} />
      {renderPage()}
      <Footer />
    </>
  );
};

export default App;