"use client";
import { ThemeProvider } from "next-themes";
import Navbar from "./Navbar";
export default function ThemeContext({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="white" enableSystem>
      {children}
    </ThemeProvider>
  );
}
