"use client";

import { SignIn } from "@clerk/nextjs";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";

export default function Page() {
  const { isSignedIn, isLoaded } = useUser();
  const router = useRouter();

  useEffect(() => {
    console.log("✅ Clerk Loaded:", isLoaded);
    console.log("🔹 User Signed In:", isSignedIn);

    if (isLoaded && isSignedIn) {
      console.log("🚀 Redirecting to home...");
      router.push("/"); // Redirecting to localhost:3000
    }
  }, [isSignedIn, isLoaded, router]);

  return (
    <div className="flex justify-center items-center h-screen">
      <SignIn forceRedirectUrl="/" /> {/* Redirects to the home page */}
    </div>
  );
}
