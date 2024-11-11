"use client";
import { useEffect, useState } from "react";
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
import { pageCount } from "@/types/enums";
import { getDiscountQuery, getNecessaryQuery, getSortByQuery } from "@/helperFunctions/queries";
import { sendPage_int, sendPrice_int, sendSortBy_int } from "@/helperFunctions/requests";

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

  const [getByCategory, { data: fetchedCategoryProducts, isError: categoryProductsError, isLoading: categoryProductsLoading, },] = useLazyGetByCategoryQuery();

  async function fetchData({ clear }: { clear: boolean }) {
    const brandQueryItems = getNecessaryQuery(params, 'brandIds');
    const countryQueryItems = getNecessaryQuery(params, 'countryIds');
    const isDiscounted = getDiscountQuery(params)

    const result = await getByCategory({
      brands: [...brandQueryItems],
      categories: [],
      categoryId: firstQueryParam,
      count: pageCount.itemsToShow,
      countries: [...countryQueryItems],
      isDiscounted: JSON.parse(isDiscounted!),
      page: sendPage_int(params),
      parentId: firstQueryParam,
      priceFrom: sendPrice_int(filtrationData, params, 'priceFrom'),
      priceTo: sendPrice_int(filtrationData, params, 'priceTo'),
      search: null,
      sortBy: sendSortBy_int(params),
    });

    if (clear === true) {
      setProductsArray([])
      setProductsArray(result.data.data.list);
    } else {
      const concatedData = [...categoryProductsData, ...result.data.data.list]
      const uniqueArray: any = Array.from(new Map(concatedData.map((item: Product) => [item.id, item])).values());
      setProductsArray(uniqueArray);
    }
  }

  console.log(firstQueryParam);
  

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
    console.log(inView, 'inView');

    if (inView === true && categoryProductsData.length >= pageCount.itemsToShow) {
      params.set('page', `${JSON.parse(`${params.get('page')}`) + pageCount.add}`)
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    }
    fetchData({ clear: false });
  }, [inView])


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
      {fetchedCategoryProducts?.data.itemCount > 20 && <p ref={ref}></p>}
    </BodyLayout>
  );
}
