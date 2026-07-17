import ProjectGrid from "@/components/ui/ProjectGrid";
import { projects } from "@/lib/projects";

export default function Home() {
  return (
    <>
      {/* Hero minimale — solo respiro */}
      <section
        style={{ paddingTop: "18vh", paddingBottom: "10vh" }}
        className="flex justify-center"
      >
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "clamp(0.65rem, 1.5vw, 0.8rem)",
            letterSpacing: "0.1em",
            color: "oklch(0.48 0.006 250)",
            textAlign: "center",
          }}
          className="uppercase"
        >
          Graphic Designer — Milano
        </p>
      </section>

      {/* Griglia progetti */}
      <section
        id="work"
        style={{ padding: "0 1.5rem 8rem" }}
      >
        <ProjectGrid projects={projects} />
      </section>
    </>
  );
}
