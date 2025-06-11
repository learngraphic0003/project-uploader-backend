import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import userRoutes from "./routes/User_route.js"; 
import router from "./routes/Product_routes.js"
import OrderRoutes from "./routes/Order_routes.js";
import cors from "cors"; 
import Razorpay from "razorpay"
dotenv.config();
connectDb();
const app = express();

app.use(cors());



app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET
});

app.post('/create-order', async (req, res) => {
  const { price } = req.body;

  const options = {
    amount: price ,
    currency: 'INR',
    receipt: `receipt_order_${Math.floor(Math.random() * 10000)}`
  };

  try {
    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (error) {
    res.status(500).send(error);
  }
});


app.use("/api/auth", userRoutes); 
app.use("/api/product", router); 
app.use("/api/Order",OrderRoutes)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
