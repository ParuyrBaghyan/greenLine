import { ReadonlyURLSearchParams } from "next/navigation";
import { getPage_int, getPrice_str } from "./requests";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { pageCount } from "@/types/enums";

export function replaceURL(router: AppRouterInstance, params: URLSearchParams, pathname: string) {
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
}

export function getFirstQueryParam(searchParams: ReadonlyURLSearchParams) {
    const firstQueryParamName = searchParams.keys().next().value;
    return firstQueryParamName && searchParams.get(firstQueryParamName)
}

export function getNecessaryQuery(params: URLSearchParams, filterType: string) {
    return params.get(filterType) ? params.get(filterType)!.split(",").map(Number) : [];
}

export function getDiscountQuery(params: URLSearchParams) {
    return params.get('isDiscounted') ? params.get('isDiscounted') : 'false'
}

export function getPriceQuery_int(params: URLSearchParams, type: string) {
        return JSON.parse(`${params.get(type)}`)
}

export function getSortByQuery(params: URLSearchParams) {
    return params.get('sortBy')
}

export function setPriceQuery(type: string, params: URLSearchParams, filtrationData: any) {
    params.set(type, getPrice_str(filtrationData, params, type))

}
export function changePriceQuery(value: string, params: URLSearchParams, changeValue: number, keepValue: number, changeValueType: string, keepValueType: string) {
    if (params.get(changeValueType) !== '0') {
        params.set(changeValueType, `${value === "" ? "0" : !!value ? value : changeValue}`)
        params.set(keepValueType, `${params.get(keepValueType) !== "null" ? params.get(keepValueType) : keepValue}`)
    } else {
        params.set(changeValueType, `${value === "" ? "0" : !!value ? value : changeValue}`.slice(1))
        params.set(keepValueType, `${params.get(keepValueType) !== "null" ? params.get(keepValueType) : keepValue}`)
    }
}


export function setAddPageCountQuery(params: URLSearchParams) {
    params.set('page', `${getPage_int(params) + pageCount.add}`)
}