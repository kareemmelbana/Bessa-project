import type { Breed } from "@/data/breeds";

export function breedSlug(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export function breedImage(breed: Pick<Breed, "en">) {
  return `/cats/${encodeURIComponent(breed.en)}.jpg`;
}

export function breedDescription(breed: Breed) {
  const rarity = breed.rare ? " وتُعد من السلالات النادرة" : "";
  return `${breed.ar} سلالة ${breed.fur === "long" ? "طويلة الشعر" : breed.fur === "short" ? "قصيرة الشعر" : breed.fur === "hairless" ? "بدون شعر" : "ذات فرو مجعد"}، بطبيعة ${breed.temper === "calm" ? "هادئة ولطيفة" : "نشيطة ولعوبة"}${rarity}.`;
}