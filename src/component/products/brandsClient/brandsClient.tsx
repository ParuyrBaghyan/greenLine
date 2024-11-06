"use client";
import { useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useGetByBrandMutation } from "@/services/brands/brands";
import { useGetAllProductsFilterQuery } from "@/services/filtration/filtration";
import { useTranslations } from "use-intl";
import BodyLayout from "@/layouts/bodyLayout/bodyLayout";
import style from "./brandsClient.module.scss";
import Filtration from "@/component/filtration/filtration";
import Products from "../products";
import { useInView } from "react-intersection-observer";

export default function BrandsClient() {
  const t = useTranslations();
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const { ref, inView, entry } = useInView();

  const params = new URLSearchParams(searchParams);

  const firstQueryParamName = searchParams.keys().next().value;
  const firstQueryParam = firstQueryParamName && searchParams.get(firstQueryParamName);

  const [getByBrand, { data: brandProductsData, isLoading: brandProductsLoader }] = useGetByBrandMutation();
  const { data: filtrationData, isLoading: filtratioLoading } = useGetAllProductsFilterQuery({ brandId: firstQueryParam });

  const categoryQueryItems = params.get('categoryIds') ? params.get('categoryIds')!.split(",").map(Number) : [];
  const countryQueryItems = params.get('countryIds') ? params.get('countryIds')!.split(",").map(Number) : [];
  const isDiscounted = params.get('isDiscounted') ? params.get('isDiscounted') : 'false'
  const sortBy = params.get('sortBy');

  async function fetchData() {

    await getByBrand({
      brandId: firstQueryParam,
      brands: [],
      categories: [...categoryQueryItems],
      count: 20,
      countries: [...countryQueryItems],
      isDiscounted: JSON.parse(isDiscounted!),
      page: JSON.parse(`${params.get('page')}`) || 1,
      priceFrom: JSON.parse(`${params.get('priceFrom')}`) || filtrationData?.data?.priceFrom,
      priceTo: JSON.parse(`${params.get('priceTo')}`) || filtrationData?.data?.priceTo,
      search: null,
      sortBy: JSON.parse(sortBy!),
    });
  }

  useEffect(() => {
    params.set('priceFrom', params.get('priceFrom') ? params.get('priceFrom') : filtrationData?.data?.priceFrom)
    params.set('priceTo', params.get('priceTo') ? params.get('priceTo') : filtrationData?.data?.priceTo)
    router.replace(`${pathname}?${params.toString()}`);
  }, [filtrationData]);

  useEffect(() => {
    fetchData();
  }, [searchParams]);

  useEffect(() => {
    if (inView && brandProductsData) {
      params.set('page', `${JSON.parse(`${params.get('page')}`) + 1}`)
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    }
    fetchData();
  }, [inView])

  return (
    <BodyLayout>
      <div className={style.brands_container}>
        <div className={style.brand_banner_container}></div>
        <div className={style.brands_filters_and_items}>
          <Filtration isLoading={filtratioLoading} filtrationTypes={filtrationData?.data} />
          <Products
            isLoading={brandProductsLoader}
            title={t("allProducts")}
            products={brandProductsData?.data.list}
          />
        </div>
      </div>
      <p ref={ref}>ASDASDda</p>
    </BodyLayout>
  );
}
