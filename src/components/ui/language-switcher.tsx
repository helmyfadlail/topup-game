"use client";

import * as React from "react";

import { useLocale } from "next-intl";

import { Locale, usePathname, useRouter } from "@/i18n/routing";

import { useToggleState } from "@/hooks";

import { Img } from "./image";

import { languages } from "@/static";
import { PiCaretUpBold } from "react-icons/pi";
import { LanguageTypes } from "@/types";

export const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const localActive = useLocale();

  const [ref, dropdown, toggleDropdown] = useToggleState();

  const [selectedLng, setSelectedLng] = React.useState<LanguageTypes>();

  const [isPending, startTransition] = React.useTransition();

  const handleChangeLanguage = (e: React.MouseEvent<HTMLButtonElement>, locale: Locale) => {
    e.preventDefault();
    startTransition(() => {
      router.push(pathname, { locale });
    });
    setSelectedLng(languages.find((language) => language.title === locale));
  };

  React.useEffect(() => {
    if (languages) {
      setSelectedLng(languages.find((language) => language.title === localActive));
    }
  }, [languages]);

  return (
    <div className="flex z-10000" ref={ref}>
      <span className="relative flex items-center gap-2 cursor-pointer" onClick={toggleDropdown}>
        <Img className="size-3 md:size-5" src={selectedLng?.pathIcon || ""} alt={selectedLng?.title || ""} />
        {selectedLng?.title.toUpperCase()}
        <PiCaretUpBold className={`${!dropdown && "rotate-180 duration-300"}`} />
        {dropdown && (
          <div className="right-0 w-24 px-4 py-2 popover top-8 bg-dark/50 backdrop-blur">
            {languages.map((item, index) => {
              return (
                <button
                  key={index}
                  disabled={isPending}
                  onClick={(e) => handleChangeLanguage(e, item.title)}
                  className={`flex items-center gap-2 text-xs sm:text-sm uppercase ${localActive === item.title ? "text-light-gray font-semibold" : "text-light font-medium"}`}
                >
                  <Img className="size-3 md:size-5" src={item.pathIcon} alt="United Kingdom Flag" />
                  {item.title}
                </button>
              );
            })}
          </div>
        )}
      </span>
    </div>
  );
};
