import React from 'react';
import About from './About';
import Home from './Home';
import Products from './Products';
import Navbar from './Navbar';
import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  
  
  
  return (
    <>
    <Navbar/>
     <div className="App">
      <Routes>
        <Route exact path="/home" element={<Home/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/products" element={<Products />}/>
      </Routes>
    </div>
    </>
    
   
  );
}

export default App;
