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
import { getDiscountQuery, getFirstQueryParam, getNecessaryQuery, replaceURL, setAddPageCountQuery, setPriceQuery } from "@/helperFunctions/queries";
import { getPage_int, getPrice_int, getSortBy_int } from "@/helperFunctions/requests";
import { getProductsLoaderState, getUniqueArray } from "@/helperFunctions/helperClientFunctions";
import ProductsLoader from "@/component/UI/productsLoader/productsLoader";


export default function CategoriesClient() {
  const router = useRouter();
  const t = useTranslations();
  const pathname = usePathname();
  const { ref, inView } = useInView();
  const searchParams = useSearchParams();
  const [categoryProductsData, setProductsArray] = useState<Product[]>([])

  const params = new URLSearchParams(searchParams);

  const firstQueryParam = getFirstQueryParam(searchParams)

  const { data: filtrationData, isLoading: filtratioLoading } = useGetAllProductsFilterQuery({ categoryId: firstQueryParam });

  const { data: categoryNamesData, isError: categoryNamesError, } = useGetCategoryNamesQuery({ parentId: firstQueryParam, });

  const [getByCategory, { data: fetchedCategoryProducts, isError: categoryProductsError, isLoading: categoryProductsLoading, },] = useLazyGetByCategoryQuery();

  async function fetchData({ clear }: { clear: boolean }) {
    const brandQueryItems = getNecessaryQuery(params, 'brandIds');
    debugger
    const countryQueryItems = getNecessaryQuery(params, 'countryIds');
    const isDiscounted = getDiscountQuery(params)

    const result = await getByCategory({
      brands: [...brandQueryItems],
      categories: [],
      categoryId: firstQueryParam,
      count: pageCount.itemsToShow,
      countries: [...countryQueryItems],
      isDiscounted: JSON.parse(isDiscounted!),
      page: getPage_int(params),
      parentId: firstQueryParam,
      priceFrom: getPrice_int(filtrationData, params, 'priceFrom'),
      priceTo: getPrice_int(filtrationData, params, 'priceTo'),
      search: null,
      sortBy: getSortBy_int(params),
    });

    if (clear === true) {
      setProductsArray([])
      setProductsArray(result.data.data.list);
    } else {
      const uniqueArray: Product[] = getUniqueArray(categoryProductsData, result.data.data.list)
      setProductsArray(uniqueArray);
    }
  }

  useEffect(() => {
    setPriceQuery('priceFrom', params, filtrationData)
    setPriceQuery('priceTo', params, filtrationData)
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }, [filtrationData]);

  useEffect(() => {
    if (inView !== true) {
      fetchData({ clear: true });
    }
  }, [searchParams]);

  useEffect(() => {
    if (inView === true && categoryProductsData.length >= pageCount.itemsToShow) {
      setAddPageCountQuery(params)
      replaceURL(router, params, pathname)
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
            params={params}
          />
          <Products
            isLoading={categoryProductsLoading}
            title={t("allProducts")}
            products={categoryProductsData}
          />
        </div>
      </div>
      {getProductsLoaderState(fetchedCategoryProducts ,categoryProductsData) && <ProductsLoader ref={ref} />}

    </BodyLayout>
  );
}
