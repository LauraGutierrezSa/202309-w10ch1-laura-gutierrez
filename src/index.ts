import morgan from "morgan";
import { notFound } from "./middleware/error/errorMiddleware.js";
import thingsRouter from "./features/things/router/thingsRouter.js";
import app from "./app.js";
import express from "express";
import PingController from "./features/ping/controller/PingController.js";

const pingController = new PingController();

app.use(express.json());
app.use(morgan("dev"));

app.use("/", pingController.getPong);
app.use("/things", thingsRouter);

app.use(notFound);
