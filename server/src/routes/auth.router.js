import { Router } from "express";
import { auth } from "../middlewares/auth.js";

export const authRouter = Router();

authRouter.get("/me", auth, async (req, res) => {
  const user = req.user;

  res.json({ success: true, message: "User is here!", user: user.email });
});
