import type { ComponentPropsWithoutRef, ElementType } from "react";
import { cn } from "@/lib/utils";

type ClayCardProps<T extends ElementType> = {
  as?: T;
  /** Lift slightly on hover — use for interactive / scannable cards. */
  interactive?: boolean;
} & ComponentPropsWithoutRef<T>;

/** The base "inflated clay" surface used by every card on the site. */
export function ClayCard<T extends ElementType = "div">({
  as,
  interactive = false,
  className,
  ...props
}: ClayCardProps<T>) {
  const Component = as ?? "div";
  return (
    <Component
      className={cn(
        "clay rounded-clay p-6 sm:p-8",
        interactive && "transition-transform duration-300 hover:-translate-y-1.5",
        className,
      )}
      {...props}
    />
  );
}
