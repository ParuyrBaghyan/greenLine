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
import { getPage_int, getPrice_int, getSortBy_int } from "@/helperFunctions/requests";
import { getDiscountQuery, getFirstQueryParam, getNecessaryQuery, replaceURL, setAddPageCountQuery, setPriceQuery } from "@/helperFunctions/queries";
import { getProductsLoaderState, getUniqueArray } from "@/helperFunctions/helperClientFunctions";
import ProductsLoader from "@/component/UI/productsLoader/productsLoader";

export default function BrandsClient() {
  const router = useRouter();
  const t = useTranslations();
  const pathname = usePathname();
  const { ref, inView } = useInView();
  const searchParams = useSearchParams();
  const [brandProductsData, setProductsArray] = useState<Product[]>([])

  const params = new URLSearchParams(searchParams);

  const firstQueryParam = getFirstQueryParam(searchParams)

  const [getByBrand, { data: brandProductsFetchedData, isLoading: brandProductsLoader }] = useLazyGetByBrandQuery();
  const { data: filtrationData, isLoading: filtratioLoading } = useGetAllProductsFilterQuery({ brandId: firstQueryParam });

  async function fetchData({ clear }: { clear: boolean }) {
    const categoryQueryItems = getNecessaryQuery(params, 'categoryIds');
    const countryQueryItems = getNecessaryQuery(params, 'countryIds');
    const isDiscounted = getDiscountQuery(params)

    const result = await getByBrand({
      brandId: firstQueryParam,
      brands: [],
      categories: [...categoryQueryItems],
      count: pageCount.itemsToShow,
      countries: [...countryQueryItems],
      isDiscounted: JSON.parse(isDiscounted!),
      page: getPage_int(params),
      priceFrom: getPrice_int(filtrationData, params, 'priceFrom'),
      priceTo: getPrice_int(filtrationData, params, 'priceTo'),
      search: null,
      sortBy: getSortBy_int(params),
    });

    if (clear === true) {
      setProductsArray([])
      setProductsArray(result?.data?.data?.list);
    } else {
      const uniqueArray: Product[] = getUniqueArray(brandProductsData, result?.data?.data?.list)
      setProductsArray(uniqueArray);
    }
  }

  useEffect(() => {
    setPriceQuery('priceFrom', params, filtrationData)
    setPriceQuery('priceTo', params, filtrationData)
    replaceURL(router, params, pathname)
  }, [filtrationData]);

  useEffect(() => {
    if (inView !== true) {
      fetchData({ clear: true });
    }
  }, [searchParams]);

  useEffect(() => {
    if (inView === true && brandProductsData.length >= pageCount.itemsToShow) {
      setAddPageCountQuery(params)
      replaceURL(router, params, pathname)
    }
    fetchData({ clear: false });
  }, [inView])

  return (
    <BodyLayout>
      <div className={style.brands_container}>
        <div className={style.brand_banner_container}></div>
        <div className={style.brands_filters_and_items}>
          <Filtration isLoading={filtratioLoading} filtrationTypes={filtrationData?.data} params={params}/>
          <Products
            isLoading={brandProductsLoader}
            title={t("allProducts")}
            products={brandProductsData}
          />
        </div>
      </div>
      {getProductsLoaderState(brandProductsFetchedData, brandProductsData) && <ProductsLoader ref={ref} />}

    </BodyLayout>
  );
}
