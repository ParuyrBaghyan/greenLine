import { SortByArrayModel } from "@/services/interface/filtration/allProudctsFilter";
import Product from "@/services/interface/product/productModel";
import { pageCount } from "@/types/enums";

export function showPrice(params: URLSearchParams, price: number, key: string): number {
    const paramValue = params.get(key);
    return paramValue && paramValue !== 'null' ? Number(paramValue) : price;
}

export function getUniqueArray(categoryProductsData: Product[], result: Product[]) {
    const concatedData = [...categoryProductsData, ...result]
    return Array.from(new Map(concatedData.map((item: Product) => [item.id, item])).values());

}

export function getProductsLoaderState(response: any, productsLocalData: Product[]) {
    return response?.data?.itemCount > pageCount.itemsToShow &&
        productsLocalData.length < response?.data?.itemCount
}

export function getSelectedSortTitle(params: URLSearchParams, sortByArray: SortByArrayModel[]) {
    return sortByArray.find((item) => item.type == +params.get("sortBy")!)?.title
}

export function checkFiltrationExistence(params: URLSearchParams,filtrationTypes:any) {
    if (!params?.has('isDiscounted') &&
        !params?.has('countryIds') &&
        !params?.has('brandIds') &&
        !params?.has('categoryIds') &&
        (params?.get('priceFrom') === 'null' || params?.get('priceFrom') === `${filtrationTypes?.priceFrom}`) &&
        (params?.get('priceTo') === 'null'  || params?.get('priceTo') === `${filtrationTypes?.priceTo}`)) {
        return false
    }
    else {
        return true
    }
}