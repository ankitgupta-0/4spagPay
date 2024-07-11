import React from 'react';
import QRCodeScanner from './QRCodeScanner';
import './styles/QRCodeAndPay.css';

const QRCodeAndPay = () => {
  const handlePay = () => {
    // Add payment handling logic here
    alert('Payment initiated!');
  };

  return (
    <div className="qr-code-and-pay">
      <QRCodeScanner />
      <button className="pay-button" onClick={handlePay}>Pay</button>
      <footer className="payment-footer">
        <p>&copy; 2024 spagPay. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default QRCodeAndPay;
