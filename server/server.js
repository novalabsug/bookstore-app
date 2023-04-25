import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";

import dotenv from "dotenv";
import MongoClient from "./connection/conn.db.js";
import { logger, ErrorHandler } from "./middleware/middleware.js";
import router from "./router/router.js";
import { TryCatch } from "./utils/utils.js";

dotenv.config();

// environment variables
const PORT = process.env.PORT || 3500;

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cookieParser());
app.use(logger);

app.use(express.static("uploads"));
app.use("/uploads", express.static("uploads"));

const whitelist = ["http://localhost:3000", "http://127.0.0.1:3000"];

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

app.use("/", router);

app.use(ErrorHandler);

TryCatch(MongoClient);

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
