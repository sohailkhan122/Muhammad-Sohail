"use client";

import Image from "next/image";
import { useRef, type MouseEvent } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { ArrowDownRight, Download } from "lucide-react";
import Container from "@/components/Container";
import { TextReveal } from "@/components/Motion";
import { profile } from "@/data/portfolio";

export default function Hero() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });
  const blobPos = useMotionTemplate`calc(70% + ${sx}px) calc(28% + ${sy}px)`;
  const photoX = useSpring(0, { stiffness: 40, damping: 18 });
  const photoY = useSpring(0, { stiffness: 40, damping: 18 });

  const onMove = (e: MouseEvent<HTMLElement>) => {
    if (reduce || !sectionRef.current || window.innerWidth < 768) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 28;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 18;
    mx.set(x);
    my.set(y);
    photoX.set(x * -0.25);
    photoY.set(y * -0.18);
  };

  return (
    <section
      id="top"
      ref={sectionRef}
      onMouseMove={onMove}
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-ink text-paper"
    >
      <div className="hero-atmosphere" aria-hidden />
      <motion.div
        aria-hidden
        className="hero-spotlight"
        style={{ backgroundPosition: blobPos }}
      />
      <div className="hero-grid" aria-hidden />

      <motion.div
        className="pointer-events-none absolute inset-0 z-[1] md:inset-y-0 md:left-auto md:right-0 md:w-[54%] lg:w-[50%]"
        style={{ x: photoX, y: photoY }}
      >
        <motion.div
          className="relative h-full min-h-[100svh] w-full"
          initial={reduce ? false : { opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={profile.image}
            alt={profile.name}
            fill
            priority
            className="object-cover object-[center_12%] opacity-45 md:opacity-100 md:object-[center_10%]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/75 to-ink/40 md:bg-gradient-to-r md:from-ink md:via-ink/75 md:to-ink/10" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-transparent to-ink/70 md:from-ink/25 md:to-ink/35" />
        </motion.div>
      </motion.div>

      <Container className="relative z-10 w-full py-24 sm:py-28 lg:py-32">
        <div className="grid lg:grid-cols-12 lg:items-center lg:gap-8">
          <div className="lg:col-span-7 xl:col-span-6">
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-5 inline-flex items-center gap-2 border border-accent/30 bg-accent/10 px-3 py-1.5"
            >
              <motion.span
                className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                animate={
                  reduce ? undefined : { scale: [1, 1.4, 1], opacity: [1, 0.55, 1] }
                }
                transition={{ duration: 1.8, repeat: Infinity }}
              />
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent sm:text-xs">
                {profile.role}
              </span>
            </motion.div>

            <h1 className="font-display text-[clamp(2.6rem,10vw,5.75rem)] font-bold leading-[0.95] tracking-tight">
              <TextReveal text="Muhammad" as="span" className="block" delay={0.1} />
              <TextReveal
                text="Sohail"
                as="span"
                className="text-gradient block"
                delay={0.24}
              />
            </h1>

            <motion.p
              className="mt-5 max-w-md text-sm leading-relaxed text-paper/75 sm:mt-6 sm:max-w-lg sm:text-base lg:text-[1.0625rem]"
              initial={reduce ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              {profile.tagline}
            </motion.p>

            <motion.div
              className="mt-8 flex w-full flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap"
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.65 }}
            >
              <a href="#projects" className="btn btn-primary">
                View projects
                <ArrowDownRight size={17} className="shrink-0" />
              </a>
              <a href={profile.resume} download className="btn btn-ghost-light">
                <Download size={15} className="shrink-0" />
                Resume
              </a>
            </motion.div>

            <motion.div
              className="mt-8 flex flex-col gap-2 border-t border-paper/10 pt-5 text-xs text-paper/50 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6 sm:gap-y-2 sm:pt-6 sm:text-sm"
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.85 }}
            >
              <span>{profile.location}</span>
              <a
                href={`mailto:${profile.email}`}
                className="break-anywhere transition hover:text-accent"
              >
                {profile.email}
              </a>
            </motion.div>
          </div>
        </div>
      </Container>

      <motion.div
        className="absolute bottom-5 right-4 z-10 hidden flex-col items-center gap-2 sm:bottom-6 sm:right-6 md:flex"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-paper/35">
          Scroll
        </span>
        <span className="relative h-9 w-px overflow-hidden bg-paper/15">
          <motion.span
            className="absolute inset-x-0 top-0 h-1/2 bg-accent"
            animate={reduce ? undefined : { y: ["-100%", "200%"] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </motion.div>
    </section>
  );
}
