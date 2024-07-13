import { Space_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar";
import ThemeContext from "./ThemeContext";
import Footer from "./Footer";

const inter = Space_Mono({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Review Radar",
  description: "Review Radar is a tool to help you keep track of your reviews.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeContext>
          <Navbar />
          <main className="bg-background-50">{children}</main>
          <Footer />
        </ThemeContext>
      </body>
    </html>
  );
}
