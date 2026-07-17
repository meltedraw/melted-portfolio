"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  useSortable,
  rectSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { type Project } from "@/lib/projects";

function ProjectCard({ project }: { project: Project }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: project.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition: isDragging ? "none" : transition,
    zIndex: isDragging ? 50 : undefined,
    opacity: isDragging ? 0.85 : 1,
  };

  return (
    <div ref={setNodeRef} style={style} className="group">
      {/* Zona drag — solo sull'immagine */}
      <div
        {...attributes}
        {...listeners}
        className="cursor-grab active:cursor-grabbing"
        style={{ touchAction: "none" }}
      >
        {/* Contenitore trasparente — la cover galleggia sul nero */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "280px",
            background: "transparent",
          }}
        >
          <div
            style={{
              height: "240px",
              aspectRatio: project.coverRatio,
              maxWidth: "100%",
              backgroundColor: project.cover ? "transparent" : project.placeholderColor,
              boxShadow: isDragging
                ? "0 24px 48px oklch(0 0 0 / 0.7)"
                : "0 4px 24px oklch(0 0 0 / 0.4)",
              transition: "box-shadow 300ms ease, transform 300ms cubic-bezier(0.16,1,0.3,1)",
              transform: isDragging ? "scale(1.03) rotate(0.5deg)" : "scale(1) rotate(0deg)",
              flexShrink: 0,
            }}
            className="overflow-hidden"
          >
            {project.cover && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={project.cover}
                alt={project.title}
                className="w-full h-full object-cover"
                draggable={false}
              />
            )}
          </div>
        </div>
      </div>

      {/* Info — cliccabili, non draggabili */}
      <Link href={`/work/${project.id}`} className="block mt-2 px-0">
        <div className="flex items-baseline gap-1">
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.65rem",
              color: "oklch(0.42 0.005 250)",
              letterSpacing: "0.04em",
              flexShrink: 0,
            }}
          >
            {project.id}
          </span>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.65rem",
              color: "oklch(0.42 0.005 250)",
              letterSpacing: "0.04em",
              flexShrink: 0,
            }}
          >
            —
          </span>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.68rem",
              color: "oklch(0.78 0.006 250)",
              letterSpacing: "0.01em",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              flex: 1,
            }}
          >
            {project.title}
          </span>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.6rem",
              color: "oklch(0.38 0.004 250)",
              letterSpacing: "0.03em",
              flexShrink: 0,
              marginLeft: "0.5rem",
            }}
          >
            {project.year}
          </span>
        </div>
      </Link>
    </div>
  );
}

const STORAGE_KEY = "portfolio-project-order";

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  const [items, setItems] = useState<Project[]>(projects);

  // Ripristina ordine da localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const savedIds: string[] = JSON.parse(saved);
        const reordered = savedIds
          .map((id) => projects.find((p) => p.id === id))
          .filter(Boolean) as Project[];
        if (reordered.length === projects.length) setItems(reordered);
      }
    } catch {
      // ignora errori localStorage
    }
  }, [projects]);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 8 }, // evita drag accidentali su click
    })
  );

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    setItems((prev) => {
      const oldIndex = prev.findIndex((p) => p.id === active.id);
      const newIndex = prev.findIndex((p) => p.id === over.id);
      const next = arrayMove(prev, oldIndex, newIndex);
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next.map((p) => p.id)));
      } catch {}
      return next;
    });
  }

  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={items.map((p) => p.id)} strategy={rectSortingStrategy}>
        <div
          style={{ gap: "5rem 3rem" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        >
          {items.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
}
