import { defineRouting } from "next-intl/routing";
import { createSharedPathnamesNavigation } from "next-intl/navigation";

export enum Locales {
  AM = "am",
  RU = "ru",
  EN = "en",
}

export const routing = defineRouting({
  locales: [Locales.AM, Locales.RU, Locales.EN],
  defaultLocale: Locales.AM,
});

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation(routing);
