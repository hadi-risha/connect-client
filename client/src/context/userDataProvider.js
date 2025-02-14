import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
// Define the UserData interface
// interface UserData {
//   id: string;
//   email: string;
//   firstName: string;
//   lastName: string;
//   role: string;
//   profilePicUrl?: string | null;
//   profilePicKey?: string | null;
//   country?: string;
//   education?: string;
//   about?: string;
//   occupation?: string;
//   currentInstitution?: string;
//   teachingViews?: string;
//   achievements?: string[];
//   experience?: string[];
// }

// Create context
const UserDataContext = createContext();

// Create provider component
export const UserDataProvider= ({ children }) => {
  const [userData, setUserData] = useState(null);
  const userRole = localStorage.getItem("userRole");

  return (
    <UserDataContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserDataContext.Provider>
  );
};

// Hook to use UserData context
export const useUserData = () => {
  const context = useContext(UserDataContext);
  if (!context) {
    throw new Error("useUserData must be used within a UserDataProvider");
  }
  return context;
};