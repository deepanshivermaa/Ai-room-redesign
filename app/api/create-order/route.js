// app/api/create-order/route.js
import Razorpay from "razorpay";

export async function POST(req) {
  const body = await req.json();

  const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  });

  const options = {
    amount: body.amount * 100, // amount in paise (₹1 = 100 paise)
    currency: "INR",
    receipt: `receipt_order_${Math.floor(Math.random() * 10000)}`,
  };

  try {
    const order = await razorpay.orders.create(options);
    return Response.json(order);
  } catch (err) {
    console.error("Error creating Razorpay order:", err);
    return new Response("Error", { status: 500 });
  }
}
