import Image from "next/image";
import { cn } from "@/lib/utils";

const sizes = {
  xs: { box: "size-7 rounded-lg p-1", px: 28 },
  sm: { box: "size-10 rounded-xl p-1.5", px: 40 },
  md: { box: "size-14 rounded-2xl p-2", px: 56 },
};

interface OrgLogoProps {
  src: string;
  /** Organisation name — used as alt text. */
  name: string;
  size?: keyof typeof sizes;
  className?: string;
}

/**
 * An organisation logo on a white clay tile. The tile stays white in dark mode so
 * brand colours render faithfully.
 */
export function OrgLogo({ src, name, size = "sm", className }: OrgLogoProps) {
  return (
    <span className={cn("clay-sm inline-flex shrink-0 items-center justify-center bg-white", sizes[size].box, className)}>
      <Image src={src} alt={`${name} logo`} width={sizes[size].px} height={sizes[size].px} className="size-full object-contain" />
    </span>
  );
}
