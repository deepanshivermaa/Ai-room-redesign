import OpenAI from "openai";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

console.log("✅ OpenAI Test Script Started...");

// Check if API Key is loaded
if (!process.env.OPENAI_API_KEY) {
  console.error("❌ ERROR: OPENAI_API_KEY is missing! Check your .env file.");
  process.exit(1);
} else {
  console.log("🔑 API Key Loaded Successfully.");
}

// Initialize OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Function to test OpenAI Image Generation
async function testOpenAI() {
  try {
    console.log("🚀 Requesting Image from OpenAI...");

    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt: "A futuristic smart home interior",
      n: 1,
      size: "1024x1024",
    });

    console.log("✅ OpenAI Response:", response);
  } catch (error) {
    console.error("❌ OpenAI Image Generation Error:", error);
  }
}

testOpenAI();
