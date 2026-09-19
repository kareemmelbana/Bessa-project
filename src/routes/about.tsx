import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { AboutSection } from "@/components/AboutSection";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "عن الموقع | بِسَّة - دليل سلالات القطط" },
      {
        name: "description",
        content:
          "بِسَّة موقع بسيط يجمع معلومات 64 سلالة قطط في مكان واحد مع فلترة حسب نوع الفرو وطبيعة القط.",
      },
      { property: "og:title", content: "عن الموقع | بِسَّة" },
      {
        property: "og:description",
        content: "تعرف على فكرة موقع بِسَّة ودليل سلالات القطط بالعربي.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <AboutSection />
      </main>
      <SiteFooter />
    </div>
  );
}
