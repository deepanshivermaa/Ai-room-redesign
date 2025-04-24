"use client";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { UserDetailContext } from "./_context/UserDetailContext";

function Provider({ children }) { 
  const { user } = useUser();
  const [userDetail, setUserDetail] = useState(null); // Start as null, not empty array

  useEffect(() => {
    if (user) verifyUser(); // Only call API if user exists
  }, [user]);

  /**
   * Verify User
   */
  const verifyUser = async () => {
    try {
      const response = await axios.post("/api/verify-user", { user });
      setUserDetail(response.data.result); // Ensure response has expected structure
    } catch (error) {
      console.error("Error verifying user:", error);
    }
  };

  return (
    <UserDetailContext.Provider value={{ userDetail, setUserDetail }}>
      {children}
    </UserDetailContext.Provider>
  );
}

export default Provider;
