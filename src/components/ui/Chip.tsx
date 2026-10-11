import type { LucideIcon } from "lucide-react";
import type { Accent } from "@/data/profile";
import { cn } from "@/lib/utils";
import { accentBg } from "./accent";

interface ChipProps {
  children: React.ReactNode;
  icon?: LucideIcon;
  accent?: Accent | "neutral";
  className?: string;
}

/** Small rounded pill for tags, keywords and metadata. */
export function Chip({ children, icon: Icon, accent = "neutral", className }: ChipProps) {
  return (
    <span
      className={cn(
        "clay-sm inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-3.5 py-1.5 text-xs font-semibold",
        accent === "neutral" ? "bg-surface text-muted" : accentBg[accent],
        className,
      )}
    >
      {Icon && <Icon className="size-3.5" aria-hidden="true" />}
      {children}
    </span>
  );
}
