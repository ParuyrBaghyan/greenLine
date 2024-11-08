"use client";
import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useLazyGetByBrandQuery } from "@/services/brands/brands";
import { useGetAllProductsFilterQuery } from "@/services/filtration/filtration";
import { useTranslations } from "use-intl";
import BodyLayout from "@/layouts/bodyLayout/bodyLayout";
import style from "./brandsClient.module.scss";
import Filtration from "@/component/filtration/filtration";
import Products from "../products";
import { useInView } from "react-intersection-observer";
import Product from "@/services/interface/product/productModel";
import { pageCount } from "@/types/enums";

export default function BrandsClient() {
  const router = useRouter();
  const t = useTranslations();
  const pathname = usePathname();
  const { ref, inView } = useInView();
  const searchParams = useSearchParams();
  const [brandProductsData, setProductsArray] = useState<Product[]>([])

  const params = new URLSearchParams(searchParams);

  const firstQueryParamName = searchParams.keys().next().value;
  const firstQueryParam = firstQueryParamName && searchParams.get(firstQueryParamName);

  const [getByBrand, { data: brandProductsFetchedData, isLoading: brandProductsLoader }] = useLazyGetByBrandQuery();
  const { data: filtrationData, isLoading: filtratioLoading } = useGetAllProductsFilterQuery({ brandId: firstQueryParam });

  async function fetchData({ clear }: { clear: boolean }) {
    const categoryQueryItems = params.get('categoryIds') ? params.get('categoryIds')!.split(",").map(Number) : [];
    const countryQueryItems = params.get('countryIds') ? params.get('countryIds')!.split(",").map(Number) : [];
    const isDiscounted = params.get('isDiscounted') ? params.get('isDiscounted') : 'false'
    const sortBy = params.get('sortBy');

    const result = await getByBrand({
      brandId: firstQueryParam,
      brands: [],
      categories: [...categoryQueryItems],
      count: pageCount.itemsToShow,
      countries: [...countryQueryItems],
      isDiscounted: JSON.parse(isDiscounted!),
      page: JSON.parse(`${params.get('page')}`) || pageCount.defPage,
      priceFrom: JSON.parse(`${params.get('priceFrom')}`) || filtrationData?.data?.priceFrom,
      priceTo: JSON.parse(`${params.get('priceTo')}`) || filtrationData?.data?.priceTo,
      search: null,
      sortBy: JSON.parse(sortBy!),
    });



    if (clear === true) {
      setProductsArray([])
      setProductsArray(result.data.data.list);
    } else {
      const concatedData = [...brandProductsData, ...result.data.data.list]
      const uniqueArray: any = Array.from(new Map(concatedData.map((item: Product) => [item.id, item])).values());
      setProductsArray(uniqueArray);
    }
  }

  useEffect(() => {
    params.set('priceFrom', params.get('priceFrom') ? params.get('priceFrom') : filtrationData?.data?.priceFrom)
    params.set('priceTo', params.get('priceTo') ? params.get('priceTo') : filtrationData?.data?.priceTo)
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }, [filtrationData]);

  useEffect(() => {
    if (inView !== true) {
      fetchData({ clear: true });
    }
  }, [searchParams]);

  useEffect(() => {
    if (inView === true && brandProductsData.length >= pageCount.itemsToShow) {
      params.set('page', `${JSON.parse(`${params.get('page')}`) + pageCount.add}`)
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    }
    fetchData({ clear: false });
  }, [inView])

  console.log(brandProductsData);


  return (
    <BodyLayout>
      <div className={style.brands_container}>
        <div className={style.brand_banner_container}></div>
        <div className={style.brands_filters_and_items}>
          <Filtration isLoading={filtratioLoading} filtrationTypes={filtrationData?.data} />
          <Products
            isLoading={brandProductsLoader}
            title={t("allProducts")}
            products={brandProductsData}
          />
        </div>
      </div>
      {(brandProductsFetchedData?.data.itemCount > 20 &&
        brandProductsData.length < brandProductsFetchedData?.data.itemCount) && <p ref={ref}></p>}
        
    </BodyLayout>
  );
}
