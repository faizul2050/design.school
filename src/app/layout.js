import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/navbar"; 
import Footer from "@/component/footer";
import { HeroUIProvider } from "@heroui/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "DESIGN SCHOOL - Master Your Creative Skills",
  description: "A modern online learning platform for aspiring designers.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-white text-gray-900`}
      >
        {/* 2. Wrap with HeroUIProvider for UI components functionality */}
        <HeroUIProvider>
          {/* 3. Use Capitalized Tags for components */}
          <Navbar /> 
          
          {/* 4. Flexible main area to keep footer at the bottom */}
          <main className="flex-grow">
            {children}
          </main>
          
          <Footer />
        </HeroUIProvider>
      </body>
    </html>
  );
}