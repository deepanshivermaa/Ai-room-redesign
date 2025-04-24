import OpenAI from "openai";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

// Load environment variables from .env file
dotenv.config({ path: path.resolve(process.cwd(), ".env") });

console.log("✅ OpenAI Test Script Started...");

// Check if API Key is loaded
if (!process.env.OPENAI_API_KEY) {
  console.error("❌ ERROR: OPENAI_API_KEY is missing! Check your .env file.");
  process.exit(1);
} else {
  console.log("🔑 API Key Loaded Successfully.");
}
