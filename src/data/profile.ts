/**
 * Single source of truth for all portfolio content.
 * Every section reads from this file — edit content here, not inside components.
 * See memory-bank/modules/content-data.md for the schema notes.
 */
import type { LucideIcon } from "lucide-react";
import {
  Baby,
  BadgeCheck,
  BookOpen,
  ChartColumn,
  ClipboardCheck,
  FileText,
  GraduationCap,
  Handshake,
  HandHeart,
  HeartPulse,
  Hospital,
  Landmark,
  Layers,
  Library,
  Lightbulb,
  ListChecks,
  Microscope,
  Milk,
  Network,
  Presentation,
  Route,
  Salad,
  Scale,
  ShieldCheck,
  Target,
  Users,
  Wheat,
} from "lucide-react";

/** Brand assets (served from /public). */
export const UNICEF_LOGO = "/logos/unicef.png";
export const PROFILE_PHOTO = "/images/shubha-rawat.webp";

export type Accent = "violet" | "mint" | "peach" | "sky" | "rose" | "lemon";

export interface Stat {
  value: string;
  label: string;
  icon: LucideIcon;
  accent: Accent;
}

export interface Competency {
  label: string;
  icon: LucideIcon;
}

export interface Experience {
  role: string;
  organisation: string;
  /** Optional organisation logo path (from /public). */
  logo?: string;
  location: string;
  period: string;
  current?: boolean;
  summary: string;
  highlights: string[];
  tags: string[];
  accent: Accent;
}

export interface Programme {
  title: string;
  short: string;
  description: string;
  icon: LucideIcon;
  accent: Accent;
  /** Partner organisation whose logo is shown on the card, e.g. UNICEF. */
  partner?: { name: string; logo: string };
}

export interface FocusArea {
  title: string;
  description: string;
  icon: LucideIcon;
  accent: Accent;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  icon: LucideIcon;
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
}

export const profile = {
  name: "Shubha Rawat",
  firstName: "Shubha",
  photo: PROFILE_PHOTO,
  currentRole: "State Consultant — Child Nutrition",
  currentOrg: "UNICEF Uttar Pradesh",
  title: "Senior Public Health & Nutrition Professional",
  tagline:
    "Turning nutrition policy into practice — so every mother and child, in every district, gets the care that the programme promised.",
  location: "Lucknow, Uttar Pradesh, India",
  email: "rawat.shubha@gmail.com",
  // Kept in data but hidden by default — a public site attracts spam calls.
  // Flip `showPhone` to true to display it in the Contact section.
  phone: "+91 94259 42759",
  showPhone: false,
  availability: "Open to state & national programme leadership roles",
  keywords: [
    "Programme Leadership",
    "Maternal, Newborn & Child Health & Nutrition",
    "Government Technical Assistance",
    "Monitoring & Evaluation",
    "Health Systems Strengthening",
  ],
  about: [
    "I am a public health and nutrition professional with over 15 years of experience helping governments design, run and continuously improve large-scale maternal, newborn and child nutrition programmes — through UNICEF, the National Health Mission (NHM) and AIIMS Bhopal.",
    "My work sits where policy meets the frontline. At state level I support programme strategy, annual planning and budgeting, review mechanisms and technical guidance; in districts and blocks I go to Anganwadi Centres, Nutrition Rehabilitation Centres and health facilities to understand why something isn't working — and then help fix it.",
    "Across Uttar Pradesh, Madhya Pradesh and Chhattisgarh, I have worked hand-in-hand with Women & Child Development / ICDS, NHM, Health and Education departments and development partners to strengthen breastfeeding, infant and young child feeding (IYCF), management of severe acute malnutrition (SAM/IMSAM) and first-1,000-days strategies.",
  ],
  principles: [
    {
      title: "Systems over silos",
      description: "Durable change comes from strengthening government systems, not running parallel ones.",
      icon: Network,
    },
    {
      title: "Evidence to action",
      description: "Field findings only matter when they become corrective actions that get followed up.",
      icon: Lightbulb,
    },
    {
      title: "People at the centre",
      description: "ASHAs, AWWs and counsellors are the programme — investing in their skills pays back fastest.",
      icon: HandHeart,
    },
  ],
} as const;

export const stats: Stat[] = [
  { value: "15+", label: "Years in public health & nutrition", icon: HeartPulse, accent: "violet" },
  { value: "3", label: "Indian states served — UP, MP & Chhattisgarh", icon: Landmark, accent: "mint" },
  { value: "7", label: "Programme roles across UNICEF, NHM & AIIMS", icon: Layers, accent: "peach" },
  { value: "4", label: "Master Trainer certifications", icon: GraduationCap, accent: "sky" },
];

export const competencies: Competency[] = [
  { label: "State Programme Strategy & Execution", icon: Target },
  { label: "Maternal, Newborn & Child Health & Nutrition", icon: Baby },
  { label: "Government Technical Assistance", icon: Landmark },
  { label: "WCD / ICDS & NHM Coordination", icon: Network },
  { label: "Programme Planning & Budgeting", icon: Scale },
  { label: "Monitoring, Evaluation & Learning", icon: ChartColumn },
  { label: "Data Analysis & Quality Assurance", icon: ShieldCheck },
  { label: "SOPs, Technical Guidance & Job Aids", icon: FileText },
  { label: "Capacity Building & Training", icon: GraduationCap },
  { label: "Stakeholder & Partner Coordination", icon: Handshake },
  { label: "Knowledge Management & Documentation", icon: Library },
  { label: "Review Meetings & High-Level Presentations", icon: Presentation },
];

export const programmes: Programme[] = [
  {
    title: "MAA — Mothers' Absolute Affection",
    partner: { name: "UNICEF", logo: UNICEF_LOGO },
    short: "MAA",
    description:
      "Technical leadership for state-wide breastfeeding promotion — early initiation within one hour of birth and exclusive breastfeeding for six months.",
    icon: Milk,
    accent: "rose",
  },
  {
    title: "IMSAM",
    partner: { name: "UNICEF", logo: UNICEF_LOGO },
    short: "IMSAM",
    description:
      "Integrated Management of Severe Acute Malnutrition — linking community identification, facility care and follow-up into one continuum.",
    icon: Hospital,
    accent: "violet",
  },
  {
    title: "Nutrition Rehabilitation Centres",
    partner: { name: "UNICEF", logo: UNICEF_LOGO },
    short: "NRC",
    description:
      "Establishing and strengthening NRCs with training, quality standards and progress tracking for facility-based SAM care.",
    icon: HeartPulse,
    accent: "mint",
  },
  {
    title: "Infant & Young Child Feeding",
    partner: { name: "UNICEF", logo: UNICEF_LOGO },
    short: "IYCF",
    description:
      "Complementary feeding and IYCF counselling — including state-level 3-in-1 training for breastfeeding counsellors.",
    icon: Baby,
    accent: "peach",
  },
  {
    title: "ICDS & Poshan Abhiyaan",
    partner: { name: "UNICEF", logo: UNICEF_LOGO },
    short: "POSHAN",
    description:
      "Annual physical & budgetary plans, training calendars and supplementary-nutrition strategy with the Poshan Abhiyaan Secretariat.",
    icon: Wheat,
    accent: "lemon",
  },
  {
    title: "Anemia Mukt Bharat",
    short: "AMB",
    description:
      "Master Trainer for the national anaemia-reduction strategy, with earlier capacity building on WIFS and NIPI.",
    icon: ShieldCheck,
    accent: "sky",
  },
  {
    title: "First 1,000 Days & Suposhan",
    partner: { name: "UNICEF", logo: UNICEF_LOGO },
    short: "1,000 Days",
    description:
      "Supporting Madhya Pradesh's restructured ICDS PIP, Suposhan and strategies focused on the critical first 1,000 days.",
    icon: Salad,
    accent: "mint",
  },
  {
    title: "Bal Arogya evam Poshan Mission",
    partner: { name: "UNICEF", logo: UNICEF_LOGO },
    short: "ABVBAPM",
    description:
      "Techno-managerial support at district and block levels for the Atal Bihari Vajpayee Bal Arogya evam Poshan Mission.",
    icon: Route,
    accent: "violet",
  },
];

export const experience: Experience[] = [
  {
    role: "State Consultant — Child Nutrition",
    organisation: "UNICEF",
    logo: UNICEF_LOGO,
    location: "Uttar Pradesh",
    period: "Jun 2024 — Present",
    current: true,
    summary:
      "Technical lead for state-wide child nutrition programmes in partnership with NHM and government departments in India's most populous state.",
    highlights: [
      "Provide technical leadership for large-scale initiatives on breastfeeding, complementary feeding, Nutrition Rehabilitation Centres and IMSAM.",
      "Support programme planning, monitoring and state reviews — and follow implementation gaps through to corrective action.",
      "Coordinate across NHM divisions (child health, quality assurance, maternal health, MIS, community processes) and the Department of Women & Child Development.",
      "Track technical progress across MAA, NRC, IYCF and IMSAM and prepare recommendations, reports and presentations for government leadership.",
    ],
    tags: ["MAA", "NRC", "IYCF", "IMSAM", "NHM"],
    accent: "violet",
  },
  {
    role: "State ICDS Consultant",
    organisation: "UNICEF",
    logo: UNICEF_LOGO,
    location: "Uttar Pradesh",
    period: "Jul 2022 — May 2024",
    summary:
      "Embedded technical support to the Poshan Abhiyaan Secretariat and ICDS Directorate for planning, budgeting and capacity building.",
    highlights: [
      "Prepared annual physical and budgetary plans, technical presentations and programme communications for ICDS and Poshan Abhiyaan.",
      "Drafted and supported implementation of the state's annual training calendar.",
      "Provided technical support on child nutrition, IYCF, SAM management and ICDS supplementary nutrition strategies.",
      "Supported rollout of supportive supervision systems and worked with Nutrition Consortium partners to assess programme progress.",
    ],
    tags: ["ICDS", "Poshan Abhiyaan", "Budgeting", "Supportive Supervision"],
    accent: "mint",
  },
  {
    role: "Regional Field Monitor",
    organisation: "AIIMS Bhopal",
    location: "Madhya Pradesh",
    period: "Aug 2019 — Jun 2022",
    summary:
      "Independent field monitoring that turned on-the-ground observation into actionable feedback for programme managers.",
    highlights: [
      "Developed monitoring tools for programme field visits and implementation reviews.",
      "Visited AWCs, schools and health facilities to assess implementation, reporting and operational bottlenecks — including supply-chain issues.",
      "Analysed field findings and shared feedback to drive corrective action and programme improvement.",
      "Facilitated inter-departmental coordination (DWCD, NHM, Education, partners) and district & divisional review meetings.",
    ],
    tags: ["Monitoring Tools", "Field Assessment", "Supply Chain", "Reviews"],
    accent: "peach",
  },
  {
    role: "Nutrition Expert cum Monitor",
    organisation: "National Health Mission",
    location: "Madhya Pradesh",
    period: "Apr 2019 — Aug 2019",
    summary: "District-level indicator monitoring and frontline training on maternal nutrition.",
    highlights: [
      "Monitored selected health and nutrition indicators across assigned districts and reported to district and state authorities.",
      "Supported action strategies based on field feedback and district requirements.",
      "Delivered maternal nutrition training to paramedical staff, ASHAs and AWWs in a pilot district.",
    ],
    tags: ["Indicators", "Maternal Nutrition", "ASHA / AWW Training"],
    accent: "sky",
  },
  {
    role: "Divisional Nutrition Coordinator",
    organisation: "UNICEF",
    logo: UNICEF_LOGO,
    location: "Madhya Pradesh",
    period: "Apr 2014 — Jan 2019",
    summary:
      "Five years strengthening division-wide coordination and training systems for WCD's flagship nutrition strategies.",
    highlights: [
      "Supported the Department of WCD in implementing the restructured ICDS PIP, Suposhan and first-1,000-days strategies.",
      "Strengthened district coordination structures and coordinated trainers for WIFS, NIPI, MAA, SAM and related programmes.",
      "Monitored training systems including AWTC, ANTC and ILA activities.",
    ],
    tags: ["Suposhan", "First 1,000 Days", "WIFS", "NIPI", "Training Systems"],
    accent: "rose",
  },
  {
    role: "District Nutrition Coordinator",
    organisation: "UNICEF",
    logo: UNICEF_LOGO,
    location: "Madhya Pradesh",
    period: "May 2012 — Mar 2014",
    summary: "Techno-managerial support for district malnutrition strategy and facility-based SAM care.",
    highlights: [
      "Supported district and block implementation of the Atal Bihari Vajpayee Bal Arogya evam Poshan Mission.",
      "Promoted breastfeeding within one hour of birth through technical assistance, monitoring and on-the-job support.",
      "Helped establish and strengthen Nutrition Rehabilitation Centres, including training and quality standards.",
    ],
    tags: ["NRC", "Early Breastfeeding", "District Strategy"],
    accent: "lemon",
  },
  {
    role: "Field Coordinator — Women Empowerment",
    organisation: "SOCH",
    location: "Chhattisgarh",
    period: "Jul 2010 — Apr 2012",
    summary: "Community mobilisation that connected women's self-help groups with health and nutrition services.",
    highlights: [
      "Supported district administration, PRI, Health and ICDS coordination for the formation of self-help groups.",
      "Linked SHGs with community health and nutrition programmes.",
    ],
    tags: ["SHGs", "PRI", "Community Mobilisation"],
    accent: "mint",
  },
];

export const focusAreas: FocusArea[] = [
  {
    title: "Maternal & Child Nutrition",
    description: "Breastfeeding, IYCF, SAM/IMSAM and Nutrition Rehabilitation Centres.",
    icon: Baby,
    accent: "rose",
  },
  {
    title: "Planning & Review",
    description: "State and district planning, implementation monitoring, reviews and corrective-action follow-up.",
    icon: ListChecks,
    accent: "violet",
  },
  {
    title: "Government Coordination",
    description: "Convergence across WCD/ICDS, NHM, Health, Education and other line departments.",
    icon: Landmark,
    accent: "sky",
  },
  {
    title: "Technical Guidance",
    description: "Training plans, monitoring tools, SOPs, job aids, presentations and programme documentation.",
    icon: ClipboardCheck,
    accent: "peach",
  },
  {
    title: "Evidence & Learning",
    description: "Research and programme assessments that feed back into better programme design.",
    icon: Microscope,
    accent: "mint",
  },
  {
    title: "Capacity Building",
    description: "Master Trainer and ToT facilitator for frontline workers, counsellors and doctors.",
    icon: Users,
    accent: "lemon",
  },
];

export const training = {
  masterTrainer: ["IYCF", "SAM Management (Facility & Community)", "Anemia Mukt Bharat (AMB)", "Maternal Nutrition"],
  facilitated: [
    "State-level IYCF 3-in-1 training for breastfeeding counsellors",
    "Divisional ToTs and module testing for community- and facility-based SAM management",
    "RBSK doctors' training on identification and referral of SAM children",
    "Participant: facility-based SAM management and 7-day IYCF 3-in-1 training",
  ],
};

export const research = [
  {
    title: "Child survival after NRC discharge",
    description:
      "Study on child survival after facility care among children admitted to Nutrition Rehabilitation Centres with severe acute malnutrition.",
    icon: Microscope,
  },
  {
    title: "Follow-up under the FSAM guideline",
    description:
      "Comprehensive assessment of community-based follow-up and facility-based extended follow-up, in continuation of the Government of India FSAM guideline.",
    icon: BookOpen,
  },
];

export const education: Education[] = [
  { degree: "PhD (in progress)", institution: "Vivekananda Global University (VGU), Jaipur", period: "2025 — Present", icon: GraduationCap },
  {
    degree: "PG Diploma in Public Health Nutrition",
    institution: "Indian Institute of Public Health, Bhubaneswar",
    period: "2016 — 2017",
    icon: Salad,
  },
  { degree: "PG Diploma in Public Health Service Management", institution: "", period: "2014 — 2015", icon: Hospital },
  {
    degree: "MBA (Human Resources)",
    institution: "VNS Institute of Management, Barkatullah University",
    period: "",
    icon: Users,
  },
  { degree: "GDC College, Rewa", institution: "Awadhesh Pratap Singh (APS) University", period: "2008 — 2010", icon: BookOpen },
  { degree: "Bachelor of Science", institution: "", period: "2005 — 2007", icon: Microscope },
];

export const certifications: Certification[] = [
  { title: "Programming for Infant and Young Child Feeding", issuer: "Cornell University", year: "2013" },
  { title: "Transforming Nutrition in India: Ideas, Policies & Outcomes", issuer: "Transform Nutrition & PHFI", year: "2015" },
  {
    title: "Maternal, Infant, Young Child and Adolescent Nutrition (MIYCAN)",
    issuer: "Indian Institute of Public Health",
    year: "2023",
  },
];

export const certificationIcon = BadgeCheck;

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#programmes", label: "Programmes" },
  { href: "#training", label: "Training" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];
