import { storage } from "@/app/config/firebaseConfig";
import { getDownloadURL, uploadString, ref } from "firebase/storage";
import { NextResponse } from "next/server";
import Replicate from "replicate";
import axios from "axios";
import { AiGeneratedImage } from "@/app/config/schema";
import { db } from "@/app/config/db"; // ✅ ADD THIS IMPORT

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

export async function POST(req) {
  try {
    const { imageUrl, roomType, designType, additionalReq, userEmail } = await req.json();

    if (!imageUrl || !roomType || !designType) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const prompt = `A ${roomType} with a ${designType} style interior ${additionalReq || ""}`;
    const input = {
      image: imageUrl,
      prompt,
    };

    const output = await replicate.run(
      "adirik/interior-design:76604baddc85b1b4616e1c6475eca080da339c8875bd4996705440484a6eac38",
      { input }
    );

    const resultImageUrl = Array.isArray(output) ? output[0] : output;
    if (!resultImageUrl) {
      return NextResponse.json({ error: "Failed to generate image" }, { status: 500 });
    }

    const base64Image = await convertImageToBase64(resultImageUrl);
    const fileName = `${Date.now()}.png`;
    const storageRef = ref(storage, `room-redesign/${fileName}`);
    await uploadString(storageRef, base64Image, "data_url");
    const downloadUrl = await getDownloadURL(storageRef);

    // ✅ Save to your database
    const dbResult = await db.insert(AiGeneratedImage).values({
      roomType,
      designType,
      orgImage: imageUrl,
      aiImage: downloadUrl,
      userEmail: userEmail, // You can fill this later with user info
    }).returning({ id: AiGeneratedImage.id });

    console.log(dbResult);
    return NextResponse.json({ success: true, result: downloadUrl});

  } catch (error) {
    console.error("Server Error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}

async function convertImageToBase64(imageUrl) {
  const response = await axios.get(imageUrl, { responseType: "arraybuffer" });
  const base64 = Buffer.from(response.data).toString("base64");
  return "data:image/png;base64," + base64;
}
