import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

const variants = {
  primary: "bg-primary text-on-primary hover:bg-primary-strong",
  surface: "bg-surface text-ink",
};

const sizes = {
  md: "h-12 px-6 text-sm",
  lg: "h-14 px-8 text-base",
  icon: "size-12 justify-center",
};

export type ClayButtonProps = {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
} & (
  | ({ href: string } & ComponentPropsWithoutRef<"a">)
  | ({ href?: undefined } & ComponentPropsWithoutRef<"button">)
);

/** Squishy pill button. Renders an <a> when `href` is given, otherwise a <button>. */
export function ClayButton({ variant = "primary", size = "md", className, ...props }: ClayButtonProps) {
  const classes = cn(
    "clay-sm inline-flex items-center gap-2 rounded-full font-bold transition-all duration-200",
    "hover:-translate-y-0.5 active:translate-y-0 active:clay-pressed disabled:opacity-50",
    variants[variant],
    sizes[size],
    className,
  );

  if (props.href !== undefined) {
    return <a className={classes} {...(props as ComponentPropsWithoutRef<"a">)} />;
  }
  return <button type="button" className={classes} {...(props as ComponentPropsWithoutRef<"button">)} />;
}
