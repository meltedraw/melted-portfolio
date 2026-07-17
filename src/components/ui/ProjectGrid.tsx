"use client";

import Link from "next/link";

type Project = {
  id: string;
  title: string;
  category: string;
  cover: string | null;
};

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <Link
          key={project.id}
          href={`/work/${project.id}`}
          className="group block"
        >
          {/* Cover */}
          <div
            style={{
              backgroundColor: "var(--color-border)",
              aspectRatio: "4/3",
            }}
            className="w-full overflow-hidden mb-3"
          >
            {project.cover ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={project.cover}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.7rem",
                    color: "var(--color-fg-muted)",
                    letterSpacing: "0.1em",
                  }}
                >
                  {project.id}
                </span>
              </div>
            )}
          </div>

          {/* Info */}
          <div className="flex items-baseline justify-between gap-4">
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                color: "var(--color-fg)",
                letterSpacing: "0.02em",
              }}
            >
              {project.title}
            </span>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.65rem",
                color: "var(--color-fg-muted)",
                letterSpacing: "0.05em",
                whiteSpace: "nowrap",
              }}
              className="uppercase"
            >
              {project.category}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
