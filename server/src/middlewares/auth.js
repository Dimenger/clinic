import jwt from "jsonwebtoken";
import { User } from "../models/User.js";

export const auth = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }

    const verifyResult = jwt.verify(token, process.env.SECRET);
    const user = await User.findOne({ email: verifyResult.email });
    if (!user) {
      res.json({ message: "Authenticated user not found!" });
      return;
    }

    req.user = user;

    next();
  } catch (error) {
    return res.status(401).json({ message: "Not authorized" });
  }
};
