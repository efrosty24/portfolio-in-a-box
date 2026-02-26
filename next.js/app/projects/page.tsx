import { ProjectsList } from "../components/ProjectsList";
import type { ProjectDetail } from "../components/ProjectModal";

export const metadata = {
  title: "Projects",
  description: "Projects and work",
};

const projects: ProjectDetail[] = [
  {
    title: "Project One",
    description: "A short description of the project and what it does.",
    longDescription:
      "A longer overview of the project: the problem it solves, your role, and the impact. You can describe the architecture, key features, and what you learned. This gives visitors a clear picture before they follow links to the live site or source code.",
    tags: ["Next.js", "TypeScript", "Design"],
    href: "#",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com",
  },
  {
    title: "Project Two",
    description: "Another project with tech stack and impact.",
    longDescription:
      "Expand on the tech stack, API design, and open-source contributions. Share metrics or outcomes if relevant.",
    tags: ["React", "API", "Open Source"],
    href: "#",
    liveUrl: "https://example.com",
  },
  {
    title: "Project Three",
    description: "Brief summary and link to live or repo.",
    longDescription:
      "Details on Web3 integration, smart contracts, and why you chose Rust for this project.",
    tags: ["Web3", "Smart Contracts", "Rust"],
    href: "#",
    repoUrl: "https://github.com",
  },
];

export default function ProjectsPage() {
  return (
    <div className="page-content mx-auto max-w-2xl px-6 py-16 md:px-12 md:py-24">
      <div className="mb-8 inline-block rounded-2xl bg-[var(--accent-soft)] px-4 py-1.5 text-sm font-semibold text-[var(--accent)]">
        Selected work
      </div>
      <h1 className="font-serif text-4xl font-normal tracking-tight text-[var(--foreground)] md:text-5xl">
        Projects
      </h1>
      <p className="mt-4 text-lg text-[var(--muted)]">
        Side projects and things I&apos;ve shipped.
      </p>
      <ProjectsList projects={projects} />
    </div>
  );
}
