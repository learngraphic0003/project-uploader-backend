import express from "express";

import { placeOrder } from "../controllers/Order.controller.js";
import { auth } from "../middleware/auth.middleware.js";



const OrderRoutes = express.Router();

OrderRoutes.post("/placeOrder",auth,placeOrder );



export default OrderRoutes;
