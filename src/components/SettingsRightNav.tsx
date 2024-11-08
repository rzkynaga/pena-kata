import Link from "next/link";
import React from "react";
import { useBoundStore } from "~/hooks/useBoundStore";

type SettingsTitle = ReturnType<typeof useSettingsPages>[number]["title"];

const useSettingsPages = () => {
  const loggedIn = useBoundStore((x) => x.loggedIn);
  return loggedIn
    ? ([
        { title: "Akun", href: "/settings/account" },
        { title: "Suara", href: "/settings/sound" },
        { title: "Edit Target Harian", href: "/settings/coach" },
      ] as const)
    : ([
        { title: "Suara", href: "/settings/sound" },
        { title: "Edit Target Harian", href: "/settings/coach" },
      ] as const);
};

export const SettingsRightNav = ({
  selectedTab,
}: {
  selectedTab: SettingsTitle;
}) => {
  const settingsPages = useSettingsPages();
  return (
    <div className="hidden h-fit w-80 flex-col gap-1 rounded-2xl border-2 border-gray-200 border-opacity-20 p-5 lg:flex">
      {settingsPages.map(({ title, href }) => {
        return (
          <Link
            key={title}
            href={href}
            className={[
              "rounded-2xl p-4 text-gray-200 font-bold hover:bg-gray-700 hover:bg-opacity-20",
              title === selectedTab ? "bg-gray-700  border-blue-300 border-opacity-90" : "",
            ].join(" ")}
          >
            {title}
          </Link>
        );
      })}
    </div>
  );
};
