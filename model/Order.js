// models/Order.js
import mongoose from 'mongoose';

const indianStates = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
  "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
  "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan",
  "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh",
  "Uttarakhand", "West Bengal"
];

const orderSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true
  },
  contactNumber: {
    type: String,
    required: true
  },
  postalCode: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  landmark: {
    type: String
  },
  state: {
    type: String,
    enum: indianStates,
    required: true
  },
  location: {
    type: String
  }
}, { timestamps: true });

const Order = mongoose.model('Order', orderSchema);

export default Order;
