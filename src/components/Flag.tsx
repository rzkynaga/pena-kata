import Image from "next/image";
import type { Language } from "~/utils/languages";

export const Flag = ({
  language,
}: {
  language: Language;
  width?: number;
}) => {
  return (
    <Image
      src={`/flags/${language.name}.png`}
      height={70}
      width={70}
      alt={language.name}
    />
  );
};