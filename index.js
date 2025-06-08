import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import userRoutes from "./routes/User_route.js"; 
import router from "./routes/Product_routes.js"
import OrderRoutes from "./routes/Order_routes.js";
import cors from "cors"; 
dotenv.config();
connectDb();
const app = express();

app.use(cors());



app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", userRoutes); 
app.use("/api/product", router); 
app.use("/api/Order",OrderRoutes)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
