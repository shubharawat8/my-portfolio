import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  icon?: LucideIcon;
  align?: "left" | "center";
  className?: string;
}

/** Consistent eyebrow + title + lede used at the top of every section. */
export function SectionHeading({ eyebrow, title, description, icon: Icon, align = "center", className }: SectionHeadingProps) {
  return (
    <div className={cn("mb-12 max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      <span className="clay-sm mb-4 inline-flex items-center gap-2 rounded-full bg-surface px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-primary">
        {Icon && <Icon className="size-4" aria-hidden="true" />}
        {eyebrow}
      </span>
      <h2 className="font-display text-3xl font-semibold leading-tight text-balance sm:text-4xl md:text-5xl">{title}</h2>
      {description && <p className="mt-4 text-base text-pretty text-muted sm:text-lg">{description}</p>}
    </div>
  );
}
