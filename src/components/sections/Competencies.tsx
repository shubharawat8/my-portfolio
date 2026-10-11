import { Sparkles } from "lucide-react";
import { competencies, type Accent } from "@/data/profile";
import { Marquee, Section, SectionHeading, accentBg } from "@/components/ui";
import { cn } from "@/lib/utils";

const accents: Accent[] = ["violet", "mint", "peach", "sky", "rose", "lemon"];

function CompetencyPill({ label, icon: Icon, accent }: { label: string; icon: typeof Sparkles; accent: Accent }) {
  return (
    <span className="clay-sm inline-flex items-center gap-3 rounded-full bg-surface py-2 pl-2 pr-5 text-sm font-semibold sm:text-base">
      <span className={cn("inline-flex size-9 items-center justify-center rounded-full", accentBg[accent])} aria-hidden="true">
        <Icon className="size-4.5" />
      </span>
      {label}
    </span>
  );
}

export function Competencies() {
  const half = Math.ceil(competencies.length / 2);
  const rows = [competencies.slice(0, half), competencies.slice(half)];

  return (
    <Section id="competencies" className="overflow-hidden">
      <SectionHeading
        eyebrow="Core competencies"
        icon={Sparkles}
        title="What I bring to the table"
        description="A blend of public health nutrition expertise, programme management and government partnership skills."
      />
      <div className="-mx-4 sm:-mx-6">
        {rows.map((row, r) => (
          <Marquee key={r} reverse={r % 2 === 1} duration={45} label={`Core competencies, row ${r + 1}`}>
            {row.map((c, i) => (
              <CompetencyPill key={c.label} label={c.label} icon={c.icon} accent={accents[(i + r * 3) % accents.length]} />
            ))}
          </Marquee>
        ))}
      </div>
    </Section>
  );
}
