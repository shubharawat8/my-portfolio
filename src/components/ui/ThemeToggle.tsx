"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

/** Light / dark switch. Renders a neutral placeholder until mounted to avoid hydration mismatch. */
export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // eslint-disable-next-line react-hooks/set-state-in-effect -- standard next-themes mount guard
  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
      className={cn(
        "clay-sm relative inline-flex size-11 items-center justify-center rounded-full bg-surface text-ink transition-transform hover:-translate-y-0.5 active:clay-pressed",
        className,
      )}
    >
      {mounted ? (
        isDark ? <Sun className="size-5 text-lemon-ink" /> : <Moon className="size-5 text-violet-ink" />
      ) : (
        <span className="size-5" />
      )}
    </button>
  );
}
