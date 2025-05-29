import express from "express";
import {
  addProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct
} from "../controllers/product.controller.js";



const router = express.Router();


router.post("/add", addProduct);


router.get("/all", getAllProducts);


router.get("/:id", getProductById);

router.put("/:id", updateProduct);


router.delete("/:id", deleteProduct);

export default router;
