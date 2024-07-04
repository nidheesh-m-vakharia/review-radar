import { Space_Mono } from "next/font/google";
import "./globals.css";

const inter = Space_Mono({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Review Radar",
  description: "Review Radar is a tool to help you keep track of your reviews.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
