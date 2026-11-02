"use client";

import { motion } from "framer-motion";
import Container from "@/components/Container";
import { Reveal, Stagger, StaggerItem } from "@/components/Motion";
import { experiences } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="section-pad bg-stone text-ink">
      <Container>
        <Reveal>
          <p className="section-kicker">Experience</p>
          <h2 className="section-title mt-3 max-w-2xl">
            Roles where I shipped real systems.
          </h2>
        </Reveal>

        <div className="relative mt-10 sm:mt-12">
          <motion.div
            aria-hidden
            className="absolute bottom-0 left-[7px] top-2 w-px origin-top bg-gradient-to-b from-accent via-signal/40 to-transparent md:left-[188px] lg:left-[208px]"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          />

          <Stagger className="space-y-0">
            {experiences.map((job, index) => (
              <StaggerItem key={job.company}>
                <article className="relative grid gap-3 border-t border-ink/10 py-7 pl-8 first:border-t-0 sm:py-8 md:grid-cols-[180px_1fr] md:gap-8 md:pl-0 lg:grid-cols-[200px_1fr] lg:gap-10">
                  <motion.span
                    aria-hidden
                    className="absolute left-0 top-9 h-3.5 w-3.5 rounded-full border-2 border-accent bg-stone md:left-[188px] md:-translate-x-1/2 lg:left-[208px]"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 16,
                      delay: 0.12 + index * 0.08,
                    }}
                  />

                  <div className="min-w-0">
                    <p className="font-display text-lg font-semibold leading-tight sm:text-xl">
                      {job.company}
                    </p>
                    <p className="mt-1 text-sm text-ink/55">{job.period}</p>
                    <p className="mt-2 inline-block bg-ink/5 px-2.5 py-1 text-[11px] font-medium text-ink/65">
                      {job.type}
                    </p>
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-base font-semibold text-ink sm:text-lg">
                      {job.role}
                    </h3>
                    <ul className="mt-3 space-y-2.5 sm:mt-4">
                      {job.points.map((point, i) => (
                        <motion.li
                          key={point}
                          initial={{ opacity: 0, x: 10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.06 * i }}
                          className="relative pl-4 text-sm leading-relaxed text-ink/70 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-accent"
                        >
                          {point}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Container>
    </section>
  );
}
