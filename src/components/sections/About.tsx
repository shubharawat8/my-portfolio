import { UserRound } from "lucide-react";
import { profile } from "@/data/profile";
import { ClayCard, IconBubble, Reveal, Section, SectionHeading } from "@/components/ui";

const principleAccents = ["violet", "peach", "mint"] as const;

export function About() {
  return (
    <Section id="about">
      <SectionHeading
        eyebrow="About me"
        icon={UserRound}
        title="Fifteen years of making nutrition programmes work on the ground"
      />
      <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <ClayCard className="h-full space-y-5 text-base leading-relaxed text-muted sm:text-lg">
            {profile.about.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </ClayCard>
        </Reveal>
        <div className="grid gap-6">
          {profile.principles.map((principle, i) => (
            <Reveal key={principle.title} delay={i * 100}>
              <ClayCard interactive className="flex gap-5 p-6">
                <IconBubble icon={principle.icon} accent={principleAccents[i % principleAccents.length]} />
                <div>
                  <h3 className="font-display text-xl font-semibold">{principle.title}</h3>
                  <p className="mt-1 text-sm text-muted">{principle.description}</p>
                </div>
              </ClayCard>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
