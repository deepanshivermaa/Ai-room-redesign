"use client"; // Ensure it's a client component

import React, { useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import Header from "./_components/Header";

function DashboardLayout({ children }) {
  const { isSignedIn, isLoaded } = useUser();
  const router = useRouter();

  useEffect(() => {
    // ✅ Redirect to sign-in if not logged in
    if (isLoaded && !isSignedIn) {
      router.push("/sign-in");
    }
  }, [isSignedIn, isLoaded, router]);

  if (!isLoaded) return null; // Prevent flickering

  return (
    <div>
      <Header />
      <div className="pt-20 px-10 md:px-20 lg:px-40 xl:px-60">{children}</div>
    </div>
  );
}

export default DashboardLayout;
