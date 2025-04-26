import type React from "react";
import type { Metadata } from "next";
import "@fontsource/inter"; // Import local Inter font
import "./globals.css";
import QueryProvider from "@/components/QueryProvider";
import { AuthProvider } from "@/context/auth-context";

// const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Custom Debit Card Designer",
  description: "Design your own personalized debit card",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-inter">
        <AuthProvider>
          <QueryProvider>{children}</QueryProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
