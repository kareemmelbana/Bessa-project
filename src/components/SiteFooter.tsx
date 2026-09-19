import { Link } from "@tanstack/react-router";
import { Linkedin } from "lucide-react";

const navLinks = [
  { to: "/", label: "الرئيسية" },
  { to: "/breeds", label: "السلالات" },
  { to: "/about", label: "عن الموقع" },
] as const;


const team = [
  {
    name: "Omnia Hossam",
    role: "UI & UX",
    href: "https://www.linkedin.com/in/omnia-hossam-a77512355",
  },
  {
    name: "Kareem Elbana",
    role: "Frontend",
    href: "https://www.linkedin.com/in/kareem-elbana-cs",
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="footer-entrance relative isolate overflow-hidden border-t border-border bg-surface">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 start-1/2 -z-10 h-48 w-[36rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
      />

      <div className="mx-auto w-full max-w-7xl px-5 pb-10 pt-12 md:px-8 md:pt-14">
        <div className="grid grid-cols-1 gap-10 text-center sm:grid-cols-3 sm:gap-8 md:text-start">
          {/* Brand */}
          <div className="flex flex-col items-center gap-3 sm:items-start">
            <Link
              to="/"
              className="font-display text-4xl leading-none text-foreground transition-colors hover:text-primary"
            >
              بِسَّة
            </Link>
            <p className="max-w-xs text-sm leading-7 text-muted-foreground">
              دليلك العربي لعالم القطط — اكتشف 64 سلالة وفلترها حسب الفرو والطبع لتجد القطة الأقرب لك.
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="روابط الفوتر" className="flex flex-col items-center gap-3 sm:items-start">
            <h3 className="mb-1 text-sm font-bold uppercase tracking-widest text-foreground/80">روابط سريعة</h3>
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="text-sm text-muted-foreground transition-all duration-200 hover:ps-1 hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Team credits */}
          <div className="flex flex-col items-center gap-3 sm:items-start">
            <h3 className="mb-1 text-sm font-bold uppercase tracking-widest text-foreground/80">فريق العمل</h3>
            {team.map(({ name, role, href }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <Linkedin className="size-4 shrink-0 opacity-60 transition-opacity group-hover:opacity-100" strokeWidth={1.75} />
                <span>
                  {name} <span className="text-foreground/50">— {role}</span>
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Elegant divider */}
        <div aria-hidden className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

        {/* Copyright */}
        <div className="mt-6 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} بِسَّة — جميع الحقوق محفوظة
          </p>
        </div>
      </div>
    </footer>
  );
}
