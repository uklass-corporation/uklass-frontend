"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";

export default function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const isDark = theme === "dark";

  const handleChange = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <div className="flex items-center gap-2">
      <Sun
        className={`h-4 w-4 ${
          !isDark ? "text-yellow-500" : "text-muted-foreground"
        }`}
      />
      <Switch checked={isDark} onCheckedChange={handleChange} />
      <Moon
        className={`h-4 w-4 ${
          isDark ? "text-blue-500" : "text-muted-foreground"
        }`}
      />
    </div>
  );
}
