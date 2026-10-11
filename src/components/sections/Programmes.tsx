import { Layers } from "lucide-react";
import { programmes } from "@/data/profile";
import { Carousel, Chip, ClayCard, IconBubble, Section, SectionHeading } from "@/components/ui";

export function Programmes() {
  return (
    <Section id="programmes" className="overflow-hidden">
      <SectionHeading
        eyebrow="Flagship programmes"
        icon={Layers}
        title="Programmes I've helped shape and scale"
        description="National and state nutrition initiatives where I've provided technical leadership, training and monitoring."
      />
      <Carousel label="Flagship programmes" speed={0.8}>
        {programmes.map((p) => (
          <ClayCard key={p.title} as="article" className="flex h-full select-none flex-col">
            <div className="flex items-start justify-between gap-4">
              <IconBubble icon={p.icon} accent={p.accent} size="lg" />
              <Chip accent={p.accent}>{p.short}</Chip>
            </div>
            <h3 className="mt-6 font-display text-xl font-semibold leading-snug">{p.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{p.description}</p>
          </ClayCard>
        ))}
      </Carousel>
    </Section>
  );
}
