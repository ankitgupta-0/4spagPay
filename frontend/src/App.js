// import './App.css';

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Payment from './components/Payment';
import QRCodeAndPay from './components/QRCodeAndPay';
import QRCodeScanner from './components/QRCodeScanner';
import Dashboard from './components/Dashboard';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Contact from './pages/Contact';
import Refund from './pages/Refund';
import Shipping from './pages/Shipping';
import About from './pages/About';
import Footer from './components/Footer';

function App (){
  return (
    <Router>
      <div>
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/Payment" element={<Payment />} />
            <Route path="/qrcode" element={<QRCodeAndPay />} />
            <Route path="/Terms" element={<Terms />} />
            <Route path="/Privacy" element={<Privacy />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Refund" element={<Refund />} />
            <Route path="/shipping" element={<Shipping />} />
            <Route path="/about" element={<About />} />
            <Route path="/QRCode" element={<QRCodeScanner />} />
          </Routes>
        </div>
        {/* <Footer /> */}
        {window.location.pathname === '/' && <Footer />}
      </div>
    </Router>
  );
};

export default App;

