// import React, { useState } from 'react';
// import axios from 'axios';
// // import './styles/Payment.css';

// const Payment = () => {
//   const [amount, setAmount] = useState(0);
//   const [paymentId, setPaymentId] = useState('');

//   const handlePayment = async () => {
//     const res = await axios.post('/api/payment/create-order', { amount, user: 'user_id' });
//     const { order } = res.data;

//     const options = {
//       key: process.env.RAZORPAY_KEY_ID,
//       amount: order.amount,
//       currency: order.currency,
//       name: 'spagPay',
//       description: 'Test Transaction',
//       order_id: order.id,
//       handler: async (response) => {
//         const data = {
//           razorpay_payment_id: response.razorpay_payment_id,
//           razorpay_order_id: response.razorpay_order_id,
//           razorpay_signature: response.razorpay_signature,
//         };

//         const verifyUrl = '/api/payment/verify-payment';
//         const verifyRes = await axios.post(verifyUrl, data);
//         setPaymentId(verifyRes.data.paymentId);
//       },
//       prefill: {
//         name: 'User Name',
//         email: 'user@example.com',
//         contact: '9999999999',
//       },
//       notes: {
//         address: 'Razorpay Corporate Office',
//       },
//       theme: {
//         color: '#3399cc',
//       },
//     };

//     const rzp1 = new window.Razorpay(options);
//     rzp1.open();
//   };

//   return (
//     <div className="payment-container">
//       <h2>Make a Payment</h2>
//       <input
//         type="number"
//         placeholder="Enter Amount"
//         value={amount}
//         onChange={(e) => setAmount(e.target.value)}
//       />
//       <button onClick={handlePayment}>Pay Now</button>
//       {paymentId && <p>Payment successful! Payment ID: {paymentId}</p>}
//     </div>
//   );
// };

// export default Payment;




import React from 'react';
import './styles/payment.css'; // Add a CSS file for styling
// import { FaLock } from 'react-icons/fa'; // Import an icon for security representation

const Payment = () => {
  return (
    <div className="payment-page">
      <header className="payment-header">
        <h1>spagPay Payment</h1>
      </header>

      <div className="payment-container">
        {/* <section className="payment-summary">
          <h2>Order Summary</h2>
          <ul>
            <li>Item 1: $10.00</li>
            <li>Item 2: $20.00</li>
            <li>Tax: $3.00</li>
            <li>Total: $33.00</li>
          </ul>
        </section> */}

        <section className="payment-info">
          <h2>Payment Information</h2>
          <form className="payment-form">
            <div className="form-group">
              <label htmlFor="cardNumber">Card Number</label>
              <input type="text" id="cardNumber" name="cardNumber" required />
            </div>
            <div className="form-group">
              <label htmlFor="cardName">Name on Card</label>
              <input type="text" id="cardName" name="cardName" required />
            </div>
            <div className="form-group">
              <label htmlFor="expiryDate">Expiry Date</label>
              <input type="text" id="expiryDate" name="expiryDate" required />
            </div>
            <div className="form-group">
              <label htmlFor="cvv">CVV</label>
              <input type="text" id="cvv" name="cvv" required />
            </div>
          </form>
        </section>

        {/* <section className="billing-info">
          <h2>Billing Information</h2>
          <form className="billing-form">
            <div className="form-group">
              <label htmlFor="billingAddress">Billing Address</label>
              <input type="text" id="billingAddress" name="billingAddress" required />
            </div>
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input type="text" id="city" name="city" required />
            </div>
            <div className="form-group">
              <label htmlFor="state">State</label>
              <input type="text" id="state" name="state" required />
            </div>
            <div className="form-group">
              <label htmlFor="zip">ZIP Code</label>
              <input type="text" id="zip" name="zip" required />
            </div>
          </form>
        </section> */}

        <section className="payment-security">
          {/* <p><FaLock /> Your payment information is secure.</p> */}
        </section>

        <button className="submit-payment-button">Submit Payment</button>
      </div>

      <footer className="payment-footer">
        <p>&copy; 2024 spagPay. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Payment;
