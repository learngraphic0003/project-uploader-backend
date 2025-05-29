import jwt from "jsonwebtoken";

const auth = (req, res, next) => {

  const token = req.header("Authorization");

  if (!token) return res.status(401).json({ message: "Access Denied" });

  try {
    const verified = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET); 
    req.user = verified; 
    next(); 
  } catch (error) {
    res.status(400).json({ message: "Invalid Token" });
  }
};

export default auth;


export const authorizeAdmin = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Access denied. Admins only." });
  }
  next();
};
