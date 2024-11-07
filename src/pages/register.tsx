import type { NextPage } from "next";
import Link from "next/link";
import languages from "~/utils/languages";
import { LanguageHeader } from "~/components/LanguageHeader";
import { useBoundStore } from "~/hooks/useBoundStore";
import { Flag } from "~/components/Flag";
import _bgSnow from "../../public/bg-snow.svg";
import type { StaticImageData } from "next/image";

const bgSnow = _bgSnow as StaticImageData;

const Register: NextPage = () => {
  const setLanguage = useBoundStore((x) => x.setLanguage);
  return (
    <main
      className="flex min-h-screen flex-col items-center bg-[#235390] text-white"
      style={{ backgroundImage: `url(${bgSnow.src})` }}
    >
      <LanguageHeader />
      <div className="container flex grow flex-col items-center justify-center gap-20 px-4 py-16">
        <h1 className="mt-20 text-center text-4xl font-extrabold tracking-tight text-white">
          Aku ingin belajar...
        </h1>
        <section className="mx-auto grid w-full max-w-5xl grow grid-cols-1 flex-col gap-x-2 gap-y-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {languages.map((language) => (
            <Link
              key={language.name}
              href="/learn"
              className={
                "flex cursor-pointer justify-center shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-md hover:shadow-gray-900 flex-col items-center gap-4 rounded-2xl border-2 border-gray-400 px-5 py-8 text-2xl font-bold hover:bg-gray-900 hover:bg-opacity-40"
              }
              onClick={() => setLanguage(language)}
            >
              <Flag language={language} />
              <span>{language.name}</span>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
};

export default Register;
