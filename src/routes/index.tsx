import { createFileRoute } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { BreedsSection } from "@/components/BreedsSection";
import { AboutSection } from "@/components/AboutSection";
import heroCat from "@/assets/hero-cat.jpg";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "بِسَّة | دليل سلالات القطط بالعربي" },
      {
        name: "description",
        content:
          "أهلاً بك في عالم القطط. بِسَّة يجمع 64 سلالة قطط في مكان واحد مع فلترة حسب الفرو والطبع.",
      },
      { property: "og:title", content: "بِسَّة | دليل سلالات القطط" },
      { property: "og:description", content: "اكتشف سلالات القطط المختلفة بسهولة وبساطة." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function scrollTo(id: string) {
  return (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main>
        <section className="hero-entrance relative isolate flex min-h-[calc(100svh-4rem)] items-end overflow-hidden">
          <img src={heroCat} alt="قطة ترتدي نظارة شمس وإيشارب وتحمل كوب قهوة" className="hero-img-in absolute inset-0 -z-20 h-full w-full object-cover object-[52%_44%] sm:object-[50%_50%] md:object-[50%_62%]" />
          <div className="absolute inset-0 -z-10 bg-hero-overlay" />
          <div className="mx-auto w-full max-w-7xl px-5 pb-12 pt-20 sm:pb-20 md:px-8 md:pb-24">
            <div className="max-w-2xl">
              <p
                className="hero-item inline-flex items-center gap-2 rounded-full border border-hero/30 bg-surface/60 px-4 py-1.5 text-xs font-bold text-hero shadow-sm backdrop-blur-sm md:text-sm"
                style={{ "--d": "60ms" } as React.CSSProperties}
              >
                <span className="size-1.5 rounded-full bg-hero" />
                64 سلالة • دليل عربي
              </p>
              <h1
                className="hero-item mt-4 font-display text-4xl leading-tight text-foreground drop-shadow-hero sm:text-5xl md:text-7xl"
                style={{ "--d": "160ms" } as React.CSSProperties}
              >
                أهلًا بك في عالم القطط
              </h1>
              <p
                className="hero-item mt-4 max-w-xl text-base leading-8 text-foreground/85 md:text-lg"
                style={{ "--d": "260ms" } as React.CSSProperties}
              >
                اكتشف 64 سلالة، وابحث حسب الفرو والطبع لتجد القطة الأقرب لك.
              </p>
              <div
                className="hero-item mt-7"
                style={{ "--d": "360ms" } as React.CSSProperties}
              >
                <Button asChild variant="hero" size="lg" className="group h-12 gap-2.5 px-7 text-base">
                  <a href="#breeds" onClick={scrollTo("breeds")}>
                    اكتشف السلالات
                    <ArrowLeft className="size-4 transition-transform duration-200 group-hover:-translate-x-1" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <BreedsSection />
        <AboutSection />
      </main>
      <SiteFooter />
    </div>
  );
}
