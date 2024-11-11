import { usePathname, useRouter } from "next/navigation";

interface UpdateUrlProps {
  id: number;
  sortBy: number;
  section: string;
  page: number;
  priceTo: number | null;
  priceFrom: number | null;
}

export function useUpdateUrl() {
  const router = useRouter();
  const path = usePathname();

  function updateUrl({ id, sortBy, section, page, priceTo, priceFrom, }: UpdateUrlProps) {
    const lang = path.slice(1, 3);
    const basePath = `/${lang}/products/${section}`;
    const newUrl = new URL(`${window.location.origin}${basePath}`);

    newUrl.searchParams.append(section, `${id}`);
    newUrl.searchParams.append("sortBy", `${sortBy}`);
    newUrl.searchParams.append("page", `${page}`);
    newUrl.searchParams.append("priceFrom", `${priceFrom}`);
    newUrl.searchParams.append("priceTo", `${priceTo}`);

    if (path !== newUrl.pathname + newUrl.search) {
      router.replace(newUrl.toString(), { scroll: false });
    }
  }

  return { updateUrl };
}


