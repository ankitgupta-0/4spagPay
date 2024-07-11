
    // <title>About Us - spagPay</title>
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
    //     .team-member {
    //         margin-bottom: 20px;
    //     }
    //     .team-member h3 {
    //         margin-bottom: 5px;
    //     }
    // </style>




import React from 'react';
import '../components/styles/pages.css';

const About = () => {
  return (
    <div>
    <h1>About spagPay</h1>
    <p>Welcome to spagPay, your reliable partner for secure and efficient payment solutions. Our mission is to revolutionize the payment industry by providing top-notch services that prioritize security, convenience, and user experience.</p>

    <h2>Our Mission</h2>
    <p>At spagPay, we strive to make digital payments seamless and secure for businesses and consumers alike. Our goal is to empower businesses to handle transactions effortlessly while ensuring the highest level of security and customer satisfaction.</p>

    <h2>Our Team</h2>
    <div class="team-member">
        <h3>Ankit Indresh Gupta</h3>
        <p>Founder & CEO</p>
        <p>Ankit is the visionary behind spagPay. With a passion for technology and innovation, he leads the team with a focus on creating the best payment solutions in the industry.</p>
    </div>
    <div class="team-member">
        <h3>Sakshi Pandya</h3>
        <p>Co Founder</p>
        <p>[Brief description of the team member's role and background]</p>
    </div>
    

    <h2>Our Services</h2>
    <ul>
        <li>Payment Gateway Integration</li>
        <li>QR Code Payments</li>
        <li>Face Recognition for Secure Payments</li>
        <li>PIN Verification</li>
        <li>Chatbot for Customer Support</li>
        <li>Dashboard for Transaction Management</li>
        <li>Multiple Payment Methods: Card, UPI, Bank Transfer</li>
    </ul>
    <footer className="payment-footer">
        <p>&copy; 2024 spagPay. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default About;