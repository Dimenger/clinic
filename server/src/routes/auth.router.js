import { Router } from "express";
import { auth } from "../middlewares/auth.js";

export const authRouter = Router();

authRouter.get("/me", auth, async (req, res) => {
  // req.user — это результат jwt.verify
  res.json({ authorized: false });
});
