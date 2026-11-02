"use client";

import { motion } from "framer-motion";
import Container from "@/components/Container";
import { Reveal } from "@/components/Motion";
import { education, profile } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="section-pad bg-paper text-ink">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="section-kicker">About</p>
              <h2 className="section-title mt-3">
                Building products that move from idea to production.
              </h2>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="section-copy mt-5 sm:mt-6">{profile.summary}</p>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="section-copy mt-4">
                Based in {profile.location}. Comfortable across frontend craft,
                backend APIs, auth, real-time features, and shipping on cloud
                platforms.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-8 border-t border-ink/10 pt-8 sm:grid-cols-2 sm:gap-10 lg:col-span-5 lg:border-t-0 lg:border-l lg:border-ink/10 lg:pt-0 lg:pl-10">
            <Reveal delay={0.1}>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/45">
                Education
              </p>
              <ul className="mt-4 space-y-5">
                {education.map((item, i) => (
                  <motion.li
                    key={item.school}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.08 * i }}
                  >
                    <p className="font-display text-[0.95rem] font-semibold leading-snug sm:text-base">
                      {item.degree}
                    </p>
                    <p className="mt-1 text-sm text-ink/55">
                      {item.school} · {item.period}
                    </p>
                  </motion.li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/45">
                Focus
              </p>
              <ul className="mt-4 space-y-3 text-sm text-ink/70">
                {[
                  "Full-stack product delivery",
                  "TMS & realtime systems",
                  "AI / LLM integrations",
                  "Clean, responsive UI",
                ].map((item) => (
                  <li key={item} className="border-l-2 border-accent pl-3">
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/45">
                Languages
              </p>
              <p className="mt-2 text-sm text-ink/70">English · Urdu</p>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
