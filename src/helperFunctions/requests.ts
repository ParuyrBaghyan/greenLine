import { pageCount } from "@/types/enums";
import { getPriceQuery_int, getSortByQuery } from "./queries";

export function sendPrice_int(filtrationData: any, params: URLSearchParams, type: string) {
    return getPriceQuery_int(params, type) || filtrationData?.data?.[`${type}`]
}

export function sendPage_int(params: URLSearchParams) {
    return JSON.parse(`${params.get('page')}`) || pageCount.defPage
}

export function sendSortBy_int(params: URLSearchParams) {
    return JSON.parse(getSortByQuery(params)!)
}