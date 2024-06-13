import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connect to mongodb");
  })
  .catch(() => {
    console.log("Not connected to mongodb");
  });
