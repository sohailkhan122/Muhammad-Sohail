"use client";

import { Download, Mail, MapPin, Phone } from "lucide-react";
import Container from "@/components/Container";
import { Reveal } from "@/components/Motion";
import { profile } from "@/data/portfolio";

function GitHubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2C6.477 2 2 6.586 2 12.253c0 4.537 2.865 8.382 6.839 9.738.5.095.683-.223.683-.494 0-.243-.01-1.05-.014-1.905-2.782.62-3.369-1.38-3.369-1.38-.455-1.188-1.11-1.504-1.11-1.504-.908-.638.069-.625.069-.625 1.004.072 1.532 1.06 1.532 1.06.892 1.57 2.341 1.116 2.91.854.091-.665.35-1.117.636-1.374-2.22-.26-4.555-1.143-4.555-5.087 0-1.124.39-2.043 1.029-2.764-.103-.26-.446-1.307.098-2.724 0 0 .84-.276 2.75 1.055A9.33 9.33 0 0 1 12 6.914a9.3 9.3 0 0 1 2.504.346c1.909-1.331 2.747-1.055 2.747-1.055.546 1.417.203 2.464.1 2.724.64.721 1.028 1.64 1.028 2.764 0 3.954-2.338 4.823-4.566 5.079.359.318.679.945.679 1.905 0 1.375-.012 2.483-.012 2.82 0 .274.18.594.688.493C19.138 20.63 22 16.787 22 12.253 22 6.586 17.523 2 12 2Z" />
    </svg>
  );
}

function LinkedInIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452H16.89v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a1.99 1.99 0 1 1 0-3.98 1.99 1.99 0 0 1 0 3.98zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="section-pad bg-stone text-ink">
      <Container>
        <Reveal>
          <p className="section-kicker">Contact</p>
          <h2 className="section-title mt-3 max-w-2xl">
            Let&apos;s build the next product together.
          </h2>
          <p className="section-copy mt-4">
            Open to full-stack roles, freelance frontend work, and product
            collaborations. Resume is ready to download.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap">
            <a href={`mailto:${profile.email}`} className="btn btn-dark">
              <Mail size={16} className="shrink-0" />
              Email me
            </a>
            <a href={profile.resume} download className="btn btn-ghost-dark">
              <Download size={16} className="shrink-0" />
              Download resume
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.14}>
          <div className="mt-10 grid grid-cols-1 gap-6 border-t border-ink/10 pt-8 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            <a
              href={`mailto:${profile.email}`}
              className="min-w-0 text-sm text-ink/70 transition hover:text-ink"
            >
              <span className="mb-2 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink/45">
                <Mail size={14} className="shrink-0" /> Email
              </span>
              <span className="break-anywhere">{profile.email}</span>
            </a>
            <a
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              className="min-w-0 text-sm text-ink/70 transition hover:text-ink"
            >
              <span className="mb-2 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink/45">
                <Phone size={14} className="shrink-0" /> Phone
              </span>
              {profile.phone}
            </a>
            <div className="min-w-0 text-sm text-ink/70">
              <span className="mb-2 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink/45">
                <MapPin size={14} className="shrink-0" /> Location
              </span>
              {profile.location}
            </div>
            <div className="flex items-center gap-3 sm:items-end">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="inline-flex h-10 w-10 items-center justify-center border border-ink/15 text-ink transition hover:border-accent hover:bg-accent"
              >
                <GitHubIcon />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-10 w-10 items-center justify-center border border-ink/15 text-ink transition hover:border-accent hover:bg-accent"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
