"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const savedTheme = localStorage.getItem("filmycharcha-theme");

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark-mode");
      setDark(true);
    } else {
      document.documentElement.classList.remove("dark-mode");
      setDark(false);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !dark;

    setDark(newTheme);

    if (newTheme) {
      document.documentElement.classList.add("dark-mode");
      localStorage.setItem("filmycharcha-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark-mode");
      localStorage.setItem("filmycharcha-theme", "light");
    }
  };

  if (!mounted) {
    return (
      <button
        type="button"
        className="theme-toggle"
        aria-label="Toggle dark mode"
      >
        🌙
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      title={dark ? "Light Mode" : "Dark Mode"}
    >
      {dark ? "☀️" : "🌙"}
    </button>
  );
}