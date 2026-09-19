import { Link } from "@tanstack/react-router";
import type { CSSProperties } from "react";
import type { Breed } from "@/data/breeds";
import { breedImage, breedSlug } from "@/lib/breeds";

type BreedCardProps = {
  breed: Breed;
  index?: number;
};

export function BreedCard({ breed, index = 0 }: BreedCardProps) {
  return (
    <article
      className="breed-card group relative mx-auto w-full max-w-[220px] overflow-hidden rounded-xl border border-card-border bg-card p-2 shadow-card"
      style={{ "--card-delay": `${Math.min(index, 15) * 45}ms` } as CSSProperties}
    >
      <Link to="/breeds/$slug" params={{ slug: breedSlug(breed.en) }} className="block rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
        <div className="aspect-[4/3] overflow-hidden rounded-lg bg-muted">
          <img
            src={breedImage(breed)}
            alt={breed.ar}
            loading="lazy"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
        <div className="px-2 pb-2 pt-3 text-center">
          <h2 className="text-lg font-bold text-card-foreground">{breed.ar}</h2>
          <p className="mt-1 text-sm text-card-muted" dir="ltr">{breed.en}</p>
          <div className="mt-3 flex flex-wrap justify-center gap-1.5">
            <span className="rounded-full bg-card-chip px-2.5 py-1 text-xs text-card-foreground">{breed.traits[0]}</span>
            {breed.rare && <span className="rounded-full bg-rare-soft px-2.5 py-1 text-xs text-rare-foreground">نادرة</span>}
          </div>
        </div>
      </Link>
    </article>
  );
}