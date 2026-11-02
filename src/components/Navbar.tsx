"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Container from "@/components/Container";
import { navLinks, profile } from "@/data/portfolio";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const onDark = !scrolled && !open;

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-ink/10 bg-paper/95 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <Container>
        <nav className="flex h-14 items-center justify-between sm:h-16 lg:h-[4.25rem]">
          <a
            href="#top"
            className="font-display text-base font-bold tracking-tight sm:text-lg"
            style={{ color: onDark ? "#f5f2ec" : "#0b1010" }}
          >
            {profile.shortName}
            <span className="text-accent">.</span>
          </a>

          <ul className="hidden items-center gap-6 lg:flex xl:gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="group relative text-sm font-medium tracking-wide transition-colors"
                  style={{ color: onDark ? "rgba(245,242,236,0.82)" : "rgba(11,16,16,0.68)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = onDark ? "#f5f2ec" : "#0b1010";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = onDark
                      ? "rgba(245,242,236,0.82)"
                      : "rgba(11,16,16,0.68)";
                  }}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
            <li>
              <a
                href={profile.resume}
                download
                className={`btn btn-nav ${onDark ? "btn-primary" : "btn-dark"}`}
              >
                Resume
              </a>
            </li>
          </ul>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="inline-flex h-10 w-10 items-center justify-center lg:hidden"
            style={{ color: onDark ? "#f5f2ec" : "#0b1010" }}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-ink/10 bg-paper lg:hidden"
          >
            <Container>
              <ul className="flex flex-col gap-1 py-4">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <a
                      href={link.href}
                      className="block px-1 py-3 text-base font-medium"
                      style={{ color: "#0b1010" }}
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
                <li className="pt-2">
                  <a
                    href={profile.resume}
                    download
                    className="btn btn-dark w-full sm:w-auto"
                    onClick={() => setOpen(false)}
                  >
                    Download Resume
                  </a>
                </li>
              </ul>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
