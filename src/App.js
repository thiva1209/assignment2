import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/pages/home';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
         
          <Route path='/' element={<Home />} />
          <Route path='/contactus' element={<ContactUs />} />
          <Route path='/about-us' element={<AboutUs />} />


          
        </Routes>
      </Router>
    </>
  );
}

export default App;

