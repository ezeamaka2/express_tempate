import express from "express";
import { indexPage } from "../controllers";

const router = express.Router();

router.get("/", indexPage);

export default router;
