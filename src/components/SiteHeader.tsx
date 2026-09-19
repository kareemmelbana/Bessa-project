import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, UserCircle2, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const links = [
  { id: "home", to: "/", label: "الرئيسية" },
  { id: "breeds", to: "/breeds", label: "السلالات" },
  { id: "about", to: "/about", label: "عن الموقع" },
] as const;

function smoothScrollTo(id: string) {
  return (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };
}

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const onHome = pathname === "/";
  const [open, setOpen] = useState(false);

  return (
    <header className="site-entrance sticky top-0 z-50 w-full border-b border-border bg-surface/95 backdrop-blur">
      <div className="mx-auto grid h-16 max-w-7xl grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 px-4 sm:px-5">
        <Link to="/" className="font-display text-3xl leading-none text-foreground">
          بِسَّة
        </Link>

        <nav className="hidden items-center justify-center gap-7 text-base sm:flex md:text-lg">
          {links.map((l) => {
            if (onHome) {
              return (
                <a
                  key={l.id}
                  href={l.id === "home" ? "#" : `#${l.id}`}
                  onClick={smoothScrollTo(l.id)}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  {l.label}
                </a>
              );
            }

            return (
              <Link
                key={l.id}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                className="text-muted-foreground transition-colors hover:text-primary [&.active]:text-primary"
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <Button
          type="button"
          variant="ghost"
          size="icon"
          aria-label="الحساب"
          className="hidden text-foreground hover:text-primary sm:inline-flex"
        >
          <UserCircle2 className="size-8" strokeWidth={1.5} />
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="justify-self-end sm:hidden"
        >
          {open ? <X /> : <Menu />}
        </Button>
      </div>
      {open && (
        <nav className="animate-menu-in border-t border-border bg-surface px-4 py-3 sm:hidden">
          {links.map((link) => (
            <Link key={link.id} to={link.to} onClick={() => setOpen(false)} className="block rounded-md px-3 py-3 text-foreground hover:bg-secondary">
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
