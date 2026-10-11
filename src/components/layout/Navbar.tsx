"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, profile } from "@/data/profile";
import { ThemeToggle } from "@/components/ui";
import { cn } from "@/lib/utils";

/** Floating clay navigation bar with a mobile drawer. */
export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav
        aria-label="Primary"
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full px-3 py-2 transition-all duration-300",
          scrolled ? "clay" : "bg-transparent",
        )}
      >
        <a href="#top" className="flex items-center gap-3 rounded-full pr-2" aria-label={`${profile.name} — home`}>
          <span className="clay-sm inline-flex size-11 items-center justify-center rounded-full bg-primary font-display text-lg font-semibold text-on-primary">
            SR
          </span>
          <span className="hidden font-display text-lg font-semibold sm:inline">{profile.name}</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-semibold text-muted transition-colors hover:bg-sunken hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="clay-sm inline-flex size-11 items-center justify-center rounded-full bg-surface lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={cn(
          "clay mx-auto mt-3 max-w-6xl origin-top rounded-clay p-3 transition-all duration-300 lg:hidden",
          open ? "scale-100 opacity-100" : "pointer-events-none scale-95 opacity-0",
        )}
        hidden={!open}
      >
        <ul className="grid gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-2xl px-4 py-3 font-semibold transition-colors hover:bg-sunken"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
