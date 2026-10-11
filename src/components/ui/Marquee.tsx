import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: ReactNode;
  reverse?: boolean;
  /** Seconds for one full loop. */
  duration?: number;
  className?: string;
  label: string;
}

/**
 * Infinite, CSS-only horizontal ticker. Content is rendered twice so the loop is seamless;
 * the duplicate is hidden from assistive tech. Pauses on hover and respects reduced motion.
 */
export function Marquee({ children, reverse = false, duration = 40, className, label }: MarqueeProps) {
  const style = { "--marquee-duration": `${duration}s`, "--marquee-gap": "1rem" } as CSSProperties;
  return (
    <div
      className={cn(
        "marquee group relative overflow-hidden py-4",
        "[mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]",
        className,
      )}
      style={style}
      role="region"
      aria-label={label}
    >
      <div
        className={cn(
          "marquee-track flex w-max gap-4",
          reverse ? "animate-marquee-reverse" : "animate-marquee",
        )}
      >
        <div className="flex shrink-0 gap-4">{children}</div>
        <div className="flex shrink-0 gap-4" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
