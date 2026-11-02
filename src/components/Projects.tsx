"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/Container";
import { Reveal, Stagger, StaggerItem } from "@/components/Motion";
import { projects, type Project } from "@/data/portfolio";

function ProjectCard({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  return (
    <motion.a
      href={project.liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 280, damping: 24 }}
      className="group flex h-full flex-col overflow-hidden border border-ink/10 bg-paper transition-colors duration-300 hover:border-accent/45"
    >
      <div
        className={`relative overflow-hidden bg-ink/[0.04] ${
          featured ? "aspect-[16/10] sm:aspect-[2/1]" : "aspect-[16/10]"
        }`}
      >
        <motion.div
          className="absolute inset-0"
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            fill
            className="object-cover object-top"
            sizes={
              featured
                ? "(max-width: 1024px) 100vw, 1100px"
                : "(max-width: 768px) 100vw, 33vw"
            }
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent" />
        <div className="absolute left-3 top-3 sm:left-4 sm:top-4">
          <span
            className={`px-2 py-1 text-[10px] font-semibold uppercase tracking-wider sm:text-[11px] ${
              project.category === "client"
                ? "bg-accent text-ink"
                : "bg-paper text-ink/75"
            }`}
          >
            {project.category === "client" ? "Client Project" : "Practice"}
          </span>
        </div>
      </div>

      <div
        className={`flex flex-1 flex-col p-4 sm:p-5 ${featured ? "md:p-7" : ""}`}
      >
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0 flex-1">
            <h3
              className={`font-display font-bold tracking-tight text-ink ${
                featured
                  ? "text-xl sm:text-2xl md:text-3xl"
                  : "text-lg sm:text-xl"
              }`}
            >
              {project.title}
            </h3>
            <p
              className={`mt-2 leading-relaxed text-ink/65 ${
                featured ? "text-sm sm:text-base" : "text-sm"
              }`}
            >
              {featured ? project.description : project.summary}
            </p>
          </div>
          <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center border border-ink/15 text-ink transition group-hover:border-accent group-hover:bg-accent sm:h-10 sm:w-10">
            <ArrowUpRight size={16} />
          </span>
        </div>

        {featured && (
          <ul className="mt-4 grid gap-2 sm:mt-5 sm:grid-cols-2">
            {project.highlights.map((item) => (
              <li
                key={item}
                className="relative pl-3.5 text-sm text-ink/70 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:bg-signal"
              >
                {item}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto flex flex-wrap gap-1.5 pt-4 sm:gap-2 sm:pt-5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="border border-ink/10 bg-ink/[0.03] px-2 py-1 text-[11px] font-medium text-ink/65 sm:text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}

export default function Projects() {
  const client = projects.filter((p) => p.category === "client");
  const practice = projects.filter((p) => p.category === "practice");

  return (
    <section id="projects" className="section-pad bg-paper text-ink">
      <Container>
        <Reveal>
          <p className="section-kicker">Projects</p>
          <h2 className="section-title mt-3 max-w-2xl">
            Client work with a live domain, plus practice builds on Vercel.
          </h2>
        </Reveal>

        <div className="mt-8 space-y-5 sm:mt-10 sm:space-y-6">
          {client.map((project) => (
            <Reveal key={project.id} variant="scale">
              <ProjectCard project={project} featured />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.05}>
          <div className="mt-10 flex items-end justify-between gap-4 border-b border-ink/10 pb-3 sm:mt-12 sm:pb-4">
            <h3 className="font-display text-lg font-semibold text-ink sm:text-xl">
              Practice projects
            </h3>
            <p className="hidden text-sm text-ink/45 sm:block">
              Demo apps on Vercel
            </p>
          </div>
        </Reveal>

        <Stagger className="mt-5 grid grid-cols-1 gap-4 sm:mt-6 sm:gap-5 md:grid-cols-2 xl:grid-cols-3">
          {practice.map((project) => (
            <StaggerItem key={project.id} scale className="h-full">
              <ProjectCard project={project} />
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
