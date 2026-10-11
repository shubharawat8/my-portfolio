import { Home } from "lucide-react";
import { ClayButton, ClayCard } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="flex min-h-[70dvh] items-center justify-center px-4 pt-32">
      <ClayCard className="max-w-md text-center">
        <p className="font-display text-7xl font-semibold text-primary">404</p>
        <p className="mt-4 text-muted">This page wandered off. Let&apos;s get you back.</p>
        <ClayButton href="/" className="mt-6">
          <Home className="size-4" aria-hidden="true" /> Home
        </ClayButton>
      </ClayCard>
    </section>
  );
}
