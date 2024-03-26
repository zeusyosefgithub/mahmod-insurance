'use client';
import { Inter } from "next/font/google";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import NavBar from "./Components/NavBar";
import { useState } from "react";
import { AuthContextProvider } from "./Auth/AuthContext";
import CheckAuth from "./Auth/CheckAuth";

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

          <AuthContextProvider>
            {/* <NextUIProvider>
              <NavBar />
              {children}
            </NextUIProvider> */}
            <CheckAuth children={children}/>
          </AuthContextProvider>



        </div>
      </body>
    </html>
  );
}
