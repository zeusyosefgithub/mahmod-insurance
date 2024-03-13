'use client';
import { Inter } from "next/font/google";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import NavBar from "./Components/NavBar";
import ContactContext from "./Components/ContactContext";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {

  const [contactName, setContactName] = useState(null);

  return (
    <html lang="en">
      <body className={inter.className}>
        <ContactContext.Provider value={{ contactName, setContactName }}>
          <NextUIProvider>
            <NavBar />
            {children}
          </NextUIProvider>
        </ContactContext.Provider>
      </body>
    </html>
  );
}
