import express, { json } from "express";
import morgan from "morgan";
import cors from "cors";
import AppError from "./utils/AppError.js";
import globalErrorHandler from "./controllers/errorController.js";
import songRouter from "./Routes/songRouter.js";
const app = express();
app.use(cors());

// Development Logging
if (process.env.NODE_ENV === "development") app.use(morgan("dev"));

app.use(json());

app.use("/api/v1/", songRouter);

app.options("*", (req, res) => {
  res.status(200).send();
});

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

export default app;
