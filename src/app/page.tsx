import ProjectGrid from "@/components/ui/ProjectGrid";

const projects = [
  { id: "001", title: "Giaime — Love Songs Never Die", category: "Album Art", cover: null },
  { id: "002", title: "Gloky — Gloky vs Kiddo", category: "Vinyl & CD Design", cover: null },
  // altri progetti da aggiungere
];

export default function Home() {
  return (
    <section id="work" className="px-6 pt-24 pb-24">
      <ProjectGrid projects={projects} />
    </section>
  );
}
