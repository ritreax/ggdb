"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { Button } from "./ui/Button";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-8 h-8" />;
  }

  return (
    <Button
      color="Transparent"
      size="onlyIcon_md"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
    >
      <span className="w-5 h-5">
        {theme === "dark" ? <FaSun size={20} /> : <FaMoon size={20} />}
      </span>
    </Button>
  );
}
