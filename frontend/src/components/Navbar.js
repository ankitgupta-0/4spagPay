import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="/">Dashboard</a>
      <a href="/payment">Payment</a>
      <a href="/qrcode">QR Code</a>
      {/* <a href="/QRCode">QR Code Scanner</a> */}
    </nav>
  );
};

export default Navbar;
