export type Language = (typeof languages)[number];

const languages = [
  {
    name: "Sunda",
    nativeName: "العربية",
    viewBox: "0 2178 82 66",
    code: "ar",
  },
  {
    name: "Minang",
    nativeName: "Français",
    viewBox: "0 132 82 66",
    code: "fr",
  },
  { name: "Papua", 
    nativeName: "हिंदी", 
    viewBox: "0 1914 82 66", 
    code: "hi" },
  {
    name: "Jawa",
    nativeName: "Magyar",
    viewBox: "0 1584 82 66",
    code: "hu",
  },
  {
    name: "Batak",
    nativeName: "Bahasa Indonesia",
    viewBox: "0 1980 82 66",
    code: "id",
  },
  {
    name: "Bugis",
    nativeName: "Italiano",
    viewBox: "0 330 82 66",
    code: "it",
  },
  {
    name: "Banjar",
    nativeName: "日本語",
    viewBox: "0 264 82 66",
    code: "ja",
  },
  { name: "Musi", 
    nativeName: "한국어", 
    viewBox: "0 396 82 66", 
    code: "ko" },
] as const;

export default languages;
