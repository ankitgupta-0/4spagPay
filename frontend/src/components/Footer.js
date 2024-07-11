import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Footer.css';

const Footer = () => {
  return (
    <div>
    <nav className="footer">
        <a href="/terms">Terms</a>
        <a href="/privacy">Privacy</a>
        <a href="/contact">Contact</a>
        <a href="/refund">Refund</a>
        <a href="/shipping">Shipping</a>
        <a href="/about">About</a> <br />
    </nav>
    <div>
        <footer className="payment-footer">
        <p>&copy; 2024 spagPay. All rights reserved.</p>
      </footer>
      </div>
    </div>
  );
};

export default Footer;
