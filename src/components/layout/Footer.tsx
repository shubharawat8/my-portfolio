import { ArrowUp, Heart } from "lucide-react";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="px-4 pb-10 sm:px-6">
      <div className="clay mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 rounded-clay px-6 py-6 text-sm text-muted sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}. Made with{" "}
          <Heart className="inline size-4 fill-rose-ink text-rose-ink" aria-label="love" /> for healthier childhoods.
        </p>
        <a
          href="#top"
          className="clay-sm inline-flex items-center gap-2 rounded-full bg-surface px-4 py-2 font-semibold text-ink transition-transform hover:-translate-y-0.5"
        >
          <ArrowUp className="size-4" aria-hidden="true" /> Back to top
        </a>
      </div>
    </footer>
  );
}
