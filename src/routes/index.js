import express from "express";
import { testEnvVariable } from "../settings";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: testEnvVariable });
});

export default router;
