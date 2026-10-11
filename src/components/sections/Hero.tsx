import { ArrowRight, Baby, HeartPulse, Mail, MapPin, Sparkles, Wheat } from "lucide-react";
import { profile } from "@/data/profile";
import { ClayButton, Chip, IconBubble } from "@/components/ui";

export function Hero() {
  return (
    <section id="top" className="relative px-4 pb-16 pt-36 sm:px-6 md:pb-24 md:pt-44">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <Chip accent="mint" icon={Sparkles} className="mb-6">
            {profile.availability}
          </Chip>
          <h1 className="font-display text-4xl font-semibold leading-[1.08] text-balance sm:text-5xl md:text-6xl">
            Hi, I&apos;m <span className="text-primary">{profile.firstName}</span> —{" "}
            <span className="block sm:inline">{profile.title}.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-pretty text-muted sm:text-xl">{profile.tagline}</p>

          <div className="mt-8 flex flex-wrap gap-4">
            <ClayButton href="#experience" size="lg">
              Explore my work <ArrowRight className="size-5" aria-hidden="true" />
            </ClayButton>
            <ClayButton href={`mailto:${profile.email}`} variant="surface" size="lg">
              <Mail className="size-5" aria-hidden="true" /> Get in touch
            </ClayButton>
          </div>

          <p className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-muted">
            <MapPin className="size-4 text-rose-ink" aria-hidden="true" /> {profile.location}
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-[17rem] sm:max-w-sm">
          <div className="clay relative aspect-square rounded-[3rem] bg-surface p-8">
            <div className="clay-inset flex size-full flex-col items-center justify-center rounded-[2.25rem] text-center">
              <span className="clay-sm inline-flex size-32 items-center justify-center rounded-full bg-primary font-display text-5xl font-semibold text-on-primary sm:size-36">
                SR
              </span>
              <p className="mt-6 font-display text-2xl font-semibold">{profile.name}</p>
              <p className="mt-1 text-sm font-semibold text-muted">UNICEF · NHM · AIIMS</p>
            </div>
          </div>

          <IconBubble icon={Baby} accent="rose" size="lg" className="absolute -left-4 top-6 sm:-left-6 animate-float" />
          <IconBubble icon={Wheat} accent="lemon" size="md" className="absolute -right-4 top-1/3 animate-float [animation-delay:-2s]" />
          <IconBubble icon={HeartPulse} accent="mint" size="lg" className="absolute -bottom-6 left-1/4 animate-float [animation-delay:-4s]" />
        </div>
      </div>

      <ul className="mx-auto mt-16 flex max-w-6xl flex-wrap justify-center gap-3" aria-label="Areas of expertise">
        {profile.keywords.map((keyword) => (
          <li key={keyword}>
            <Chip>{keyword}</Chip>
          </li>
        ))}
      </ul>
    </section>
  );
}
