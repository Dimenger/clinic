import chalk from "chalk";
import { Router } from "express";
import { auth } from "../middlewares/auth.js";
import { addRequest, getRequests } from "../controllers/request.controllers.js";

export const requestRouter = Router();

requestRouter.post("/", async (req, res) => {
  try {
    await addRequest(req.body);
    console.log(chalk.blue("Request was added!"));
    res.json({ message: "Request was added!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

requestRouter.get("/requests", auth, async (req, res) => {
  try {
    res.json(await getRequests());
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
