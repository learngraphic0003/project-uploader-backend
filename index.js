import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import userRoutes from "./routes/User.route.js"; 
import router from "./routes/project.routes.js"; 

dotenv.config();
connectDb();

const app = express();
app.use(express.json());


app.use("/api/auth", userRoutes); 
app.use("/api/project", router); 

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
