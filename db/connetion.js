import mongoose from "mongoose";
import chalk from "chalk";

const MONGODB_URI = process.env.PROD_MONGODB || "mongodb://127.0.0.1:27017/Football-api"


mongoose.connect(MONGODB_URI)

export default mongoose.connection;
