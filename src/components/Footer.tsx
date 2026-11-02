import Container from "@/components/Container";
import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-paper/10 bg-ink py-6 text-paper sm:py-8">
      <Container>
        <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
          <p className="font-display text-sm font-semibold">
            {profile.name}
            <span className="text-accent">.</span>
          </p>
          <p className="text-xs text-paper/45">
            © 2026 · Full Stack Developer · Portfolio
          </p>
        </div>
      </Container>
    </footer>
  );
}
