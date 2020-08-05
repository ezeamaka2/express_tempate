const express = require("express");
const logger = require("morgan");
const cookieParser = require("cookie-parser");

// Routes
const indexRoute = require("./routes/index");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Initialize routes
app.use("/v1", indexRoute);

module.exports = app;
