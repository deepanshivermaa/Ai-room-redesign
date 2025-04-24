require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// 🚀 API Endpoint to Process Image
app.post("/api/redesign-room", async (req, res) => {
  try {
    const { imageUrl, roomType, designType } = req.body;

    if (!imageUrl || !roomType || !designType) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    console.log("Received Data:", { imageUrl, roomType, designType });

    // Here, you can call your AI model or image processing API.
    // For now, let's return a success response.
    
    res.json({ success: true, message: "Image processed successfully!" });

  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: "Server error" });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
