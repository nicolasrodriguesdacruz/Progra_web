import React from 'react';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage'; 
//import CartPage from './pages/CartPage';
//import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';
import './styles.css'; 

const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} /> {/* Set HomePage as the default */}
        {/* <Route path="/carrito" component={CartPage} />*/}
        {/* <Route path="/contacto" component={ContactPage} />*/}
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;