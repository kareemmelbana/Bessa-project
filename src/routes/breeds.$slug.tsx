import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Heart } from "lucide-react";
import { BREEDS, FUR_LABELS, TEMPER_LABELS } from "@/data/breeds";
import { breedDescription, breedImage, breedSlug } from "@/lib/breeds";
import { SiteHeader } from "@/components/SiteHeader";
import { BreedCard } from "@/components/BreedCard";
import { Button } from "@/components/ui/button";
import { useFavorites } from "@/hooks/use-favorites";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/breeds/$slug")({
  loader: ({ params }) => {
    const breed = BREEDS.find((item) => breedSlug(item.en) === params.slug);
    if (!breed) throw notFound();
    return breed;
  },
  head: ({ loaderData }) => {
    const title = loaderData ? `${loaderData.ar} (${loaderData.en}) | بِسَّة` : "السلالة غير موجودة | بِسَّة";
    const description = loaderData ? breedDescription(loaderData) : "لم نتمكن من العثور على هذه السلالة.";
    return { meta: [
      { title }, { name: "description", content: description },
      { property: "og:title", content: title }, { property: "og:description", content: description },
      { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
    ] };
  },
  notFoundComponent: () => <div className="min-h-screen bg-background"><SiteHeader /><main className="mx-auto max-w-3xl px-5 py-24 text-center"><h1 className="font-display text-4xl">السلالة غير موجودة</h1><Button asChild variant="quiet" className="mt-6"><Link to="/breeds">العودة للسلالات</Link></Button></main></div>,
  component: BreedDetailsPage,
});

function BreedDetailsPage() {
  const breed = Route.useLoaderData();
  const { favorites, toggleFavorite } = useFavorites();
  const favorite = favorites.includes(breed.en);
  const similar = BREEDS.filter((item) => item.en !== breed.en && (item.fur === breed.fur || item.temper === breed.temper)).slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-4 py-8 md:px-6 md:py-14">
        <Button asChild variant="ghost" className="mb-7"><Link to="/breeds"><ArrowRight />العودة إلى السلالات</Link></Button>
        <section className="detail-entrance grid overflow-hidden rounded-2xl border border-border bg-surface md:grid-cols-[1.05fr_0.95fr]">
          <div className="aspect-[4/3] min-h-0 overflow-hidden md:aspect-auto md:min-h-[520px]">
            <img src={breedImage(breed)} alt={breed.ar} className="h-full w-full object-cover" />
          </div>
          <div className="flex flex-col justify-center p-6 md:p-10">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                {breed.rare && <p className="mb-3 text-sm font-bold text-rare">✨ سلالة نادرة</p>}
                <h1 className="font-display text-4xl text-foreground md:text-5xl">{breed.ar}</h1>
                <p className="mt-2 text-lg text-muted-foreground" dir="ltr">{breed.en}</p>
              </div>
              <Button type="button" variant="favorite" size="icon" data-state={favorite ? "active" : "inactive"} aria-label={favorite ? "إزالة من المفضلة" : "إضافة إلى المفضلة"} onClick={() => toggleFavorite(breed.en)}>
                <Heart className={cn(favorite && "fill-current")} />
              </Button>
            </div>
            <p className="mt-7 text-lg leading-9 text-foreground/80">{breedDescription(breed)}</p>
            <dl className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-border">
              <div className="bg-secondary p-4"><dt className="text-xs text-muted-foreground">نوع الفرو</dt><dd className="mt-1 font-bold">{FUR_LABELS[breed.fur]}</dd></div>
              <div className="bg-secondary p-4"><dt className="text-xs text-muted-foreground">الطبيعة</dt><dd className="mt-1 font-bold">{TEMPER_LABELS[breed.temper]}</dd></div>
            </dl>
          </div>
        </section>

        <section className="py-16">
          <h2 className="font-display text-3xl text-foreground">سلالات مشابهة</h2>
          <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-5">
            {similar.map((item, index) => <BreedCard key={item.en} breed={item} index={index} />)}
          </div>
        </section>
      </main>
    </div>
  );
}