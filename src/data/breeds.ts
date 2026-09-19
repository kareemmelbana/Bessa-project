export type Fur = "long" | "short" | "hairless" | "curly";
export type Temper = "calm" | "playful";
export type BreedTrait =
  | "طويل الشعر"
  | "قصير الشعر"
  | "بدون شعر"
  | "مجعد"
  | "هادئ ولطيف"
  | "نشيط ولعوب"
  | "✨ سلالة نادرة ✨";

export const FUR_LABELS: Record<Fur, string> = {
  long: "طويل الشعر",
  short: "قصير الشعر",
  hairless: "بدون شعر",
  curly: "مجعد",
};

export const TEMPER_LABELS: Record<Temper, string> = {
  calm: "هادئ ولطيف",
  playful: "نشيط ولعوب",
};

export type Breed = {
  ar: string;
  en: string;
  fur: Fur;
  temper: Temper;
  rare?: boolean;
  traits: BreedTrait[];
};

const raw: Breed[] = [
  { ar: "القط الحبشي", en: "Abyssinian", fur: "short", temper: "playful", traits: ["قصير الشعر", "نشيط ولعوب"] },
  { ar: "الأمريكي بوبتيل", en: "American Bobtail", fur: "short", temper: "calm", traits: ["قصير الشعر", "هادئ ولطيف"] },
  { ar: "الأمريكي كيرل", en: "American Curl", fur: "long", temper: "playful", traits: ["طويل الشعر", "نشيط ولعوب"] },
  { ar: "الأمريكي قصير الشعر", en: "American Shorthair", fur: "short", temper: "calm", traits: ["قصير الشعر", "هادئ ولطيف"] },
  { ar: "الأمريكي وايرهير", en: "American Wirehair", fur: "curly", temper: "calm", rare: true, traits: ["مجعد", "هادئ ولطيف", "✨ سلالة نادرة ✨"] },
  { ar: "الأسترالي ميست", en: "Australian Mist", fur: "short", temper: "calm", rare: true, traits: ["قصير الشعر", "هادئ ولطيف", "✨ سلالة نادرة ✨"] },
  { ar: "القط البالينيز", en: "Balinese", fur: "long", temper: "playful", traits: ["طويل الشعر", "نشيط ولعوب"] },
  { ar: "القط البنغالي", en: "Bengal", fur: "short", temper: "playful", traits: ["قصير الشعر", "نشيط ولعوب"] },
  { ar: "قط بيرمان", en: "Birman", fur: "long", temper: "calm", traits: ["طويل الشعر", "هادئ ولطيف"] },
  { ar: "البومباي", en: "Bombay", fur: "short", temper: "playful", traits: ["قصير الشعر", "نشيط ولعوب"] },
  { ar: "البريطاني طويل الشعر", en: "British Longhair", fur: "long", temper: "calm", traits: ["طويل الشعر", "هادئ ولطيف"] },
  { ar: "البريطاني قصير الشعر", en: "British Shorthair", fur: "short", temper: "calm", traits: ["قصير الشعر", "هادئ ولطيف"] },
  { ar: "البورمي", en: "Burmese", fur: "short", temper: "playful", traits: ["قصير الشعر", "نشيط ولعوب"] },
  { ar: "البورميلا", en: "Burmilla", fur: "short", temper: "calm", rare: true, traits: ["قصير الشعر", "هادئ ولطيف", "✨ سلالة نادرة ✨"] },
  { ar: "قط الشارتروه", en: "Chartreux", fur: "short", temper: "calm", traits: ["قصير الشعر", "هادئ ولطيف"] },
  { ar: "القط شوسي", en: "Chausie", fur: "short", temper: "playful", traits: ["قصير الشعر", "نشيط ولعوب"] },
  { ar: "القط شيروبيم", en: "Cherubim", fur: "long", temper: "calm", rare: true, traits: ["طويل الشعر", "هادئ ولطيف", "✨ سلالة نادرة ✨"] },
  { ar: "قط كورنيش ريكس", en: "Cornish Rex", fur: "curly", temper: "playful", traits: ["مجعد", "نشيط ولعوب"] },
  { ar: "قط الكيمريك", en: "Cymric", fur: "long", temper: "calm", rare: true, traits: ["طويل الشعر", "هادئ ولطيف", "✨ سلالة نادرة ✨"] },
  { ar: "قط ديفون ريكس", en: "Devon Rex", fur: "curly", temper: "playful", traits: ["مجعد", "نشيط ولعوب"] },
  { ar: "الدونسكوي", en: "Donskoy", fur: "hairless", temper: "playful", rare: true, traits: ["بدون شعر", "نشيط ولعوب", "✨ سلالة نادرة ✨"] },
  { ar: "الماو المصري", en: "Egyptian Mau", fur: "short", temper: "playful", traits: ["قصير الشعر", "نشيط ولعوب"] },
  { ar: "القط الغريب", en: "Exotic Shorthair", fur: "short", temper: "calm", traits: ["قصير الشعر", "هادئ ولطيف"] },
  { ar: "الهافانا", en: "Havana", fur: "short", temper: "playful", rare: true, traits: ["قصير الشعر", "نشيط ولعوب", "✨ سلالة نادرة ✨"] },
  { ar: "قط الغابة", en: "Highlander", fur: "short", temper: "playful", rare: true, traits: ["قصير الشعر", "نشيط ولعوب", "✨ سلالة نادرة ✨"] },
  { ar: "الهيمالايا", en: "Himalayan", fur: "long", temper: "calm", traits: ["طويل الشعر", "هادئ ولطيف"] },
  { ar: "البوبتيل الياباني", en: "Japanese Bobtail", fur: "short", temper: "playful", traits: ["قصير الشعر", "نشيط ولعوب"] },
  { ar: "الخابماني", en: "Khaomanee", fur: "long", temper: "calm", rare: true, traits: ["طويل الشعر", "هادئ ولطيف", "✨ سلالة نادرة ✨"] },
  { ar: "الكوراك", en: "Korat", fur: "short", temper: "calm", rare: true, traits: ["قصير الشعر", "هادئ ولطيف", "✨ سلالة نادرة ✨"] },
  { ar: "الكوريلين بوبتيل", en: "Kurilian Bobtail", fur: "long", temper: "calm", rare: true, traits: ["طويل الشعر", "هادئ ولطيف", "✨ سلالة نادرة ✨"] },
  { ar: "اللابيرم", en: "LaPerm", fur: "curly", temper: "playful", rare: true, traits: ["مجعد", "نشيط ولعوب", "✨ سلالة نادرة ✨"] },
  { ar: "الليكوي", en: "Lykoi", fur: "curly", temper: "playful", rare: true, traits: ["مجعد", "نشيط ولعوب", "✨ سلالة نادرة ✨"] },
  { ar: "قط المين كون", en: "Maine Coon", fur: "long", temper: "calm", traits: ["طويل الشعر", "هادئ ولطيف"] },
  { ar: "المانكس", en: "Manx", fur: "short", temper: "calm", traits: ["قصير الشعر", "هادئ ولطيف"] },
  { ar: "المنيوت", en: "Minuet", fur: "long", temper: "calm", traits: ["طويل الشعر", "هادئ ولطيف"] },
  { ar: "المنشكن", en: "Munchkin", fur: "short", temper: "playful", traits: ["قصير الشعر", "نشيط ولعوب"] },
  { ar: "النيبيلونج", en: "Nebelung", fur: "long", temper: "calm", rare: true, traits: ["طويل الشعر", "هادئ ولطيف", "✨ سلالة نادرة ✨"] },
  { ar: "قط الغابة النرويجية", en: "Norwegian Forest Cat", fur: "long", temper: "calm", traits: ["طويل الشعر", "هادئ ولطيف"] },
  { ar: "الأوسيكات", en: "Ocicat", fur: "short", temper: "playful", traits: ["قصير الشعر", "نشيط ولعوب"] },
  { ar: "الشرقي طويل الشعر", en: "Oriental Longhair", fur: "long", temper: "playful", traits: ["طويل الشعر", "نشيط ولعوب"] },
  { ar: "الشرقي قصير الشعر", en: "Oriental Shorthair", fur: "short", temper: "playful", traits: ["قصير الشعر", "نشيط ولعوب"] },
  { ar: "القط الشيرازي", en: "Persian", fur: "long", temper: "calm", traits: ["طويل الشعر", "هادئ ولطيف"] },
  { ar: "الفرعوني", en: "Peterbald", fur: "hairless", temper: "playful", rare: true, traits: ["بدون شعر", "نشيط ولعوب", "✨ سلالة نادرة ✨"] },
  { ar: "بيكسيبوب", en: "Pixiebob", fur: "short", temper: "calm", rare: true, traits: ["قصير الشعر", "هادئ ولطيف", "✨ سلالة نادرة ✨"] },
  { ar: "الراجدول", en: "Ragdoll", fur: "long", temper: "calm", traits: ["طويل الشعر", "هادئ ولطيف"] },
  { ar: "الأزرق الروسي", en: "Russian Blue", fur: "short", temper: "calm", traits: ["قصير الشعر", "هادئ ولطيف"] },
  { ar: "السافانا", en: "Savannah", fur: "short", temper: "playful", traits: ["قصير الشعر", "نشيط ولعوب"] },
  { ar: "السكوتش فولد", en: "Scottish Fold", fur: "short", temper: "calm", traits: ["قصير الشعر", "هادئ ولطيف"] },
  { ar: "الفولد المستقيم", en: "Scottish Straight", fur: "short", temper: "calm", traits: ["قصير الشعر", "هادئ ولطيف"] },
  { ar: "السيلكيرك ريكس", en: "Selkirk Rex", fur: "curly", temper: "calm", traits: ["مجعد", "هادئ ولطيف"] },
  { ar: "القط السيرينجتي", en: "Serengeti", fur: "short", temper: "playful", traits: ["قصير الشعر", "نشيط ولعوب"] },
  { ar: "القط السيامي", en: "Siamese", fur: "short", temper: "playful", traits: ["قصير الشعر", "نشيط ولعوب"] },
  { ar: "القط السيبيري", en: "Siberian", fur: "long", temper: "calm", traits: ["طويل الشعر", "هادئ ولطيف"] },
  { ar: "السنغافوري", en: "Singapura", fur: "short", temper: "playful", rare: true, traits: ["قصير الشعر", "نشيط ولعوب", "✨ سلالة نادرة ✨"] },
  { ar: "السنوشو", en: "Snowshoe", fur: "short", temper: "calm", traits: ["قصير الشعر", "هادئ ولطيف"] },
  { ar: "الصومالي", en: "Somali", fur: "long", temper: "playful", traits: ["طويل الشعر", "نشيط ولعوب"] },
  { ar: "السفينكس", en: "Sphynx", fur: "hairless", temper: "playful", traits: ["بدون شعر", "نشيط ولعوب"] },
  { ar: "تينيسي ريكس", en: "Tennessee Rex", fur: "curly", temper: "playful", rare: true, traits: ["مجعد", "نشيط ولعوب", "✨ سلالة نادرة ✨"] },
  { ar: "التاي", en: "Thai", fur: "short", temper: "playful", traits: ["قصير الشعر", "نشيط ولعوب"] },
  { ar: "التونكينيز", en: "Tonkinese", fur: "short", temper: "playful", traits: ["قصير الشعر", "نشيط ولعوب"] },
  { ar: "التوي بوب", en: "Toybob", fur: "short", temper: "calm", rare: true, traits: ["قصير الشعر", "هادئ ولطيف", "✨ سلالة نادرة ✨"] },
  { ar: "التويجير", en: "Toyger", fur: "short", temper: "playful", traits: ["قصير الشعر", "نشيط ولعوب"] },
  { ar: "التركي أنجورا", en: "Turkish Angora", fur: "long", temper: "playful", traits: ["طويل الشعر", "نشيط ولعوب"] },
  { ar: "التركي فان", en: "Turkish Van", fur: "long", temper: "playful", traits: ["طويل الشعر", "نشيط ولعوب"] },
];

export const BREEDS = raw;
