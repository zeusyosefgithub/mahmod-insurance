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
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
      <link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&family=Secular+One&display=swap" rel="stylesheet"></link>
        <div className="secular-one-regular">
          <ContactContext.Provider value={{ contactName, setContactName }}>
            <NextUIProvider>
              <NavBar />
              {children}
            </NextUIProvider>
          </ContactContext.Provider>
        </div>
      </body>
    </html>
  );
}
