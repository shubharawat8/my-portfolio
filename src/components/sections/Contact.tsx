import { Mail, MapPin, MessageCircleHeart, Phone } from "lucide-react";
import { profile } from "@/data/profile";
import { ClayButton, ClayCard, CopyEmailButton, IconBubble, Section } from "@/components/ui";

export function Contact() {
  return (
    <Section id="contact">
      <ClayCard className="relative overflow-hidden p-8 text-center sm:p-14">
        <IconBubble icon={MessageCircleHeart} accent="rose" size="lg" className="mx-auto" />
        <h2 className="mx-auto mt-6 max-w-2xl font-display text-3xl font-semibold text-balance sm:text-5xl">
          Let&apos;s build healthier first 1,000 days together
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-pretty text-muted sm:text-lg">
          Open to programme leadership, technical assistance and advisory roles with governments, UN agencies and
          development partners. References available on request.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <ClayButton href={`mailto:${profile.email}`} size="lg">
            <Mail className="size-5" aria-hidden="true" /> {profile.email}
          </ClayButton>
          <CopyEmailButton email={profile.email} />
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm font-semibold text-muted">
          <span className="inline-flex items-center gap-2">
            <MapPin className="size-4 text-rose-ink" aria-hidden="true" /> {profile.location}
          </span>
          {profile.showPhone && (
            <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-2 hover:text-ink">
              <Phone className="size-4 text-mint-ink" aria-hidden="true" /> {profile.phone}
            </a>
          )}
        </div>
      </ClayCard>
    </Section>
  );
}
