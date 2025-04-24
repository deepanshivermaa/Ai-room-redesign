import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export default clerkMiddleware((auth, req) => {
  const { userId } = auth();
  const url = req.nextUrl.clone();

  console.log("Middleware Triggered:", url.pathname);
  console.log("UserID:", userId);

  // ✅ If user is signed in and on /sign-in, redirect to /dashboard
  if (userId && url.pathname.startsWith("/sign-in")) {
    console.log("✅ Redirecting to /dashboard...");
    url.pathname = "/dashboard";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
