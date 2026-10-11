import type { LucideIcon } from "lucide-react";
import type { Accent } from "@/data/profile";
import { cn } from "@/lib/utils";
import { accentBg } from "./accent";

const sizes = {
  sm: { box: "size-10 rounded-xl", icon: "size-5" },
  md: { box: "size-14 rounded-2xl", icon: "size-7" },
  lg: { box: "size-20 rounded-3xl", icon: "size-10" },
};

interface IconBubbleProps {
  icon: LucideIcon;
  accent?: Accent;
  size?: keyof typeof sizes;
  className?: string;
}

/** A puffy pastel tile holding a lucide icon. */
export function IconBubble({ icon: Icon, accent = "violet", size = "md", className }: IconBubbleProps) {
  return (
    <span
      className={cn("clay-sm inline-flex shrink-0 items-center justify-center", sizes[size].box, accentBg[accent], className)}
      aria-hidden="true"
    >
      <Icon className={sizes[size].icon} strokeWidth={2.2} />
    </span>
  );
}
