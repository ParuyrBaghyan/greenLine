"use client";
import { useEffect, useRef, useState } from "react";
import BodyLayout from "@/layouts/bodyLayout/bodyLayout";
import style from "./categoriesClient.module.scss";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useGetAllProductsFilterQuery } from "@/services/filtration/filtration";
import Filtration from "@/component/filtration/filtration";
import Products from "../products";
import { useTranslations } from "use-intl";
import { useGetCategoryNamesQuery, useLazyGetByCategoryQuery, } from "@/services/categories/categories";
import { useInView } from "react-intersection-observer";
import Product from "@/services/interface/product/productModel";

export default function CategoriesClient() {
  const router = useRouter();
  const t = useTranslations();
  const pathname = usePathname();
  const { ref, inView } = useInView();
  const searchParams = useSearchParams();
  const [categoryProductsData, setProductsArray] = useState<Product[]>([])

  const params = new URLSearchParams(searchParams);

  const firstQueryParamName = searchParams.keys().next().value;
  const firstQueryParam = firstQueryParamName && searchParams.get(firstQueryParamName);

  const { data: filtrationData, isLoading: filtratioLoading } = useGetAllProductsFilterQuery({ categoryId: firstQueryParam });

  const { data: categoryNamesData, isError: categoryNamesError, } = useGetCategoryNamesQuery({ parentId: firstQueryParam, });

  const [getByCategory, { isError: categoryProductsError, isLoading: categoryProductsLoading, },] = useLazyGetByCategoryQuery();

  async function fetchData(isEmpty?: boolean) {
    const brandQueryItems = params.get('brandIds') ? params.get('brandIds')!.split(",").map(Number) : [];
    const countryQueryItems = params.get('countryIds') ? params.get('countryIds')!.split(",").map(Number) : [];
    const isDiscounted = params.get('isDiscounted') ? params.get('isDiscounted') : 'false'
    const sortBy = params.get('sortBy');

    const result = await getByCategory({
      brands: [...brandQueryItems],
      categories: [],
      categoryId: firstQueryParam,
      count: 20,
      countries: [...countryQueryItems],
      isDiscounted: JSON.parse(isDiscounted!),
      page: JSON.parse(`${params.get('page')}`) || 1,
      parentId: firstQueryParam,
      priceFrom: JSON.parse(`${params.get('priceFrom')}`) || filtrationData?.data?.priceFrom,
      priceTo: JSON.parse(`${params.get('priceTo')}`) || filtrationData?.data?.priceTo,
      search: null,
      sortBy: JSON.parse(sortBy!),
    });

    console.log(result.data.data.list, "result");

    if (isEmpty) {
      setProductsArray([])
    }
    setProductsArray((prevProducts) => [...prevProducts, ...result.data.data.list]);

  }

  const prevParamsRef = useRef<string | null>(null);

  useEffect(() => {
    params.set('priceFrom', params.get('priceFrom') ? params.get('priceFrom') : filtrationData?.data?.priceFrom)
    params.set('priceTo', params.get('priceTo') ? params.get('priceTo') : filtrationData?.data?.priceTo)
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }, [filtrationData]);

  useEffect(() => {
    const prevParamsString = prevParamsRef.current;

    prevParamsRef.current = params.toString();

    const currentParams = Object.fromEntries(params.entries());
    const prevParams = prevParamsString ? Object.fromEntries(new URLSearchParams(prevParamsString)) : {};

    const hasOtherParamsChanged = Object.keys(currentParams).some((key) =>
      key !== 'page' && currentParams[key] !== prevParams[key]
    );

    if (hasOtherParamsChanged || !prevParamsString) {
      fetchData(true);
    }
    
  }, [searchParams]);


  useEffect(() => {
    if (inView && categoryProductsData) {
      params.set('page', `${JSON.parse(`${params.get('page')}`) + 1}`)
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    }
  }, [inView])

  console.log(categoryProductsData);

  return (
    <BodyLayout>
      <div className={style.categories_container}>
        <div className={style.brand_banner_container}></div>
        <div className={style.categories_filters_and_items}>
          <Filtration
            isLoading={filtratioLoading}
            filtrationTypes={filtrationData?.data}
            subCategories={categoryNamesData?.data.categories}
            parentCategory={categoryNamesData?.data.parentCategory}
          />
          <Products
            isLoading={categoryProductsLoading}
            title={t("allProducts")}
            products={categoryProductsData}
          />
        </div>
      </div>
      <p ref={ref}>ASDASDda</p>
    </BodyLayout>
  );
}
