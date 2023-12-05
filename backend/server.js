const express = require("express");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");
const cookieParser = require("cookie-parser");
const port = process.env.PORT || 5000;
const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use("/api/users", userRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
