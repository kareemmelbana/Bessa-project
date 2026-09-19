import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { BreedsSection } from "@/components/BreedsSection";

export const Route = createFileRoute("/breeds")({
  head: () => ({
    meta: [
      { title: "سلالات القطط | بِسَّة - 64 سلالة بالعربي" },
      {
        name: "description",
        content:
          "تصفح 64 سلالة قطط مع فلترة حسب نوع الفرو (طويل، قصير، بدون شعر، مجعد) وطبيعة القط والسلالات النادرة.",
      },
      { property: "og:title", content: "سلالات القطط | بِسَّة" },
      { property: "og:description", content: "64 سلالة قطط مع فلترة سهلة حسب الفرو والطبع." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BreedsPage,
});

function BreedsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <BreedsSection />
      </main>
      <SiteFooter />
    </div>
  );
}
