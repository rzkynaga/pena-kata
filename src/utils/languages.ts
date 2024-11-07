export type Language = (typeof languages)[number];

const languages = [
  {
    name: "Bali",
    nativeName: "Bali",
    viewBox: "0 2178 82 66",
    code: "ar",
  },
  {
    name: "Banjar",
    nativeName: "Banjar",
    viewBox: "0 132 82 66",
    code: "fr",
  },
  { name: "Batak", 
    nativeName: "Batak", 
    viewBox: "0 1914 82 66", 
    code: "hi" },
  {
    name: "Jawa",
    nativeName: "Jawa",
    viewBox: "0 1584 82 66",
    code: "hu",
  },
  {
    name: "Madura",
    nativeName: "Madura",
    viewBox: "0 1980 82 66",
    code: "id",
  },
  {
    name: "Minang",
    nativeName: "Minang",
    viewBox: "0 330 82 66",
    code: "it",
  },
  {
    name: "Papua",
    nativeName: "Papua",
    viewBox: "0 264 82 66",
    code: "ja",
  },
  { name: "Sunda", 
    nativeName: "Sunda", 
    viewBox: "0 396 82 66", 
    code: "ko" },
] as const;

export default languages;
