export type Unit = {
  unitNumber: number;
  description: string;
  backgroundColor: `bg-${string}`;
  textColor: `text-${string}`;
  borderColor: `border-${string}`;
  tiles: Tile[];
};

export type Tile =
  | {
      type: "star" | "dumbbell" | "book" | "trophy" | "fast-forward";
      description: string;
    }
  | { type: "treasure" };

export type TileType = Tile["type"];

export const units: readonly Unit[] = [
  {
    unitNumber: 1,
    description: "Memahami frasa dasar",
    backgroundColor: "bg-[#235390]",
    textColor: "text-[#235390]",
    borderColor: "border-[#16345C]",
    tiles: [
      {
        type: "star",
        description: "Memahami frasa dasar",
      },
      {
        type: "book",
        description: "Good morning",
      },
      {
        type: "star",
        description: "Greet people",
      },
      { type: "treasure" },
      { type: "book", description: "A date" },
      { type: "trophy", description: "Unit 1 review" },
    ],
  },
  {
    unitNumber: 2,
    description: "Menggunakan kalimat dasar",
    backgroundColor: "bg-[#ce82ff]",
    textColor: "text-[#ce82ff]",
    borderColor: "border-[#a568cc]",
    tiles: [
      { type: "fast-forward", description: "Get around in a city" },
      { type: "dumbbell", description: "Personalized practice" },
      { type: "book", description: "One thing" },
      { type: "treasure" },
      { type: "star", description: "Get around in a city" },
      { type: "book", description: "A very big family" },
      { type: "star", description: "Greet people" },
      { type: "book", description: "The red jacket" },
      { type: "treasure" },
      { type: "dumbbell", description: "Personalized practice" },
      { type: "trophy", description: "Unit 2 review" },
    ],
  },
  {
    unitNumber: 3,
    description: "Menggunakan frasa umum",
    backgroundColor: "bg-[#00cd9c]",
    textColor: "text-[#00cd9c]",
    borderColor: "border-[#00a47d]",
    tiles: [
      { type: "fast-forward", description: "Order food and drink" },
      { type: "book", description: "The passport" },
      { type: "star", description: "Order food and drinks" },
      { type: "treasure" },
      { type: "book", description: "The honeymoon" },
      { type: "star", description: "Get around in a city" },
      { type: "treasure" },
      { type: "dumbbell", description: "Personalized practice" },
      { type: "book", description: "Doctor Eddy" },
      { type: "trophy", description: "Unit 2 review" },
    ],
  },
];
