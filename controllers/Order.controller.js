// controllers/orderController.js
import Order from '../model/Order.js';

export const placeOrder = async (req, res) => {
  const {
    fullName,
    contactNumber,
    postalCode,
    address,
    landmark,
    state,
    location
  } = req.body;

  if (
    !fullName ||
    !contactNumber ||
    !postalCode ||
    !address ||
   
    !state 
  ) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    const newOrder = new Order({
      fullName,
      contactNumber,
      postalCode,
      address,
      landmark,
      state,
      location
    });

    await newOrder.save();

    res.status(201).json({
      message: '✅ Order placed successfully!',
      order: newOrder
    });
  } catch (error) {
    console.error('❌ Failed to save order:', error);
    res.status(500).json({ message: 'Server error, try again later.' });
  }
};
