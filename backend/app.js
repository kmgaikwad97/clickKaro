const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

const errorMiddleware = require("./middleware/error");

app.use(express.json());

// Cookie-parser
app.use(cookieParser());

// Route Imports for Product
const product = require("./routes/productRoute");
app.use("/api/v1", product);

// Route Imports for User
const user = require("./routes/userRoute");
app.use("/api/v1", user);

// Middleware for Errors
app.use(errorMiddleware);

module.exports = app;
