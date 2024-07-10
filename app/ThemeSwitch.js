"use client";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return <p>D/L</p>;

  if (resolvedTheme === "dark" || theme === "dark") {
    return (
      <MdLightMode
        className="text-text-950"
        size={28}
        onClick={() => setTheme("light")}
      />
    );
  }
  if (resolvedTheme === "light" || theme === "light") {
    return (
      <MdDarkMode
        size={28}
        className="text-text-950"
        onClick={() => setTheme("dark")}
      />
    );
  }
  return (
    <MdDarkMode
      size={28}
      className="text-text-950"
      onClick={() => setTheme("dark")}
    />
  );
}
