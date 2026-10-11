import { Briefcase, CalendarDays, CheckCircle2, MapPin } from "lucide-react";
import { experience } from "@/data/profile";
import { Chip, ClayCard, OrgLogo, Reveal, Section, SectionHeading, accentBg } from "@/components/ui";
import { cn } from "@/lib/utils";

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading
        eyebrow="Experience"
        icon={Briefcase}
        title="A career built inside government systems"
        description="From community mobilisation in Chhattisgarh to state-level technical leadership in Uttar Pradesh."
      />

      <ol className="relative mx-auto max-w-4xl space-y-8 before:absolute before:bottom-4 before:left-5 before:top-4 before:w-1.5 before:-translate-x-1/2 before:rounded-full before:bg-sunken md:before:left-8">
        {experience.map((job) => {
          return (
            <li key={`${job.role}-${job.period}`} className="relative">
              <span
                className={cn(
                  "clay-sm absolute left-5 top-9 z-10 size-6 -translate-x-1/2 rounded-full md:left-8",
                  accentBg[job.accent],
                  job.current && "ring-4 ring-primary/40",
                )}
                aria-hidden="true"
              />
              <Reveal className="pl-12 md:pl-20">
                <ClayCard as="article" interactive>
                  <div className="flex flex-wrap items-center gap-2">
                    <Chip accent={job.accent} icon={CalendarDays}>
                      {job.period}
                    </Chip>
                    {job.current && <Chip accent="mint">Current role</Chip>}
                  </div>
                  <div className="mt-4 flex items-start gap-4">
                    {job.logo && <OrgLogo src={job.logo} name={job.organisation} size="md" />}
                    <div className="min-w-0">
                      <h3 className="font-display text-2xl font-semibold leading-tight">{job.role}</h3>
                      <p className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-semibold text-muted">
                        <span className="text-primary">{job.organisation}</span>
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="size-4" aria-hidden="true" /> {job.location}
                        </span>
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-pretty">{job.summary}</p>
                  <ul className="mt-4 space-y-2.5 text-sm text-muted">
                    {job.highlights.map((h) => (
                      <li key={h} className="flex gap-2.5">
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-mint-ink" aria-hidden="true" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                  <ul className="mt-5 flex flex-wrap gap-2" aria-label="Key areas">
                    {job.tags.map((tag) => (
                      <li key={tag}>
                        <Chip>{tag}</Chip>
                      </li>
                    ))}
                  </ul>
                </ClayCard>
              </Reveal>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
