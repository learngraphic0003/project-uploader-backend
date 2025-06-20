import bcrypt from "bcrypt";
import User from "../model/user.model.js";
import jwt from "jsonwebtoken";

import dotenv from "dotenv";
dotenv.config();

export const register = async (req, res) => {
  try {
    const { email, password,username} = req.body;

    if (await User.findOne({ email })) {
      return res.status(400).json({ message: "User already exists" });
    }

    

    const hashedpassword = await bcrypt.hash(password, 10);

    const user = await new User({
      email,
      password: hashedpassword,
     username
     
    }).save();

    res.status(202).json({ message: "User registered successfully", user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { userid: user.id, role: user.role },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );
    res.json({ token, user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
