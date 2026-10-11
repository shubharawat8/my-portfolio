import { Award, GraduationCap, Microscope, Presentation } from "lucide-react";
import { research, training } from "@/data/profile";
import { Chip, ClayCard, IconBubble, Reveal, Section, SectionHeading } from "@/components/ui";

export function TrainingResearch() {
  return (
    <Section id="training">
      <SectionHeading
        eyebrow="Training & evidence"
        icon={GraduationCap}
        title="Building skills, generating evidence"
        description="Equipping frontline workers, counsellors and doctors — and studying what happens to children after care."
      />
      <div className="grid gap-8 lg:grid-cols-2">
        <Reveal>
          <ClayCard className="h-full">
            <div className="flex items-center gap-4">
              <IconBubble icon={Award} accent="lemon" />
              <h3 className="font-display text-2xl font-semibold">Master Trainer</h3>
            </div>
            <ul className="mt-6 flex flex-wrap gap-3" aria-label="Master Trainer areas">
              {training.masterTrainer.map((t, i) => (
                <li key={t}>
                  <Chip accent={(["violet", "mint", "peach", "sky"] as const)[i % 4]} className="text-sm">
                    {t}
                  </Chip>
                </li>
              ))}
            </ul>
            <div className="clay-inset mt-8 rounded-clay-sm p-5">
              <h4 className="flex items-center gap-2 font-display text-lg font-semibold">
                <Presentation className="size-5 text-primary" aria-hidden="true" /> Trainings facilitated
              </h4>
              <ul className="mt-4 space-y-3 text-sm text-muted">
                {training.facilitated.map((t) => (
                  <li key={t} className="flex gap-3">
                    <span className="mt-1.5 size-2 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </ClayCard>
        </Reveal>

        <Reveal delay={120}>
          <ClayCard className="h-full">
            <div className="flex items-center gap-4">
              <IconBubble icon={Microscope} accent="sky" />
              <h3 className="font-display text-2xl font-semibold">Research & evidence</h3>
            </div>
            <div className="mt-6 grid gap-5">
              {research.map((r) => (
                <article key={r.title} className="clay-inset flex gap-4 rounded-clay-sm p-5">
                  <r.icon className="mt-1 size-6 shrink-0 text-sky-ink" aria-hidden="true" />
                  <div>
                    <h4 className="font-display text-lg font-semibold">{r.title}</h4>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{r.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </ClayCard>
        </Reveal>
      </div>
    </Section>
  );
}
