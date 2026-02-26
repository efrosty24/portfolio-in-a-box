export const metadata = {
  title: "Contact",
  description: "Get in touch",
};

const contactLinks = [
  {
    label: "Email",
    href: "mailto:you@example.com",
    icon: (
      <svg className="h-6 w-6 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    label: "Phone",
    href: "tel:+15551234567",
    icon: (
      <svg className="h-6 w-6 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/yourusername",
    icon: (
      <svg className="h-6 w-6 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/yourusername",
    icon: (
      <svg className="h-6 w-6 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Handshake",
    href: "https://joinhandshake.com",
    icon: (
      <svg className="h-6 w-6 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M7 11v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-2" />
        <path d="M11 11V9a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v2" />
        <path d="M13 11V9a2 2 0 0 0-2-2h0a2 2 0 0 0-2 2v2" />
        <path d="m3 14 2.5 2.5L8 12" />
        <path d="m21 14-2.5 2.5L16 12" />
        <path d="M8 12v2" />
        <path d="M16 12v2" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <div className="page-content mx-auto max-w-2xl px-6 py-16 md:px-12 md:py-24">
      <div className="mb-8 inline-block rounded-2xl bg-[var(--accent-soft)] px-4 py-1.5 text-sm font-semibold text-[var(--accent)]">
        Say hi
      </div>
      <h1 className="font-serif text-4xl font-normal tracking-tight text-[var(--foreground)] md:text-5xl">
        Contact
      </h1>
      <p className="mt-6 text-lg text-[var(--muted)]">
        Get in touch by email, phone, or connect on GitHub, LinkedIn, or Handshake.
      </p>
      <ul className="mt-12 space-y-4">
        {contactLinks.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-center gap-4 rounded-2xl border-2 border-[var(--card-border)] bg-[var(--card-bg)] p-4 transition-all hover:-translate-y-0.5 hover:border-[var(--accent)]/50 hover:shadow-md md:p-5"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent-soft)] text-[var(--accent)]">
                {item.icon}
              </span>
              <span className="font-medium text-[var(--foreground)]">{item.label}</span>
              <span className="ml-auto text-sm text-[var(--muted)]">
                {item.href.replace("mailto:", "").replace("tel:", "")}
              </span>
              {item.href.startsWith("http") && (
                <svg className="h-4 w-4 shrink-0 text-[var(--muted)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M21 3l-7 7M10 14l11-11" />
                </svg>
              )}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
