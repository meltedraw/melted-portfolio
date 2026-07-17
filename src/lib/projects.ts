export type Project = {
  id: string;
  title: string;
  category: string;
  year: string;
  cover: string | null;
  coverRatio: "1/1" | "4/3" | "3/4" | "16/9" | "4/5" | "3/2";
  placeholderColor: string;
};

export const projects: Project[] = [
  {
    id: "001",
    title: "Giaime — Love Songs Never Die",
    category: "Album Art",
    year: "2024",
    cover: null,
    coverRatio: "1/1",
    placeholderColor: "oklch(0.6 0.005 250)",
  },
  {
    id: "002",
    title: "Gloky — Gloky vs Kiddo",
    category: "Vinyl & CD Design",
    year: "2025",
    cover: null,
    coverRatio: "1/1",
    placeholderColor: "oklch(0.6 0.005 250)",
  },
  {
    id: "003",
    title: "Progetto 003",
    category: "Art Direction",
    year: "2024",
    cover: null,
    coverRatio: "4/3",
    placeholderColor: "oklch(0.6 0.005 250)",
  },
  {
    id: "004",
    title: "Progetto 004",
    category: "Visual Identity",
    year: "2024",
    cover: null,
    coverRatio: "3/4",
    placeholderColor: "oklch(0.6 0.005 250)",
  },
  {
    id: "005",
    title: "Progetto 005",
    category: "Graphic Design",
    year: "2023",
    cover: null,
    coverRatio: "4/5",
    placeholderColor: "oklch(0.6 0.005 250)",
  },
  {
    id: "006",
    title: "Progetto 006",
    category: "Album Art",
    year: "2023",
    cover: null,
    coverRatio: "3/2",
    placeholderColor: "oklch(0.6 0.005 250)",
  },
  {
    id: "007",
    title: "Progetto 007",
    category: "Art Direction",
    year: "2023",
    cover: null,
    coverRatio: "16/9",
    placeholderColor: "oklch(0.6 0.005 250)",
  },
];
