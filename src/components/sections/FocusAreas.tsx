import { Compass } from "lucide-react";
import { focusAreas } from "@/data/profile";
import { ClayCard, IconBubble, Reveal, Section, SectionHeading } from "@/components/ui";

export function FocusAreas() {
  return (
    <Section id="leadership">
      <SectionHeading
        eyebrow="Programme & technical leadership"
        icon={Compass}
        title="Where I create the most value"
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {focusAreas.map((area, i) => (
          <Reveal key={area.title} delay={(i % 3) * 90}>
            <ClayCard interactive className="h-full">
              <IconBubble icon={area.icon} accent={area.accent} />
              <h3 className="mt-5 font-display text-xl font-semibold">{area.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{area.description}</p>
            </ClayCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
