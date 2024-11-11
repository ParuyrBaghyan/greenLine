import { pageCount } from "@/types/enums";
import { getPriceQuery_int, getSortByQuery } from "./queries";

export function getPrice_int(filtrationData: any, params: URLSearchParams, type: string) {
    return getPriceQuery_int(params, type) || filtrationData?.data?.[`${type}`]
}

export function getPrice_str(filtrationData: any, params: URLSearchParams, type: string) {
    return params.get(type) || filtrationData?.data?.[`${type}`]
}

export function getPage_int(params: URLSearchParams):number {
    return JSON.parse(`${params.get('page')}`) || pageCount.defPage
}

export function getSortBy_int(params: URLSearchParams) {
    return JSON.parse(getSortByQuery(params)!)
}