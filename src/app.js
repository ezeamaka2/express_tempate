import express from "express";
import logger from "morgan";
import cookieParser from "cookie-parser";

// Routes
import indexRoute from "./routes/index";

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Initialize routes
app.use("/v1", indexRoute);

export default app;
