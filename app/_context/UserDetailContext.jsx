"use client";
import { createContext, useState, useEffect } from "react";

export const UserDetailContext = createContext();

export const UserDetailProvider = ({ children }) => {
  const [userDetail, setUserDetail] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const res = await fetch("/api/user"); // Replace with your actual API route
        const data = await res.json();
        setUserDetail(data);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchUserDetails();
  }, []);

  return (
    <UserDetailContext.Provider value={{ userDetail, setUserDetail }}>
      {children}
    </UserDetailContext.Provider>
  );
};
