import React from 'react';
import './assets/css/style.css'; 
import Navbar from './components/Navbar';
import Home from './components/Home';
import Delivery from './components/Delivery';
import Categories from './components/Categories';
import Menu from "./components/Menu";
import Offers from "./components/Offers";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Delivery />
      <Categories />
      <Menu />
      <Offers />
      <Footer />
     
    </div>
  );
}

export default App;

