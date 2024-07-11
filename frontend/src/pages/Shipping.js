// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Shipping Policy - spagPay</title>
//     <style>
//         body {
//             font-family: Arial, sans-serif;
//             line-height: 1.6;
//             margin: 20px;
//         }
//         h1, h2 {
//             color: #333;
//         }
//         p {
//             margin: 10px 0;
//         }
//     </style>



import React from 'react';
import '../components/styles/pages.css';

const shipping = () => {
  return (
    <div>
    <h1>Shipping Policy</h1>

    <p>At spagPay, our services are delivered digitally, and there are no physical products to ship. However, we want to ensure you understand how our order processing and delivery times work.</p>

    <h2>Order Processing Times</h2>
    <p>All service orders are processed within 1 to 2 business days (excluding weekends and holidays) after receiving your order confirmation email. You will receive another notification when your service has been fully set up and is ready for use.</p>

    <h2>Potential Delays</h2>
    <p>Please note that potential delays can occur due to high volumes of orders or technical issues that are outside of our control. We strive to minimize these delays and will keep you informed every step of the way.</p>

    <h2>Service Delivery</h2>
    <p>Our services are delivered digitally, and there is no physical shipping involved. Once your order is processed, you will receive instructions on how to access and utilize the purchased services.</p>

    <h2>Local Service Availability</h2>
    <p>For customers within our local service area, we offer personalized setup and support services. Free local delivery of these services is available for orders over ₹1000 within Mumbai, Maharashtra. For orders under ₹1000, we charge ₹50 for local service delivery.</p>

    <p>Deliveries are made from 9 AM to 5 PM on weekdays. We will contact you via text message or email with the information you provided at checkout to notify you on the day of our visit.</p>

    <h2>International Availability</h2>
    <p>Our digital services are available internationally, and we offer support to the following countries: [list of countries]. At this time, we do not offer in-person setup services internationally.</p>

    <p>Your order may be subject to local regulations and restrictions. spagPay is not responsible for any compliance issues that may arise in your country, and it is your responsibility to ensure our services can be legally used.</p>

    <h2>Contact Information</h2>
    <p>If you have any questions or need further assistance regarding your order, please contact us at <a href="mailto:forankitgupta@gmail.com">forankitgupta@gmail.com</a> or by mail at:</p>

    <p>Address: 1/7 Katemanivali Kalyan, Thane, Maharshtra, India, 421306</p>
    <div>
    <footer className="payment-footer">
        <p>&copy; 2024 spagPay. All rights reserved.</p>
      </footer>
    </div>
    </div>
  );
};

export default shipping;