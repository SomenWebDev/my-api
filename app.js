const express = require("express");
const router = require("./src/routes/api");

const app = express();

// security middleware

const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");

const hpp = require("hpp");
const clean = require("xss-clean");
const cors = require("cors");

// security middleware implement

app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(hpp());
app.use(clean());
app.use(cors());

// Request rate limiting.

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
});

app.use("/api/v1", router);

app.use("*", (req, res) => {
  res.status(404).json({ status: "failed", data: "not found" });
});

module.exports = app;
