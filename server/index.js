import chalk from "chalk";
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";

import { requestRouter } from "./src/routes/request.router.js";
import { userRouter } from "./src/routes/user.router.js";
import { authRouter } from "./src/routes/auth.router.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use("/request", requestRouter);
app.use("/user", userRouter);
app.use("/auth", authRouter);

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(chalk.green(`Server start on port ${PORT}!`));
    });
  })
  .catch((err) => {
    console.error(err);
  });
