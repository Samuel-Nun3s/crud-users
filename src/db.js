import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGO_URL_CONNECT = process.env.MONGO_URL_CONNECT;

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URL_CONNECT);
    console.log("✅ Conectado ao MongoDB!");
  } catch (err) {
    console.error("❌ Erro ao conectar:", err);
    process.exit(1);
  }
};
