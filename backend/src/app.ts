import express, { Application } from "express";
import cors from "cors";

import userAuthSystemRouter from "./router";

const app: Application = express();

app.use(express.json());
app.use(cors());
app.use("/api", userAuthSystemRouter);

export default app;
