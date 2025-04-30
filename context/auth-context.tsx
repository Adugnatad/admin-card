"use client";

import type React from "react";
import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { updateAuthorizationHeader } from "@/lib/axiosInstance";

type AuthContextType = {
  user: any;
  logout: () => void;
  setUser: any;
  isAuthenticated: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState(() => {
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem("user");
      return storedUser ? JSON.parse(storedUser) : null;
    }
    return null;
  });

  const router = useRouter();

  // Check if user is logged in on initial load
  useEffect(() => {
    if (user) {
      try {
        updateAuthorizationHeader(user.access);
      } catch (error) {
        console.error("Failed to update authorization header:", error);
        setUser(null);
        localStorage.removeItem("user");
      }
    }
  }, [user]);

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    router.push("/login");
  };

  // console.log("AuthProvider user:", user);

  const value = {
    user,
    logout,
    setUser,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
