import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

/** Page section wrapper with consistent vertical rhythm and max width. */
export function Section({ className, children, ...props }: ComponentPropsWithoutRef<"section">) {
  return (
    <section className={cn("relative px-4 py-20 sm:px-6 md:py-28", className)} {...props}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}
