import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";

import routes from "./router/Routes.js";
import adminRoutes from "./router/admin/Routes.js";
import { logger } from "./middleware/logger.js";
import ErrorHandler from "./middleware/ErrorHandler.js";
import dotenv from "dotenv";
import { TryCatch } from "./utils/TryCatch.js";
import MongoClient from "./connection/conn.db.js";

dotenv.config();

// environment variables
const PORT = process.env.PORT || 3500;

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cookieParser());
app.use(logger);

const whitelist = [
  "http://localhost:3000",
  "http://127.0.0.1:3000",
  "https://rallencontractor.netlify.app/",
  "https://rallencontractor.co",
  "rallencontractor.co",
  "rallencontractor.netlify.app/",
];

const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Access denied"));
    }
  },
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use("/", routes);
app.use("/admin", adminRoutes);

app.use(ErrorHandler);

TryCatch(MongoClient);

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
