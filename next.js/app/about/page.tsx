import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About",
  description: "About me",
};

export default function AboutPage() {
  return (
    <div className="page-content mx-auto max-w-4xl px-6 py-16 md:px-12 md:py-24">
      <div className="mb-8 inline-block rounded-2xl bg-[var(--accent-soft)] px-4 py-1.5 text-sm font-semibold text-[var(--accent)]">
        Hello, I&apos;m here
      </div>

      {/* Hero: image left, intro + actions right */}
      <section className="mb-12 flex flex-col gap-8 md:flex-row md:items-start md:gap-10">
        <div className="shrink-0 md:w-[280px] lg:w-[320px]">
          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-[var(--accent-soft)]">
            <Image
              src="https://placehold.co/400x533/e9e5f0/4c3b6a?text=Your+Photo"
              alt="Profile"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 320px"
              priority
            />
          </div>
        </div>
        <div className="min-w-0 flex-1">
          <h1 className="font-serif text-4xl font-normal tracking-tight text-[var(--foreground)] md:text-5xl">
            About Me
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-[var(--muted)]">
            A short intro about you. You can describe your background, what you do,
            and what you care about—similar to the clean, editorial style of
            Bettina&apos;s portfolio.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Link
              href="/experience"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)] transition-colors hover:underline"
            >
              Learn more
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              Contact me
            </Link>
            <a
              href="/resume.pdf"
              download="resume.pdf"
              className="inline-flex items-center justify-center rounded-xl border-2 border-[var(--card-border)] bg-[var(--card-bg)] px-5 py-2.5 text-sm font-semibold text-[var(--foreground)] transition-colors hover:border-[var(--accent)]/50"
            >
              Resume
              <svg className="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <section className="rounded-2xl border-2 border-[var(--card-border)] bg-[var(--card-bg)] p-6 shadow-sm md:p-8">
        <h2 className="font-serif text-2xl font-normal text-[var(--foreground)]">
          My Superpower
        </h2>
        <p className="mt-3 leading-relaxed text-[var(--muted)]">
          Taking abstract ideas and turning them into tangible, scalable
          products that people actually want to use.
        </p>
      </section>
      <section className="mt-6 rounded-2xl border-2 border-[var(--card-border)] bg-[var(--card-bg)] p-6 shadow-sm md:p-8">
        <h2 className="font-serif text-2xl font-normal text-[var(--foreground)]">
          Outside the IDE
        </h2>
        <p className="mt-3 leading-relaxed text-[var(--muted)]">
          A few lines about your life outside work—hobbies, talks, community,
          or whatever you want to share.
        </p>
      </section>
    </div>
  );
}
