import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import userRouter from "./src/routes/auth.js";
import myUsers from "./src/routes/userRoutes.js";
const app = express();

app.use(express.json());
app.use(cors());
dotenv.config();
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/auth", userRouter);
app.use("/api", myUsers);

const PORT = process.env.PORT;
const url = process.env.CONNECTION_URL.replace(
  "<password>",
  process.env.PASSWORD
);

mongoose
  .connect(url)
  .then(() => console.log("connected"))
  .catch(() => console.log("not connected"));

app.listen(PORT, () => {
  console.log("server is running");
});
