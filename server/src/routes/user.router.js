import { Router } from "express";
import chalk from "chalk";
import { auth } from "../middlewares/auth.js";
import { loginUser } from "../controllers/user.controller.js";

export const userRouter = Router();

userRouter.post("/login", async (req, res) => {
  try {
    const token = await loginUser(req.body.email, req.body.password);
    res.cookie("token", token, { httpOnly: true });
    res.json({ success: true, message: "User login" });
    console.log(chalk.green("User login"));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

userRouter.get("/logout", auth, async (req, res) => {
  try {
    const token = "";
    res.cookie("token", token, { httpOnly: true });
    res.json("User logout");
    console.log(chalk.green("User logout"));
  } catch (error) {
    res.status(500).json({ error: err.message });
  }
});
