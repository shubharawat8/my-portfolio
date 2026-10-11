import { BookOpen } from "lucide-react";
import { certificationIcon as CertIcon, certifications, education } from "@/data/profile";
import { ClayCard, IconBubble, Reveal, Section, SectionHeading } from "@/components/ui";

const eduAccents = ["violet", "mint", "peach", "sky", "rose", "lemon"] as const;

export function Education() {
  return (
    <Section id="education">
      <SectionHeading eyebrow="Education & certifications" icon={BookOpen} title="Always learning" />
      <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
        <div className="grid gap-5 sm:grid-cols-2">
          {education.map((e, i) => (
            <Reveal key={`${e.degree}-${e.period}`} delay={(i % 2) * 80}>
              <ClayCard interactive className="h-full p-6">
                <IconBubble icon={e.icon} accent={eduAccents[i % eduAccents.length]} size="sm" />
                <h3 className="mt-4 font-display text-lg font-semibold leading-snug">{e.degree}</h3>
                {e.institution && <p className="mt-1 text-sm text-muted">{e.institution}</p>}
                {e.period && <p className="mt-3 text-xs font-bold uppercase tracking-wider text-primary">{e.period}</p>}
              </ClayCard>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <ClayCard className="h-full">
            <div className="flex items-center gap-4">
              <IconBubble icon={CertIcon} accent="mint" />
              <h3 className="font-display text-2xl font-semibold">Certifications</h3>
            </div>
            <ul className="mt-6 space-y-4">
              {certifications.map((c) => (
                <li key={c.title} className="clay-inset rounded-clay-sm p-5">
                  <p className="font-semibold leading-snug">{c.title}</p>
                  <p className="mt-1 flex items-center justify-between gap-3 text-sm text-muted">
                    <span>{c.issuer}</span>
                    <span className="font-bold text-primary">{c.year}</span>
                  </p>
                </li>
              ))}
            </ul>
          </ClayCard>
        </Reveal>
      </div>
    </Section>
  );
}
