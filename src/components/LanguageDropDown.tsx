import { useState } from "react";

export const LanguageDropDown = () => {
  const [languagesShown, setLanguagesShown] = useState(false);
  return (
    <div
      className="relative hidden cursor-pointer items-center md:flex"
      onMouseEnter={() => setLanguagesShown(true)}
      onMouseLeave={() => setLanguagesShown(false)}
      aria-haspopup={true}
      aria-expanded={languagesShown}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          setLanguagesShown((isShown) => !isShown);
        }
      }}
    >
      <span className="text-md uppercase">Bahasa Situs: Bahasa Indonesia</span>{" "}
    </div>
  );
};
