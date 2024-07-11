
    // <style>
    //     body {
    //         font-family: Arial, sans-serif;
    //         line-height: 1.6;
    //         margin: 20px;
    //     }
    //     h1, h2 {
    //         color: #333;
    //     }
    //     p {
    //         margin: 10px 0;
    //     }
    // </style>




import React from 'react';
import '../components/styles/pages.css';

const Contact = () => {
  return (
    <div>
        <h1>Contact Us</h1>
    <p>If you have any questions or need further assistance, feel free to reach out to us. We are here to help you with all your payment needs.</p>

    <h2>Contact Information</h2>
    <p>Email: <a href="mailto:forankitgupta@gmail.com">forankitgupta@gmail.com</a></p>
    <p>Phone: +91 9028432605</p>
    <p>Address: 1/7 Katemanivali Kalyan, Thane, Maharshtra, India, 421306</p>

    <h2>Business Hours</h2>
    <p>Monday - Friday: 9 AM - 5 PM</p>
    <p>Saturday - Sunday: Closed</p>
    <footer className="payment-footer">
        <p>&copy; 2024 spagPay. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Contact;