import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const devDbUrl = process.env.DEV_DB_URL;
const prodDbUrl = process.env.PRODUCTION_DB_URL;

const MongoClient = mongoose.connect(prodDbUrl);

export default MongoClient;
