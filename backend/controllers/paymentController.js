const Razorpay = require('razorpay');
const Transaction = require('../models/Transaction');
const { razorpay_key_id, razorpay_key_secret } = require('../config/keys');

const razorpay = new Razorpay({
  key_id: razorpay_key_id,
  key_secret: razorpay_key_secret,
});

exports.createOrder = async (req, res) => {
  try {
    const { amount, user } = req.body;
    const options = {
      amount: amount * 100, // amount in the smallest currency unit
      currency: 'INR',
      receipt: `receipt_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);
    const transaction = new Transaction({
      user,
      amount,
      status: 'pending',
    });

    await transaction.save();
    res.json({ order, transaction });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.verifyPayment = async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

    const shasum = crypto.createHmac('sha256', razorpay_key_secret);
    shasum.update(`${razorpay_order_id}|${razorpay_payment_id}`);
    const digest = shasum.digest('hex');

    if (digest !== razorpay_signature) {
      return res.status(400).json({ error: 'Transaction not legit!' });
    }

    const transaction = await Transaction.findOneAndUpdate(
      { 'order.id': razorpay_order_id },
      { status: 'completed' },
      { new: true }
    );

    res.json(transaction);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
