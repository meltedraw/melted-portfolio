export type Project = {
  id: string;
  title: string;
  category: string;
  year: string;
  cover: string | null;
  // aspect ratio della cover reale — varia per progetto
  coverRatio: "1/1" | "4/3" | "3/4" | "16/9" | "4/5" | "3/2";
  // colore placeholder (usato fino a quando non c'è la cover reale)
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
    placeholderColor: "oklch(0.18 0.012 260)",
  },
  {
    id: "002",
    title: "Gloky — Gloky vs Kiddo",
    category: "Vinyl & CD Design",
    year: "2025",
    cover: null,
    coverRatio: "1/1",
    placeholderColor: "oklch(0.16 0.015 30)",
  },
  {
    id: "003",
    title: "Progetto 003",
    category: "Art Direction",
    year: "2024",
    cover: null,
    coverRatio: "4/3",
    placeholderColor: "oklch(0.15 0.008 200)",
  },
  {
    id: "004",
    title: "Progetto 004",
    category: "Visual Identity",
    year: "2024",
    cover: null,
    coverRatio: "3/4",
    placeholderColor: "oklch(0.17 0.01 340)",
  },
  {
    id: "005",
    title: "Progetto 005",
    category: "Graphic Design",
    year: "2023",
    cover: null,
    coverRatio: "4/5",
    placeholderColor: "oklch(0.14 0.006 80)",
  },
  {
    id: "006",
    title: "Progetto 006",
    category: "Album Art",
    year: "2023",
    cover: null,
    coverRatio: "1/1",
    placeholderColor: "oklch(0.19 0.014 180)",
  },
  {
    id: "007",
    title: "Progetto 007",
    category: "Art Direction",
    year: "2023",
    cover: null,
    coverRatio: "16/9",
    placeholderColor: "oklch(0.16 0.009 300)",
  },
];
