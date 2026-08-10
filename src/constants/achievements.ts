export interface Achievement {
  id: number;
  title: string;
  subtitle: string;
  role: string;
  description: string;
  stat?: string;
  statLabel?: string;
  badge?: string;
  icon: string; // Icon identifier (e.g. trophy, award, medal, target, brain)
  gradient: string; // Gradient color theme for background glows & borders
  glowColor: string; // Shadow glow color
  badgeColor: string; // Text & border color for badges
}

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 1,
    title: "National-Level Hackathon Winner",
    subtitle: "1st Place among 300+ participants",
    role: "Winner",
    description: "Developed KPI-driven Qlik Cloud dashboards to analyze urban vehicle emissions and provide actionable insights for environment agencies.",
    stat: "1st",
    statLabel: "of 300+ competitors",
    badge: "Champion",
    icon: "trophy",
    gradient: "from-[#FFD700] via-[#F59E0B] to-[#D97706]",
    glowColor: "rgba(255, 215, 0, 0.15)",
    badgeColor: "text-[#FFD700] border-[#FFD700]/30 bg-[#FFD700]/10"
  },
  {
    id: 2,
    title: "Ideathon Runner-Up",
    subtitle: "2nd Place for scaling solutions",
    role: "Runner-Up",
    description: "Presented an innovative, scalable, and high-impact solution solving a critical real-world problem under tight time constraints.",
    stat: "2nd",
    statLabel: "Place Awarded",
    badge: "Silver Medal",
    icon: "award",
    gradient: "from-[#9CA3AF] via-[#6B7280] to-[#4B5563]",
    glowColor: "rgba(156, 163, 175, 0.15)",
    badgeColor: "text-gray-300 border-gray-500/30 bg-gray-500/10"
  },
  {
    id: 3,
    title: "Hackathon Finalist",
    subtitle: "Microsoft x Reskill & Adobe India",
    role: "Finalist",
    description: "Reached advanced rounds in both Microsoft x Reskill and Adobe India Hackathons, including a stellar Top 9 finish in a GenAI Hackathon.",
    stat: "Top 9",
    statLabel: "GenAI Finalist",
    badge: "Elite Finalist",
    icon: "target",
    gradient: "from-[#EC4899] via-[#8B5CF6] to-[#3B82F6]",
    glowColor: "rgba(139, 92, 246, 0.15)",
    badgeColor: "text-[#D8B4FE] border-[#A78BFA]/30 bg-[#A78BFA]/10"
  },
  {
    id: 4,
    title: "OpenAI Academy x NxtWave",
    subtitle: "State-Level Buildathon Selection",
    role: "Selected Member",
    description: "Chosen at the state level for demonstrating outstanding innovation, product-led thinking, and technical problem-solving skills.",
    stat: "State",
    statLabel: "Level Selection",
    badge: "OpenAI Scholar",
    icon: "brain",
    gradient: "from-[#10B981] via-[#059669] to-[#047857]",
    glowColor: "rgba(16, 185, 129, 0.15)",
    badgeColor: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10"
  },
  {
    id: 5,
    title: "Graphs Camp Selection",
    subtitle: "Codeforces Master Selection Camp",
    role: "Selected Applicant",
    description: "Selected from a massive pool of 80,000+ applicants in a highly competitive process led by Codeforces Master for advanced algorithms.",
    stat: "80k+",
    statLabel: "Applicant Pool",
    badge: "Top Tier Camp",
    icon: "code",
    gradient: "from-[#EF4444] via-[#DC2626] to-[#B91C1C]",
    glowColor: "rgba(239, 68, 68, 0.15)",
    badgeColor: "text-red-400 border-red-500/30 bg-red-500/10"
  }
];

export interface CertificationCategory {
  id: string;
  name: string;
  icon: string;
  items: string[];
}

export const CERTIFICATIONS: CertificationCategory[] = [
  {
    id: "ai-ml",
    name: "AI & Machine Learning",
    icon: "brain",
    items: [
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
      "NLP",
      "Generative AI",
      "Prompt Engineering",
      "GPT-3 OpenAI Models",
      "Data Science"
    ]
  },
  {
    id: "lang-front",
    name: "Languages & Frontend",
    icon: "code",
    items: [
      "Python",
      "C",
      "SQL",
      "HTML",
      "Frontend Development"
    ]
  },
  {
    id: "data-analytics",
    name: "Databases & Analytics",
    icon: "database",
    items: [
      "Database",
      "MongoDB",
      "Big Data",
      "Qlik Data Literacy"
    ]
  },
  {
    id: "systems-infra",
    name: "Systems & Security",
    icon: "shield",
    items: [
      "AWS Cloud Practitioner",
      "Networking CCNA",
      "Cybersecurity",
      "Information Security",
      "Operating Systems",
      "Agile Scrum",
      "RPA"
    ]
  }
];
