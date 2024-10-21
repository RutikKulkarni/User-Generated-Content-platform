import mongoose from "mongoose";
import app from "./app";
import { config } from "./config/config";

mongoose
  .connect(config.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");

    app.listen(config.PORT, () =>
      console.log(`Server is running at ${config.PORT}`)
    );
  })
  .catch((err) => console.log("Failed to connect DB", err.message));
