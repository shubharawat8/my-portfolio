import Image from "next/image";
import { ArrowRight, Baby, HeartPulse, Mail, MapPin, Sparkles, Wheat } from "lucide-react";
import { UNICEF_LOGO, profile } from "@/data/profile";
import { ClayButton, Chip, IconBubble, OrgLogo } from "@/components/ui";

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

        {/* Portrait: background-removed cut-out whose head rises above the clay card */}
        <div className="relative mx-auto aspect-[4/5] w-full max-w-[19rem] sm:max-w-sm">
          <div
            className="clay absolute inset-x-0 bottom-0 top-[18%] rounded-[3rem] bg-[radial-gradient(circle_at_25%_20%,var(--violet),transparent_60%),radial-gradient(circle_at_85%_85%,var(--peach),transparent_55%)]"
            aria-hidden="true"
          />
          <div className="absolute inset-0 [clip-path:inset(-20%_0_0_0_round_0_0_3rem_3rem)]">
            <Image
              src={profile.photo}
              alt={`Portrait of ${profile.name}`}
              fill
              priority
              sizes="(min-width: 1024px) 384px, (min-width: 640px) 384px, 304px"
              className="object-contain object-bottom drop-shadow-[0_18px_24px_rgba(40,30,90,0.25)]"
            />
          </div>

          <IconBubble icon={Baby} accent="rose" size="md" className="absolute -left-5 top-[22%] animate-float sm:-left-8" />
          <IconBubble icon={Wheat} accent="lemon" size="sm" className="absolute -right-3 top-[30%] animate-float [animation-delay:-2s] sm:-right-6" />
          <IconBubble icon={HeartPulse} accent="mint" size="md" className="absolute -right-4 bottom-[26%] animate-float [animation-delay:-4s] sm:-right-8" />

          <div className="clay absolute -bottom-6 left-1/2 flex w-[92%] -translate-x-1/2 items-center gap-3 rounded-full py-2 pl-2 pr-5">
            <OrgLogo src={UNICEF_LOGO} name="UNICEF" size="sm" className="rounded-full" />
            <div className="min-w-0 leading-tight">
              <p className="text-[13px] font-bold sm:text-sm">{profile.currentRole}</p>
              <p className="truncate text-xs font-semibold text-muted">{profile.currentOrg}</p>
            </div>
          </div>
        </div>
      </div>

      <ul className="mx-auto mt-20 flex max-w-6xl flex-wrap justify-center gap-3" aria-label="Areas of expertise">
        {profile.keywords.map((keyword) => (
          <li key={keyword}>
            <Chip>{keyword}</Chip>
          </li>
        ))}
      </ul>
    </section>
  );
}
