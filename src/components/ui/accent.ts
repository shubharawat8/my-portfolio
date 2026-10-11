import type { Accent } from "@/data/profile";

/** Static class maps so Tailwind can detect every accent utility at build time. */
export const accentBg: Record<Accent, string> = {
  violet: "bg-violet text-violet-ink",
  mint: "bg-mint text-mint-ink",
  peach: "bg-peach text-peach-ink",
  sky: "bg-sky text-sky-ink",
  rose: "bg-rose text-rose-ink",
  lemon: "bg-lemon text-lemon-ink",
};

export const accentText: Record<Accent, string> = {
  violet: "text-violet-ink",
  mint: "text-mint-ink",
  peach: "text-peach-ink",
  sky: "text-sky-ink",
  rose: "text-rose-ink",
  lemon: "text-lemon-ink",
};
