"use client";

import { motion } from "framer-motion";
import Container from "@/components/Container";
import { Reveal, Stagger, StaggerItem } from "@/components/Motion";
import { skillGroups } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="section-pad bg-ink text-paper">
      <Container>
        <Reveal>
          <p className="section-kicker text-accent">Skills</p>
          <h2 className="section-title mt-3 max-w-2xl text-paper">
            Tools I use to design, build, and ship.
          </h2>
        </Reveal>

        <Stagger className="mt-8 grid grid-cols-1 gap-8 sm:mt-10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:grid-cols-4 lg:gap-8">
          {skillGroups.map((group) => (
            <StaggerItem key={group.title}>
              <div className="h-full border-t border-paper/15 pt-5">
                <h3 className="font-display text-base font-semibold text-accent sm:text-lg">
                  {group.title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {group.items.map((item, i) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -6 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.04 * i }}
                      className="text-sm text-paper/70 transition hover:text-accent"
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
