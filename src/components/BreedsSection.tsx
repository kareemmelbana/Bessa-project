import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronDown, ChevronUp, RotateCcw, Search, X } from "lucide-react";
import { BREEDS, FUR_LABELS, TEMPER_LABELS, type Fur, type Temper } from "@/data/breeds";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { BreedCard } from "@/components/BreedCard";

type FurFilter = Fur | "all";
type TemperFilter = Temper | "all";

function Chip({ active, children, onClick, rare = false }: { active: boolean; children: React.ReactNode; onClick: () => void; rare?: boolean }) {
  return (
    <Button
      type="button"
      variant="filter"
      aria-pressed={active}
      data-active={active}
      data-rare={rare}
      onClick={onClick}
      className={cn(rare && "rare-chip")}
    >
      {children}
    </Button>
  );
}

export function BreedsSection() {
  const [fur, setFur] = useState<FurFilter>("all");
  const [temper, setTemper] = useState<TemperFilter>("all");
  const [rareOnly, setRareOnly] = useState(false);
  const [query, setQuery] = useState("");
  const [showAll, setShowAll] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const list = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase("ar");
    return BREEDS.filter((breed) => fur === "all" || breed.fur === fur)
      .filter((breed) => temper === "all" || breed.temper === temper)
      .filter((breed) => !rareOnly || breed.rare)
      .filter((breed) => !normalizedQuery || `${breed.ar} ${breed.en}`.toLocaleLowerCase("ar").includes(normalizedQuery));
  }, [fur, temper, rareOnly, query]);

  useEffect(() => setShowAll(false), [fur, temper, rareOnly, query]);

  const visible = showAll ? list : list.slice(0, 12);
  const hasFilters = fur !== "all" || temper !== "all" || rareOnly || query.length > 0;

  function clearAll() {
    setFur("all");
    setTemper("all");
    setRareOnly(false);
    setQuery("");
    setShowAll(false);
  }

  function toggleAll() {
    const wasOpen = showAll;
    setShowAll((value) => !value);
    if (wasOpen) requestAnimationFrame(() => headingRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }));
  }

  return (
    <section id="breeds" className="mx-auto max-w-[1220px] scroll-mt-20 px-4 py-12 md:px-6 md:py-16">
      <div className="filters-entrance">
        <div className="mb-7 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-2 text-sm font-bold text-primary">دليل السلالات</p>
            <h1 ref={headingRef} className="scroll-mt-24 font-display text-3xl text-foreground md:text-5xl">اكتشف السلالة المناسبة</h1>
          </div>
          <label className="relative block w-full md:max-w-md">
            <span className="sr-only">ابحث عن سلالة</span>
            <Search className="pointer-events-none absolute start-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="ابحث بالعربي أو الإنجليزي..."
              className="h-13 w-full rounded-xl border border-input bg-surface ps-12 pe-11 text-base text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
            {query && (
              <Button type="button" variant="ghost" size="icon" onClick={() => setQuery("")} aria-label="مسح البحث" className="absolute end-1.5 top-1/2 -translate-y-1/2">
                <X />
              </Button>
            )}
          </label>
        </div>

        <div className="border-y border-border py-5">
          <div className="grid gap-3 md:grid-cols-[7rem_minmax(0,1fr)] md:items-center">
            <span className="font-bold text-foreground">نوع الفرو</span>
            <div className="flex flex-wrap gap-2">
              <Chip active={fur === "all"} onClick={() => setFur("all")}>الكل</Chip>
              {(Object.keys(FUR_LABELS) as Fur[]).map((item) => <Chip key={item} active={fur === item} onClick={() => setFur(item)}>{FUR_LABELS[item]}</Chip>)}
            </div>
          </div>
          <div className="mt-4 grid gap-3 md:grid-cols-[7rem_minmax(0,1fr)] md:items-center">
            <span className="font-bold text-foreground">طبيعة القط</span>
            <div className="flex flex-wrap gap-2">
              <Chip active={temper === "all"} onClick={() => setTemper("all")}>الكل</Chip>
              {(Object.keys(TEMPER_LABELS) as Temper[]).map((item) => <Chip key={item} active={temper === item} onClick={() => setTemper(item)}>{TEMPER_LABELS[item]}</Chip>)}
              <Chip rare active={rareOnly} onClick={() => setRareOnly((value) => !value)}>✨ سلالة نادرة ✨</Chip>
            </div>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
          <p className="min-w-0 text-sm text-muted-foreground"><strong className="text-foreground">{list.length}</strong> سلالة متاحة</p>
          {hasFilters && <Button type="button" variant="ghost" onClick={clearAll}><RotateCcw />مسح الكل</Button>}
        </div>
      </div>

      {list.length === 0 ? (
        <div className="mt-10 flex flex-col items-center text-center">
          <img
            src="/WhatsApp%20Image%202026-09-15%20at%205.32.28%20AM%201.jpg"
            alt="قطة تجلس وحدها"
            className="size-64 rounded-2xl object-cover shadow-card sm:size-80"
          />
          <p className="text-xl font-bold text-primary">لا توجد سلالات مطابقة</p>
          <p className="mt-2 text-muted-foreground">جرّب تعديل البحث أو مسح الفلاتر.</p>
          <Button type="button" variant="quiet" onClick={clearAll} className="mt-5"><RotateCcw />مسح الكل</Button>
        </div>
      ) : (
        <>
          <div key={`${fur}-${temper}-${rareOnly}-${query}-${showAll}`} dir="rtl" className="mt-8 grid grid-cols-2 gap-3 pb-8 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4 xl:grid-cols-5">
            {visible.map((breed, index) => (
              <BreedCard key={breed.en} breed={breed} index={index} />
            ))}
          </div>
          {list.length > 12 && (
            <div className="flex justify-center pb-16">
              <Button type="button" variant="quiet" size="lg" onClick={toggleAll} aria-expanded={showAll}>
                {showAll ? <ChevronUp /> : <ChevronDown />}
                {showAll ? "إخفاء السلالات" : `عرض جميع السلالات (${list.length})`}
              </Button>
            </div>
          )}
        </>
      )}
    </section>
  );
}