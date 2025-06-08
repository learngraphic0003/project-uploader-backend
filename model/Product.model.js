import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    category: {
      type: String,
      enum: ["men", "women", "children"],
      required: true,
    },
    size: [
      {
        type: String,
        enum: ["xl", "l", "m", "xxl"],
      },
    ],

    image: { type: String },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);

export default Product;
