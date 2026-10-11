import { stats } from "@/data/profile";
import { ClayCard, IconBubble, Reveal } from "@/components/ui";

export function Stats() {
  return (
    <section aria-label="Career at a glance" className="px-4 sm:px-6">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 min-[420px]:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 80}>
            <ClayCard interactive className="flex h-full items-center gap-5 p-6">
              <IconBubble icon={stat.icon} accent={stat.accent} />
              <div>
                <p className="font-display text-4xl font-semibold">{stat.value}</p>
                <p className="mt-1 text-sm font-medium leading-snug text-muted">{stat.label}</p>
              </div>
            </ClayCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
