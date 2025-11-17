import chalk from "chalk";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { User } from "../models/User.js";

export const loginUser = async (email, password) => {
  try {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("Email is not found!");
    }
    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      throw new Error("Wrong password!");
    }
    console.log(chalk.green("User login!"));
    return jwt.sign({ email }, process.env.SECRET, { expiresIn: "5d" });
  } catch (error) {
    throw error; /* выкинет ошибку наружу*/
  }
};
