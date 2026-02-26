"use client";

import { useState } from "react";
import { ProjectModal, type ProjectDetail } from "./ProjectModal";

type ProjectsListProps = {
  projects: ProjectDetail[];
};

export function ProjectsList({ projects }: ProjectsListProps) {
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);

  return (
    <>
      <ul className="mt-12 grid gap-6">
        {projects.map((project, i) => (
          <li key={i}>
            <button
              type="button"
              onClick={() => setSelectedProject(project)}
              className="group block w-full rounded-2xl border-2 border-[var(--card-border)] bg-[var(--card-bg)] p-6 text-left shadow-sm transition-all hover:-translate-y-1 hover:border-[var(--accent)]/50 hover:shadow-lg md:p-8"
            >
              <h2 className="font-serif text-xl font-normal text-[var(--foreground)] transition group-hover:text-[var(--accent)]">
                {project.title}
              </h2>
              <p className="mt-2 leading-relaxed text-[var(--muted)]">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-xl bg-[var(--accent-soft)] px-3 py-1 text-xs font-semibold text-[var(--accent)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </button>
          </li>
        ))}
      </ul>
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  );
}
