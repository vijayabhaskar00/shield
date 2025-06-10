const express = require('express');
const crypto = require('crypto');
const app = express();

app.use(express.json());

app.post('/api/verify-payment', (req, res) => {
  const {
    razorpay_order_id,
    razorpay_payment_id,
    razorpay_signature,
    user_data
  } = req.body;

  // Create signature
  const body = razorpay_order_id + "|" + razorpay_payment_id;
  const expectedSignature = crypto
    .createHmac('sha256', process.env.VITE_RAZORPAY_KEY_SECRET)
    .update(body.toString())
    .digest('hex');

  if (expectedSignature === razorpay_signature) {
    // Payment is verified
    // Store user data and policy information in database
    console.log('Payment verified successfully');
    
    // Send email confirmation
    // Generate policy document
    // Update database
    
    res.json({ success: true, message: 'Payment verified' });
  } else {
    res.status(400).json({ success: false, message: 'Payment verification failed' });
  }
});

app.listen(3001, () => {
  console.log('Server running on port 3001');
});