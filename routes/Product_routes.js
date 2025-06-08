import express from "express";
import {
  addProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct
} from "../controllers/Product.controller.js";

import uploadAvatar from "../middleware/multer.middleware.js";

import { auth, authorizeAdmin } from "../middleware/auth.middleware.js"

const router = express.Router();


router.post("/add",auth,authorizeAdmin ,uploadAvatar, addProduct);


router.get("/all", getAllProducts);


router.get("/:id", getProductById);

router.put("/:id",authorizeAdmin, updateProduct);


router.delete("/:id",authorizeAdmin, deleteProduct);

export default router;
