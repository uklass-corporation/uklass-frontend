"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export default function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      className="relative rounded-full p-0 focus-visible:ring-2 focus-visible:ring-offset-2 hover:bg-accent/50 transition-colors duration-200"
      onClick={toggleTheme}
    >
      <Sun className="h-5 w-5 text-foreground transition-all duration-300 ease-in-out transform scale-100 dark:scale-0 dark:rotate-90" />
      <Moon className="absolute h-5 w-5 text-foreground transition-all duration-300 ease-in-out transform scale-0 rotate-90 dark:scale-100 dark:rotate-0" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
