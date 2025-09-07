import express from "express";
import morgan from "morgan";
import routes from "./routes.js";
import logger from "./logger.js";

const app = express();

// middlewares
app.use(express.json());
app.use(
  morgan("combined", {
    stream: {
      write: (message) => logger.info(message.trim())
    }
  })
);

app.use("/", routes);

export default app;
