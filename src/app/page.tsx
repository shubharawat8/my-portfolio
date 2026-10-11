import {
  About,
  Competencies,
  Contact,
  Education,
  Experience,
  FocusAreas,
  Hero,
  Programmes,
  Stats,
  TrainingResearch,
} from "@/components/sections";
import { profile } from "@/data/profile";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.title,
  image: profile.photo,
  email: `mailto:${profile.email}`,
  address: { "@type": "PostalAddress", addressLocality: "Lucknow", addressRegion: "Uttar Pradesh", addressCountry: "IN" },
  worksFor: { "@type": "Organization", name: "UNICEF" },
  knowsAbout: profile.keywords,
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      <Hero />
      <Stats />
      <About />
      <Competencies />
      <Experience />
      <Programmes />
      <FocusAreas />
      <TrainingResearch />
      <Education />
      <Contact />
    </>
  );
}
