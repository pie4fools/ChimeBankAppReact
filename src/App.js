import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services/Services';
import Products from './pages/Products/Products';
import SignUp from './pages/SignUp/SignUp';
import Footerpage from './pages/Footerpage/Footerpage';
import Loginpage from './pages/Login/Loginpage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/products' element={<Products />} />
        <Route path='/login' element={<Loginpage />} />
        <Route path='/sign-up' element={<SignUp />} />
      </Routes>
      <Footerpage />
    </Router>
  );
}

export default App;
