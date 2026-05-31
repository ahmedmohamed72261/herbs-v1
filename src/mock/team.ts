export interface TeamMember {
  name: string;
  role: string;
  department: string;
  image: string;
  bio: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Dr. Amine Mansour",
    role: "Chief Quality Officer",
    department: "Compliance & Lab Testing",
    image: "/team/team-1.jpg",
    bio: "Former Director of Botanical Standardization with 20+ years of active research in medicinal extract optimization.",
  },
  {
    name: "Sophia Vance",
    role: "Head of Global Logistics",
    department: "Export & Trade Infrastructure",
    image: "/team/team-2.jpg",
    bio: "Specializes in multi-modal shipping agreements, cold-chain preservation, and complex international trade regulations.",
  },
  {
    name: "Karim Al-Fayed",
    role: "Director of Sourcing",
    department: "Agricultural & Supply Chain",
    image: "/team/team-3.jpg",
    bio: "Coordinates directly with our regional farming networks to ensure ethical cultivation, soil purity, and seasonal planning.",
  },
];
